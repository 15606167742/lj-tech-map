var objectList=[];
var InteractiveObjectList=[];
var objectStore={
	_types:{},
	add:function(obj){
		objectList.push(obj);
		//var op=Object.assign({},obj.params);
		var op={params:obj.params};
		if(objectStore[op.type]==null){
			objectStore[op.type]=0;
		}
		objectStore[op.type]++;
		
		op.name=obj.name+objectStore[op.type];
		op.selected=false;
		menuState.objectList.push(op);
		
		if(obj.params.type=='Rect'){
			InteractiveObjectList.push(obj.object);
		}
	},
	remove:function(obj){
		for(var i=0;i<objectList.length;i++)
	    {
	        if(objectList[i]==obj)
	        {
	            objectList.splice(i,1);
	            menuState.objectList.splice(i,1);
	            break;
	        }
	    }
	}
};

/*Array.prototype.remove=function(obj){
    for(var i=0;i<this.length;i++)
    {
        if(this[i]==obj)
        {
            this.splice(i,1);
        }
    }
}

Array.prototype.removeAt=function(i){
    this.splice(i,1);
}*/

common.combineParams=function(oparams,cparams){
	if(cparams!=undefined){
		for(var name in cparams){
			if(typeof cparams[name]=='object'&&cparams[name].length==null&&oparams[name]!=null){
				oparams[name]=common.combineParams(oparams[name],cparams[name]);
			}
			else{
				oparams[name]=cparams[name];
			}
		}
	}
	return oparams;
}

var ThreeMap={
	_Basic:function(){
		this.object;
		this.objectArea;
		this.label;
		this.params={position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},map:{opacity:1,color:'',name:'',repeat:1},label:{visible:false,text:''}};
		this.path;
		this.states;
		
		this._setLabel=function(p){
			if(p.label!=null){
				if(this.params.label.visible){
					if(this.label==null){
						var labelDiv=document.createElement('div');
						labelDiv.className='objectlabel';
						labelDiv.innerHTML=
						//'<img src="img/at.png" style="align-self:center"/>'+
						//'<div class="dialog">'+
						//	'<div class="line"></div>'+
						//	'<div class="text">'+this.params.label.text+'</div>'+
						//'</div>';
						'<div class="tagging"></div>'+
						'<div class="dialog"><div class="border">'+
							'<div class="text">'+this.params.label.text+'</div>'+
						'</div></div>';
						var position=[];
						if(this.params.label.position){
							position=this.params.label.position.split('|');
							if(position.indexOf('left')!=-1){
								labelDiv.className+=' left';
							}
							if(position.indexOf('bottom')!=-1){
								labelDiv.className+=' bottom';
							}
						}
						labelDiv.showPosition=position;
						
						var label=new THREE.CSS2DObject(labelDiv);
						scene.add(label);
						this.label=label;
					}
					else if(p.label.text!=null){
						jQuery(this.label.element).find('.text').html(p.label.text);
					}
				}
				else if(this.label!=null&&p.label.visible===false){
					scene.remove(this.label);
					this.label=null;
					jQuery(this.label).remove();
				}
			}
			if(this.label!=null){
				var position=Object.assign({},this.params.position);
				position.x+=(this.objectArea.x.min+this.objectArea.x.max)/2;
				if(this.params.label.position&&this.params.label.position.indexOf('bottom')!=-1){
					position.y+=this.objectArea.y.min;
				}
				else{
					position.y+=this.objectArea.y.max;
				}
				position.z+=(this.objectArea.z.min+this.objectArea.z.max)/2;
				this.label.position.set(position.x, position.y, position.z);
			}
		};
		
		this.currentDistance=0;
		this.step=5;
		this.move=function(){
			if(this.path!=null){
				this.currentDistance+=this.step;
				if(this.currentDistance>this.path.sumDistance){
					this.currentDistance=0;
				}
				var v=getPositionByDistance(this.currentDistance,this.path.sumDistance,this.path.distances,this.path.vertices);
				//console.log(objectRotate(v.v,v.nv,'y'));
				//console.log(objectRotate(v.v,v.nv,'z'));
				this.update({position:{x:v.x,y:v.y,z:v.z},rotation:{y:objectRotate(v.v,v.nv,'y'),z:objectRotate(v.v,v.nv,'z')}});
				//car.rotation.y=objectRotate(v.v,v.nv,'y');
				//car.rotation.z=objectRotate(v.v,v.nv,'z');
			}
		};
		
		this._createHoles=function(geometry){
			if(this.params.holes!=null&&this.params.holes.length!=0){
				var resultBSP=new ThreeBSP(geometry);
				
				for(var i=0;i<this.params.holes.length;i++){
					var hole=this.params.holes[i];
					
					var shape = new THREE.Shape();
					shape.moveTo(-hole.width/2,-hole.height/2);
					shape.lineTo(hole.width/2,-hole.height/2);
					shape.lineTo(hole.width/2,hole.height/2);
					shape.lineTo(-hole.width/2,hole.height/2);
					var options = {
		                depth: hole.depth,
		                bevelThickness :0,
		                bevelSize:1,
		                bevelSegments:1
		            };
					var holeGeometry=new THREE.ExtrudeGeometry(shape, options);
					//var holeGeometry = new THREE.BoxGeometry( hole.width, hole.height, hole.depth );
					
					var holeMesh = new THREE.Mesh( holeGeometry );
					if(hole.position!=null){
						holeMesh.position.x=hole.position.x;
						holeMesh.position.y=-hole.position.z;
						holeMesh.position.z=hole.position.y;
					}
                	resultBSP = resultBSP.subtract(new ThreeBSP(holeMesh));
                }
                geometry = resultBSP.toGeometry();
			}
			return geometry;
		}
		
		this._create=function(geometry,isSceneAdd){
			geometry=this._createHoles(geometry);
			var material = new THREE.MeshLambertMaterial();
			var mesh = new THREE.Mesh( geometry, material );
			
			mesh.objectType='object';
			mesh.objectClass=this;
			this.objectArea=getObjectArea(mesh);
			this.object=mesh;
			this.update({position:this.params.position,rotation:this.params.rotation,map:this.params.map,label:this.params.label});
			
			if(isSceneAdd==undefined){
				isSceneAdd=true;
			}
			if(isSceneAdd){
				scene.add(this.object);
				objectStore.add(this);
			}
		};
		
		this._update=function(p){
			this.object.geometry=this._createHoles(this.object.geometry);
			
			if(p.map!=null){
				if(p.map.color!=null){
					this.object.material.color=new THREE.Color(p.map.color);
				}
				if(p.map.opacity!=null){
					this.object.material.opacity=p.map.opacity;
					this.object.material.transparent=p.map.opacity<1;
				}
				if(p.map.name!=null){
					this.object.material.map=textures[this.params.map.name];
					this.object.material.needsUpdate=true;
				}
				if(this.params.map.name.trim()!=''&&p.map.repeat!=null){
					this.object.material.map.repeat={x:this.params.map.repeat,y:this.params.map.repeat};
				}
			}
			
			if(p.position!=null){
				if(p.position.x!=null){
					this.object.position.x=this.params.position.x;
				}
				if(p.position.y!=null){
					this.object.position.y=this.params.position.y;
				}
				if(p.position.z!=null){
					this.object.position.z=this.params.position.z;
				}
			}
			
			if(p.rotation!=null){
				if(p.rotation.x!=null){
					this.object.rotation.x=this.params.rotation.x/180*Math.PI;
				}
				if(p.rotation.y!=null){
					this.object.rotation.y=this.params.rotation.y/180*Math.PI;
				}
				if(p.rotation.z!=null){
					this.object.rotation.z=this.params.rotation.z/180*Math.PI;
				}
				this.objectArea=getObjectArea(this.object);
			}
			this._setLabel(p);
		};
		
		this.updateState=function(p,isForce){
			for(var name in p){
				var ostate=this.states[name];
				if(this.states[name]!=p[name]||isForce){
					this.states[name]=p[name];
					if(this.params.modelName){
						stateEvents[this.params.modelName][name].change(this,p[name],ostate);
					}
					else{
						console.error('modelName为空');
					}
				}
			}
		};
		
		/*this.getParams=function(){
			return this.params;
		};*/
		
		this.remove=function(){
			scene.remove(this.object);
			objectStore.remove(this);
		};
		
		this.guiParams=[
			{text:'外形',settings:[
				{text:'长',field:'width',min:0,max:10000},
				{text:'宽',field:'height',min:0,max:10000},
				{text:'高',field:'depth',min:0,max:10000},
			]},
			{text:'位置',settings:[
				{text:'X',field:'position.x',min:-10000,max:10000,step:0.1},
				{text:'Y',field:'position.y',min:-10000,max:10000,step:0.1},
				{text:'Z',field:'position.z',min:-10000,max:10000,step:0.1},
			]},
			{text:'旋转',settings:[
				{text:'X轴',field:'rotation.x',min:-360,max:360,step:0.1},
				{text:'Y轴',field:'rotation.y',min:-360,max:360,step:0.1},
				{text:'Z轴',field:'rotation.z',min:-360,max:360,step:0.1},
			]},
			{text:'纹理',settings:[
				{text:'颜色',field:'map.color',items:['','red','orange','yellow','green','blue','purple','black','gray','white']},
				{text:'透明度',field:'map.opacity',min:0.02,max:1.0,step:0.01},
				{text:'纹理类型',field:'map.name',items:['','stone','grass','wall','chimney','black','floor','outwall','roof']},
				{text:'纹理密度',field:'map.repeat',min:0.001,max:0.1,step:0.001},
			]}
		]
	},
	Circle:function(p){
		ThreeMap._Basic.call(this);
		common.combineParams(this.params,{type:'Circle',hollow:false,holes:[],width:1,depth:20,rotation:{x:-90,y:0,z:0}});
		common.combineParams(this.params,p);
		
		this.name='圆柱';
		this._createGeometry=function(){
			var shape = new THREE.Shape();
			shape.absarc(0,0,this.params.width/2);
			/*var ps=shape.curves[0].getPoints(100);
			shape = new THREE.Shape();
			shape.setFromPoints(ps);*/
			
			if(this.params.hollow==true){
				shape.holes.push(shape);
			}
			
			var options = {
                depth: this.params.depth,
                bevelThickness :0,
                bevelSize:1,
                bevelSegments:1
            };
			var geometry=new THREE.ExtrudeGeometry(shape, options);
			return geometry;
		};
		
		this.create=function(){
			this._create(this._createGeometry());
		};
		
		this.update=function(p){
			common.combineParams(this.params,p);
			if(p.width!=null||p.depth!=null||p.hollow!=null){
				this.object.geometry=this._createGeometry();
				this.objectArea=getObjectArea(this.object);
			}
			this._update(p);
		};
		
		this.guiParams[0].settings=[
			{text:'长',field:'width',min:0,max:10000},
			{text:'高',field:'depth',min:0,max:10000},
			{text:'是否空心',field:'hollow',type:'switch'},
		];
	},
	Model:function(p){
		ThreeMap._Basic.call(this);
		common.combineParams(this.params,{type:'Model',modelName:'bed'});
		common.combineParams(this.params,p);
		
		this.name='模型';
		this.create=function(){
			var mesh = models[this.params.modelName].clone();
			mesh.objectType='object';
			mesh.objectClass=this;
			this.objectArea=getObjectArea(mesh);
			
			this.object=mesh;
			this.update({position:this.params.position,rotation:this.params.rotation,label:this.params.label});
			
			if(this.params.states!=null){
				var states={};
				for(var name in stateEvents[this.params.modelName]){
					states[name]=stateEvents[this.params.modelName][name].default;
				}
				
				this.states=states;
				this.updateState(this.params.states);
				delete this.params.states;
			}
			
			scene.add(this.object);
			objectStore.add(this);
		};
		
		this.update=function(p){
			common.combineParams(this.params,p);
			this._update(p);
		};
		
		this.guiParams.splice(0,1);
		this.guiParams.splice(2,1);
	},
	/*CustomModel:function(p){
		var this.params=common.combineParams({type:'CustomModel',modelId:'5c63bba0e1643c25a061e1d7',position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0}},p);
		ThreeMap._Basic.call(this,this.params);
		
		this.create=function(){
			var that=this;
			db.collection('objects').find({mapId:this.params.modelId},function(data){
				if(data.length==0)
					return;
				var objs=data[0].objects;
				
				var mesh = new THREE.Group();
				for(var i=0;i<objs.length;i++){
					var obj=new ThreeMap[objs[i].type](objs[i]);
					obj.create(false);
					mesh.add(obj.object);
				}
				
				mesh.objectType='object';
				mesh.objectClass=that;
				that.objectArea=getObjectArea(mesh);
				
				var geometry = new THREE.BoxBufferGeometry(
					that.objectArea.x.max-that.objectArea.x.min,
					that.objectArea.y.max-that.objectArea.y.min,
					that.objectArea.z.max-that.objectArea.z.min);
				var m=new THREE.LineSegments( geometry, new THREE.LineBasicMaterial( { color: 0xcccccc } ));
				m.position.y-=that.objectArea.y.min;
				mesh.add(m);
				
				
				that.object=mesh;
				that.update({position:this.params.position,rotation:this.params.rotation});
				
				scene.add(that.object);
				objectStore.add(that);
			});
		};
		
		this.update=function(p){
			this.params=common.combineParams(this.params,p);
			this._update(p);
		};
		
		this.guiParams.splice(0,1);
		this.guiParams.splice(2,1);
	},*/
	Rect:function(p){
		ThreeMap._Basic.call(this);
		common.combineParams(this.params,{type:'Rect',hollow:false,holes:[],round:{enable:false,radius:5},width:1,height:1,depth:20,top:{depth:0.1,map:{color:'',name:'',repeat:1},visible:false},bottom:{depth:1,visible:false,map:{color:'',name:'',repeat:1}},rotation:{x:-90,y:0,z:0}});
		common.combineParams(this.params,p);
		
		this.name='长方体';
		this._createGeometry=function(depth,hollow){
			var shape = new THREE.Shape();
			if(this.params.round.enable){
				shape.moveTo(-this.params.width/2+this.params.round.radius,-this.params.height/2);
				shape.lineTo(this.params.width/2-this.params.round.radius,-this.params.height/2);
				shape.lineTo(this.params.width/2,-this.params.height/2+this.params.round.radius);
				shape.lineTo(this.params.width/2,this.params.height/2-this.params.round.radius);
				
				shape.lineTo(this.params.width/2-this.params.round.radius,this.params.height/2);
				shape.lineTo(-this.params.width/2+this.params.round.radius,this.params.height/2);
				shape.lineTo(-this.params.width/2,this.params.height/2-this.params.round.radius);
				shape.lineTo(-this.params.width/2,-this.params.height/2+this.params.round.radius);
				
				/*
				shape.absarc(this.params.width/2-this.params.round.radius,-this.params.height/2+this.params.round.radius,this.params.round.radius,Math.PI*1.5,0);
				*/
				
				/*var ps=shape.curves[0].getPoints(100);
				shape = new THREE.Shape();
				shape.setFromPoints(ps);*/
			}
			else{
				shape.moveTo(-this.params.width/2,-this.params.height/2);
				shape.lineTo(this.params.width/2,-this.params.height/2);
				shape.lineTo(this.params.width/2,this.params.height/2);
				shape.lineTo(-this.params.width/2,this.params.height/2);
			}
			
			
			/*var shape = new THREE.Shape();
			shape.absarc(0,0,this.params.width/2);
			var ps=shape.curves[0].getPoints(100);
			shape = new THREE.Shape();
			shape.setFromPoints(ps);
			
			if(this.params.hollow==true){
				shape.holes.push(shape);
			}
			
			var options = {
                depth: this.params.depth,
                bevelThickness :0,
                bevelSize:1,
                bevelSegments:1
            };
			var geometry=new THREE.ExtrudeGeometry(shape, options);
			return geometry;*/
			
			
			if(hollow==true){
				shape.holes.push(shape);
			}
			
			var options = {
                depth: depth,
                bevelThickness :0,
                bevelSize:1,
                bevelSegments:1
            };
			var geometry=new THREE.ExtrudeGeometry(shape, options);
			return geometry;
		};
		
		this.create=function(isSceneAdd){
			this._create(this._createGeometry(this.params.depth,this.params.hollow),isSceneAdd);
			this.update({top:this.params.top,bottom:this.params.bottom});
		};
		
		var getPart=function(object,partType){
			var result;
			for(var i=0;i<object.children.length;i++){
				var obj=object.children[i];
				if(obj.partType==partType){
					result=obj;
					break;
				}
			}
			return result;
		};
		
		this.update=function(p){
			common.combineParams(this.params,p);
			if(p.top!=null){
				var topObject;
				if(p.top.visible==false){
					topObject=getPart(this.object,'top');
					if(topObject!=null){
						this.object.children.remove(topObject);
					}
				}
				else{
					topObject=getPart(this.object,'top');
					if(topObject==null){
						var geometry=this._createGeometry(this.params.top.depth,this.params.hollow);
						var material = new THREE.MeshLambertMaterial();
						var mesh = new THREE.Mesh( geometry, material );
						mesh.partType='top';
						mesh.position.z=this.params.depth;
						//会出错
						if(this.params.top.clip==true)
							mesh.geometry=this._createHoles(mesh);
						this.object.add(mesh);
						topObject=mesh;
					}
				}
				
				if(topObject!=null){
					if(this.params.top.map.color!=null){
						topObject.material.color=new THREE.Color(this.params.top.map.color);
					}
					if(this.params.top.map.name!=null){
						topObject.material.map=textures[this.params.top.map.name];
						topObject.material.needsUpdate=true;
					}
					if(this.params.top.map.name.trim()!=''&&this.params.top.map.repeat!=null){
						topObject.material.map.repeat={x:this.params.top.map.repeat,y:this.params.top.map.repeat};
					}
				}
			}
			if(p.bottom!=null){
				var bottomObject;
				if(p.bottom.visible==false){
					bottomObject=getPart(this.object,'bottom');
					if(bottomObject!=null){
						this.object.children.remove(bottomObject);
					}
				}
				else{
					bottomObject=getPart(this.object,'bottom');
					if(bottomObject==null){
						var geometry=this._createGeometry(this.params.bottom.depth,false);
						var material = new THREE.MeshLambertMaterial();
						var mesh = new THREE.Mesh( geometry, material );
						mesh.partType='bottom';
						if(this.params.bottom.clip==true)
							mesh.geometry=this._createHoles(mesh);
						this.object.add(mesh);
						bottomObject=mesh;
					}
				}
				
				if(bottomObject!=null){
					if(this.params.bottom.map.color!=null){
						bottomObject.material.color=new THREE.Color(this.params.bottom.map.color);
					}
					if(this.params.bottom.map.name!=null){
						bottomObject.material.map=textures[this.params.bottom.map.name];
						bottomObject.material.needsUpdate=true;
					}
					if(this.params.bottom.map.name.trim()!=''&&this.params.bottom.map.repeat!=null){
						bottomObject.material.map.repeat={x:this.params.bottom.map.repeat,y:this.params.bottom.map.repeat};
					}
				}
			}
			if(p.width!=null||p.height!=null||p.depth!=null||p.hollow!=null||p.holes!=null){
				this.object.geometry=this._createGeometry(this.params.depth,this.params.hollow);
				if(this.params.bottom.visible&&(p.width!=null||p.height!=null)){
					getPart(this.object,'bottom').geometry=this._createGeometry(this.params.bottom.depth,false);
				}
				if(this.params.top.visible&&(p.width!=null||p.height!=null||p.depth!=null||p.hollow!=null)){
					var topObject=getPart(this.object,'top');
					topObject.geometry=this._createGeometry(this.params.top.depth,this.params.hollow);
					topObject.position.z=this.params.depth;
					topObject.geometry=this._createHoles(topObject);
				}
				this.objectArea=getObjectArea(this.object);
			}
			this._update(p);
		};
		
		this.guiParams[0].settings.push({text:'是否空心',field:'hollow',type:'switch'});
		
		this.guiParams.push({text:'底面',settings:[
			{text:'是否显示底面',field:'bottom.visible',type:'switch'},
			{text:'底面颜色',field:'bottom.map.color',items:['','red','orange','yellow','green','blue','purple','black','gray','white']},
			{text:'底面纹理类型',field:'bottom.map.name',items:['','stone','grass','wall','chimney','black','floor','outwall','roof']},
			{text:'底面纹理密度',field:'bottom.map.repeat',min:0.001,max:0.1,step:0.001},
		]});
		this.guiParams.push({text:'顶部',settings:[
			{text:'是否显示顶部',field:'top.visible',type:'switch'},
			{text:'顶部颜色',field:'top.map.color',items:['','red','orange','yellow','green','blue','purple','black','gray','white']},
			{text:'顶部纹理类型',field:'top.map.name',items:['','stone','grass','wall','chimney','black','floor','outwall','roof']},
			{text:'顶部纹理密度',field:'top.map.repeat',min:0.001,max:0.1,step:0.001},
		]});
		
	},
	Polygon:function(p){
		ThreeMap._Basic.call(this);
		common.combineParams(this.params,{type:'Polygon',hollow:false,holes:[],depth:20,region:['M,0,0','L,1,1'],bottom:{depth:1,visible:false,map:{name:'',repeat:1}},rotation:{x:-90,y:0,z:0}});
		common.combineParams(this.params,p);
		
		this.name='多边形体';
		this._createGeometry=function(depth,hollow){
			var shape=new THREE.Shape();
			var points=this.params.region;
			var lastPoint;
			for(var i=0;i<points.length;i++){
				var point=points[i].split(',');
				var type=point.splice(0,1)[0];
				point=point.map(function(v){return Math.round(parseFloat(v));});
				
				if(type=='M'){
					shape.moveTo(point[0],point[1]);
					lastPoint=[point[0],point[1]];
				}
				else if(type=='L'){
					shape.lineTo(point[0],point[1]);
					lastPoint=[point[0],point[1]];
				}
				else if(type=='H'){
					shape.lineTo(point[0],lastPoint[1]);
					lastPoint[0]=point[0];
				}
				else if(type=='V'){
					shape.lineTo(lastPoint[0],point[0]);
					lastPoint[1]=point[0];
				}
				/*else if(type=='Q'){
					shape.quadraticCurveTo(transX(this.params[0]+oPoint[0]),transY(this.params[1]+oPoint[1]),transX(this.params[2]+oPoint[0]),transY(this.params[3]+oPoint[1]));
					lastPoint=[this.params[2]+oPoint[0],this.params[3]+oPoint[1]];
				}
				else if(type=='B'){
					shape.bezierCurveTo(transX(this.params[0]+oPoint[0]),transY(this.params[1]+oPoint[1]),transX(this.params[2]+oPoint[0]),transY(this.params[3]+oPoint[1]),transX(this.params[4]+oPoint[0]),transY(this.params[5]+oPoint[1]));
					lastPoint=[this.params[4]+oPoint[0],this.params[5]+oPoint[1]];
				}
				else if(type=='A'){
					shape.arc(this.params[0]+oPoint[0],this.params[1]+oPoint[1],transX(this.params[2]),0,2*Math.PI);
					lastPoint=[this.params[0]+oPoint[0],this.params[1]+oPoint[1]];
				}*/
			}
			
			if(hollow==true){
				shape.holes.push(shape);
			}
			
			var options = {
                depth: depth,
                bevelThickness :0,
                bevelSize:1,
                bevelSegments:1
            };
			var geometry=new THREE.ExtrudeGeometry(shape, options);
			return geometry;
		};
		
		this.create=function(){
			this._create(this._createGeometry(this.params.depth,this.params.hollow));
			this.update({bottom:this.params.bottom});
		};
		
		this.update=function(p){
			common.combineParams(this.params,p);
			if(p.depth!=null||p.hollow!=null||p.region!=null){
				this.object.geometry=this._createGeometry(this.params.depth,this.params.hollow);
				this.objectArea=getObjectArea(this.object);
			}
			this._update(p);
		};
		
		this.guiParams[0].settings.splice(0,2);
		this.guiParams[0].settings.push({text:'是否空心',field:'hollow',type:'switch'});
	},
	Path:function(p){
		//ThreeMap._Basic.call(this);
		this.params={type:'Path',path:[]};
		common.combineParams(this.params,p);
		
		this.name='路径';
		this._createGeometry=function(){
			this.distances=[];
            this.sumDistance=0;
			
			var geometry = new THREE.Geometry();
			for(var i=0;i<this.params.path.length;i++){
				geometry.vertices.push(
					new THREE.Vector3( this.params.path[i][0], this.params.path[i][1], this.params.path[i][2] )
				);
				if(i!=0){
					this.distances.push(geometry.vertices[i-1].distanceTo(geometry.vertices[i]));
					this.sumDistance+=this.distances[this.distances.length-1];
				}
			}
			this.vertices=geometry.vertices;
			return geometry;
		};
		
		this.create=function(){
			var material = new THREE.LineBasicMaterial({
				color: 0xffffff
			});
			var line = new THREE.Line( this._createGeometry(), material );
			line.objectType='path';
			//line.objectType='object';
			line.objectClass=this;
			
			this.object=line;
			//this.update({position:this.params.position,rotation:this.params.rotation,map:this.params.map});
			
			scene.add(this.object);
			objectStore.add(this);
		};
		
		this.update=function(p){
			common.combineParams(this.params,p);
			if(p.path!=null){
				this.object.geometry=this._createGeometry();
			}
		};
		
		this.guiParams=[];
		
		this.remove=function(){
			scene.remove(this.object);
			objectStore.remove(this);
		};
	}
};