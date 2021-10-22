function getObjectArea(obj){
	var maxDouble=99999999;
	var result={x:{min:maxDouble,max:-maxDouble},y:{min:maxDouble,max:-maxDouble},z:{min:maxDouble,max:-maxDouble}};
	var scale=obj.scale;
	var readArea=function(mesh){
		var quaternion = new THREE.Quaternion(mesh.quaternion.x,mesh.quaternion.y,mesh.quaternion.z,mesh.quaternion.w);
		var positions=[];
		
		if(mesh.geometry.attributes!=null){
			positions=mesh.geometry.attributes.position.array;
		}
		else{
			for(var i=0;i<mesh.geometry.vertices.length;i++){
				var v=mesh.geometry.vertices[i];
				positions.push(v.x);
				positions.push(v.y);
				positions.push(v.z);
			}
		}
		
		for(var i=0;i<positions.length;i++){
			if(i%3==0){
				var vector = new THREE.Vector3( positions[i]*scale.x, positions[i+1]*scale.y, positions[i+2]*scale.z );
				vector.applyQuaternion( quaternion );
				
				if(vector.x<result.x.min){
					result.x.min=vector.x;
				}
				if(vector.x>result.x.max){
					result.x.max=vector.x;
				}
				if(vector.y<result.y.min){
					result.y.min=vector.y;
				}
				if(vector.y>result.y.max){
					result.y.max=vector.y;
				}
				if(vector.z<result.z.min){
					result.z.min=vector.z;
				}
				if(vector.z>result.z.max){
					result.z.max=vector.z;
				}
			}
		}
	};
	if(obj.geometry==null){
		for(var c=0;c<obj.children.length;c++){
			readArea(obj.children[c]);
		}
		
		var quaternion = new THREE.Quaternion(obj.quaternion.x,obj.quaternion.y,obj.quaternion.z,obj.quaternion.w);
		var positions=[
			result.x.min,result.y.min,result.z.max,
			result.x.max,result.y.min,result.z.max,
			result.x.max,result.y.min,result.z.min,
			result.x.min,result.y.min,result.z.min,
			
			result.x.min,result.y.max,result.z.max,
			result.x.max,result.y.max,result.z.max,
			result.x.max,result.y.max,result.z.min,
			result.x.min,result.y.max,result.z.min,
		];
		result={x:{min:maxDouble,max:-maxDouble},y:{min:maxDouble,max:-maxDouble},z:{min:maxDouble,max:-maxDouble}};
		for(var i=0;i<positions.length;i++){
			if(i%3==0){
				var vector = new THREE.Vector3( positions[i], positions[i+1], positions[i+2] );
				vector.applyQuaternion( quaternion );
				
				if(vector.x<result.x.min){
					result.x.min=vector.x;
				}
				if(vector.x>result.x.max){
					result.x.max=vector.x;
				}
				if(vector.y<result.y.min){
					result.y.min=vector.y;
				}
				if(vector.y>result.y.max){
					result.y.max=vector.y;
				}
				if(vector.z<result.z.min){
					result.z.min=vector.z;
				}
				if(vector.z>result.z.max){
					result.z.max=vector.z;
				}
			}
		}
	}
	else{
		readArea(obj);
	}
	return result;
}

function getPositionByDistance(currentDistance,sumDistance,distances,vertices){
	/*if(currentDistance>sumDistance)
		currentDistance=sumDistance-0.01;*/
	var dis=currentDistance;
	for(var i=0;i<distances.length;i++){
		if(dis<distances[i]){
			var percent=dis/distances[i];
			var v={
				x:(vertices[i+1].x-vertices[i].x)*percent+vertices[i].x,
				y:(vertices[i+1].y-vertices[i].y)*percent+vertices[i].y,
				z:(vertices[i+1].z-vertices[i].z)*percent+vertices[i].z,
				v:vertices[i],
				nv:vertices[i+1],
			};
			return v;
		}
		else{
			dis-=distances[i];
		}
	}
}

function objectRotate(vFrom,vTo,type){
	var rotation;
	if(type=='y'){
		var distance=Math.sqrt(Math.pow(vTo.z-vFrom.z,2)+Math.pow(vTo.x-vFrom.x,2));
		var xOffset=vTo.x-vFrom.x;
		if(distance==0){
			if(xOffset>0){
				rotation=0;
			}
			else{
				rotation=Math.PI;
			}
		}
		else{
			if(xOffset>0){
				rotation=Math.asin((vFrom.z-vTo.z)/distance);
			}
			else{
				rotation=Math.PI-Math.asin((vFrom.z-vTo.z)/distance);
			}
		}
	}
	else if(type=='z'){
		var distance=vTo.distanceTo(vFrom);
		rotation=Math.asin((vTo.y-vFrom.y)/distance);
	}
	rotation=rotation*180/Math.PI
	return rotation;
}