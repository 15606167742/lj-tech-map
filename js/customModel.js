var _loadCustomModels=function(){
	var getFence=function(){
		var group = new THREE.Group();
		for(var i=-5;i<=5;i++){
			var p={width:0.1,depth:2,z:0};
			if(i%3==0){
				p={width:3,depth:4,z:1.5};
			}
			
			//竖
			var obj=new ThreeMap.Rect({width:p.width,height:p.width,depth:58,position:{x:0+i*10,y:0,z:p.z},map:{color:'gray'}});
			obj.create(false);
			group.add(obj.object);
			
			//横
			/*obj=new ThreeMap.Rect({width:p.width,height:78.3,depth:p.depth,position:{x:0+i*10,y:56,z:39.1},map:{color:'gray',opacity:0.3}});
			obj.create(false);
			group.add(obj.object);*/
		}
		//顶横
		/*for(var i=-4;i<=3;i++){
			var obj=new ThreeMap.Rect({width:114,height:0.1,depth:2,position:{x:0,y:56,z:40+i*10},map:{color:'gray',opacity:0.3}});
			obj.create(false);
			group.add(obj.object);
		}*/
		//侧横
		for(var i=-2;i<=2;i++){
			obj=new ThreeMap.Rect({width:114,height:0.1,depth:2,position:{x:0,y:28+i*10,z:0},map:{color:'gray'}});
			obj.create(false);
			group.add(obj.object);
		}
		group.scale.multiplyScalar(0.5);
		return group;
	}
	
	var getWindow=function(){
		var group = new THREE.Group();
		var obj=new ThreeMap.Rect({type:'Rect',width:23,height:1,depth:23,map:{opacity:0.3}});
		obj.create(false);
		obj.object.scale.multiplyScalar(0.5);
		group.add(obj.object);
		
		obj=new ThreeMap.Rect({type:'Rect',width:0.1,height:2,depth:24,map:{color:'gray'},position:{x:-0.2,y:0,z:0}});
		obj.create(false);
		obj.object.scale.multiplyScalar(0.5);
		group.add(obj.object);
		obj=new ThreeMap.Rect({type:'Rect',width:0.1,height:2,depth:24,map:{color:'gray'},position:{x:0.2,y:0,z:0}});
		obj.create(false);
		obj.object.scale.multiplyScalar(0.5);
		group.add(obj.object);
		//上
		obj=new ThreeMap.Rect({type:'Rect',width:26,height:2,depth:1,map:{color:'gray'},position:{x:0,y:11.5,z:0}});
		obj.create(false);
		obj.object.scale.multiplyScalar(0.5);
		group.add(obj.object);
		//下
		obj=new ThreeMap.Rect({type:'Rect',width:26,height:2,depth:1,map:{color:'gray'}});
		obj.create(false);
		obj.object.scale.multiplyScalar(0.5);
		group.add(obj.object);
		//左
		obj=new ThreeMap.Rect({type:'Rect',width:0.1,height:2,depth:24,map:{color:'gray'},position:{x:-6.5,y:0,z:0}});
		obj.create(false);
		obj.object.scale.multiplyScalar(0.5);
		group.add(obj.object);
		//右
		obj=new ThreeMap.Rect({type:'Rect',width:0.1,height:2,depth:24,map:{color:'gray'},position:{x:6.5,y:0,z:0}});
		obj.create(false);
		obj.object.scale.multiplyScalar(0.5);
		group.add(obj.object);
		
		//group.scale.multiplyScalar(0.5);
		return group;
	}
	
	var getTrough=function(){
		var group = new THREE.Group();
		var obj=new ThreeMap.Rect({type:'Rect',width:22,height:70,depth:20,hollow:true,bottom:{visible:true,map:{color:'#dddddd'}},map:{color:'#bbbbbb'},position:{x:0,y:0,z:0}});
		obj.create(false);
		group.add(obj.object);
		
		for(var i=-1;i<2;i++){
			var obj=new ThreeMap.Rect({type:'Rect',width:10,height:0.1,depth:2,position:{x:-6.0,y:30,z:i*15},map:{color:'#bbbbbb'}});
			obj.create(false);
			group.add(obj.object);
		}
		
		group.scale.multiplyScalar(0.25);
		return group;
	}
	
	var getUrinal=function(){
		var group = new THREE.Group();
		var obj=new ThreeMap.Rect({width:50,height:16,depth:10,hollow:true,round:{enable:true,radius:5},bottom:{visible:true,map:{color:'#dddddd'}},map:{color:'#bbbbbb'},position:{x:0,y:0,z:0}});
		obj.create(false);
		group.add(obj.object);
		
		group.scale.multiplyScalar(0.125);
		return group;
	}
	
	var getPipe=function(){
		var group = new THREE.Group();
		var obj=new ThreeMap.Circle({width:1,depth:10,map:{color:'#dddddd'},position:{x:0,y:0,z:0}});
		obj.create(false);
		group.add(obj.object);
		
		group.scale.multiplyScalar(0.25);
		return group;
	}
	
	var getCamera=function(){
		var group = new THREE.Group();
		//摄像头
		var obj=new ThreeMap.Rect({width:1,height:10,depth:3,position:{x:0,y:5,z:1},map:{color:'#dddddd'},rotation:{x:115,y:0,z:0}});
		obj.create(false);
		group.add(obj.object);
		
		//底版
		obj=new ThreeMap.Rect({width:15,height:15,depth:2,position:{x:0,y:0,z:-10},map:{color:'#dddddd'},rotation:{x:0,y:0,z:0}});
		obj.create(false);
		obj.object.scale.multiplyScalar(0.5);
		group.add(obj.object);
		
		//竖梁
		obj=new ThreeMap.Rect({width:1,height:1,depth:9.5,position:{x:0,y:-0.78,z:-3},map:{color:'#dddddd'}});
		obj.create(false);
		obj.object.scale.multiplyScalar(0.5);
		group.add(obj.object);
		
		//横梁
		obj=new ThreeMap.Rect({width:1,height:1,depth:14,position:{x:0,y:0,z:-2.5},map:{color:'#dddddd'},rotation:{x:180,y:0,z:0}});
		obj.create(false);
		obj.object.scale.multiplyScalar(0.5);
		group.add(obj.object);
		
		group.scale.multiplyScalar(0.25);
		return group;
	}
	
	var getDoor=function(){
		var group = new THREE.Group();
		var obj=new ThreeMap.Rect({width:27.1,height:0.6,depth:63.6,rotation:{x:-90,y:0,z:0},map:{color:'#3385ff'}});
		obj.create(false);
		group.add(obj.object);
		
		group.scale.multiplyScalar(0.33);
		return group;
	}
	
	models.fence=getFence();
	models.window=getWindow();
	models.trough=getTrough();
	models.urinal=getUrinal();
	//models.pipe=getPipe();
	//models.camera=getCamera();
	models.door=getDoor();
}

var customModel={
	load(){
		_loadCustomModels();
	}
};