var actionLabel={
	open:function(id,type){
		if(!menuState.deviceOperate)
			return '';
		return '<span><br>动作：<input type="button" class="actionbutton" onclick="actionDevice(this,\''+id+'\',true,\''+type+'\')" value="开启" /></span>';
	},
	close:function(id,type){
		if(!menuState.deviceOperate)
			return '';
		return '<span><br>动作：<input type="button" class="actionbutton" onclick="actionDevice(this,\''+id+'\',false,\''+type+'\')" value="关闭" /></span>';
	}
};

var stateEvents={
	door:{
		state:{
			default:-100,
			change:function(object,value,ovalue){
				var color='red';
				var text='离线';
				var other='';
				
				if(value==1){
					color='#3385ff';
	        		text='开启';
	        		//other=actionLabel.close(object.code,'door');
	        		if(ovalue!=value){
						object.update({position:{x:object.params.position.x+4.47,z:object.params.position.z+4.47},
							rotation:{y:object.params.rotation.y+90}});
					}
				}
				else if(value==2){
					color='#3385ff';
	        		text='关闭';
	        		other=actionLabel.open(object.code,'door');
	        		if(ovalue!=-100&&ovalue!=0&&ovalue!=value){
						object.update({position:{x:object.params.position.x-4.47,z:object.params.position.z-4.47},
							rotation:{y:object.params.rotation.y-90}});
					}
				}
				else if(value==0){
					color='red';
					text='离线';
					if(ovalue==1&&ovalue!=value){
						object.update({position:{x:object.params.position.x-4.47,z:object.params.position.z-4.47},
							rotation:{y:object.params.rotation.y-90}});
					}
				}
				object.object.traverse( function ( child ) {
			        if ( child instanceof THREE.Mesh) {
			        	child.material=new THREE.MeshLambertMaterial({color:color});
			        }
			    });
				var label=object.params.label.text.replace(/<span.*?span>/g,'');
			    object.update({label:{text:label+'<span style="color:'+color+'">'+text+'</span>'+other}});
			}
		}
	},
	externalscreen:{
		state:{
			default:-100,
			change:function(object,value){
				var color='red';
				var text='离线';
				var other='';
				object.object.traverse( function ( child ) {
			        if ( child instanceof THREE.Mesh && child.name=='Rectangle022') {
			        	/*if(value==2){
			        		color='gray';
			        		text='关闭';
			        		other=actionLabel.open(object.code);
			        	}
			        	else*/ if(value==1||value==2){
			        		color='#3385ff';
			        		text='在线';
			        		other=actionLabel.close(object.code);
			        	}
			        	else if(value==0){
			        		color='red';
			        		text='离线';
			        	}
			        	child.material=new THREE.MeshPhongMaterial({color:color});
			        }
			    });
			    var label=object.params.label.text.replace(/<span.*?span>/g,'');
			    object.update({label:{text:label+'<span style="color:'+color+'">'+text+'</span>'+other}});
			}
		}
	},
	internalscreen:{
		state:{
			default:-100,
			change:function(object,value){
				var color='red';
				var text='离线';
				var other='';
				object.object.traverse( function ( child ) {
			        if ( child instanceof THREE.Mesh && child.name=='Rectangle023') {
			        	/*if(value==2){
			        		color='gray';
			        		text='关闭';
			        		other=actionLabel.open(object.code);
			        	}
			        	else*/ if(value==1||value==2){
			        		color='#3385ff';
			        		text='在线';
			        		other=actionLabel.close(object.code);
			        	}
			        	else if(value==0){
			        		color='red';
			        		text='离线';
			        	}
			        	child.material=new THREE.MeshPhongMaterial({color:color});
			        }
			    });
			    var label=object.params.label.text.replace(/<span.*?span>/g,'');
			    object.update({label:{text:label+'<span style="color:'+color+'">'+text+'</span>'+other}});
			}
		}
	},
	tv:{
		state:{
			default:-100,
			change:function(object,value){
				var color='red';
				var text='离线';
				var other='';
				object.object.traverse( function ( child ) {
			        if ( child instanceof THREE.Mesh && child.name=='Rectangle025') {
			        	/*if(value==2){
			        		color='gray';
			        		text='关闭';
			        		other=actionLabel.open(object.code);
			        	}
			        	else*/ if(value==1||value==2){
			        		color='#3385ff';
			        		text='在线';
			        		other=actionLabel.close(object.code);
			        	}
			        	else if(value==0){
			        		color='red';
			        		text='离线';
			        	}
			        	child.material=new THREE.MeshPhongMaterial({color:color});
			        }
			    });
			    var label=object.params.label.text.replace(/<span.*?span>/g,'');
			    object.update({label:{text:label+'<span style="color:'+color+'">'+text+'</span>'+other}});
			}
		}
	},
	pipe:{
		state:{
			default:-100,
			change:function(object,value){
				var color='red';
				var text='离线';
				var other='';
				object.object.traverse( function ( child ) {
			        if ( child instanceof THREE.Mesh) {
			        	if(value==2){
			        		color='gray';
			        		text='关闭';
			        		other=actionLabel.open(object.code);
			        	}
			        	else if(value==1){
			        		color='#3385ff';
			        		text='开启';
			        		other=actionLabel.close(object.code);
			        	}
			        	else if(value==0){
			        		color='red';
			        		text='离线';
			        	}
			        	child.material=new THREE.MeshLambertMaterial({color:color});
			        }
			    });
			    var label=object.params.label.text.replace(/<span.*?span>/g,'');
			    object.update({label:{text:label+'<span style="color:'+color+'">'+text+'</span>'+other}});
			}
		}
	},
	cardpassword:{
		state:{
			default:-100,
			change:function(object,value){
				var color='red';
				var text='离线';
				var other='';
				object.object.traverse( function ( child ) {
			        if ( child instanceof THREE.Mesh && child.name=='Rectangle002') {
			        	/*if(value==2){
			        		color='gray';
			        		text='关闭';
			        		other=actionLabel.open(object.code);
			        	}
			        	else*/ if(value==1||value==2){
			        		color='#3385ff';
			        		text='在线';
			        		other=actionLabel.close(object.code);
			        	}
			        	else if(value==0){
			        		color='red';
			        		text='离线';
			        	}
			        	child.material=new THREE.MeshPhongMaterial({color:color});
			        }
			    });
			    var label=object.params.label.text.replace(/<span.*?span>/g,'');
			    object.update({label:{text:label+'<span style="color:'+color+'">'+text+'</span>'+other}});
			}
		}
	},
	facecard:{
		state:{
			default:-100,
			change:function(object,value){
				var color='red';
				var text='离线';
				var other='';
				object.object.traverse( function ( child ) {
			        if ( child instanceof THREE.Mesh && child.name=='Box001') {
			        	/*if(value==2){
			        		color='gray';
			        		text='关闭';
			        		other=actionLabel.open(object.code);
			        	}
			        	else*/ if(value==1||value==2){
			        		color='#3385ff';
			        		text='在线';
			        		other=actionLabel.close(object.code);
			        	}
			        	else if(value==0){
			        		color='red';
			        		text='离线';
			        	}
			        	child.material=new THREE.MeshPhongMaterial({color:color});
			        }
			    });
			    var label=object.params.label.text.replace(/<span.*?span>/g,'');
			    object.update({label:{text:label+'<span style="color:'+color+'">'+text+'</span>'+other}});
			}
		}
	},
	fingercard:{
		state:{
			default:-100,
			change:function(object,value){
				var color='red';
				var text='离线';
				var other='';
				object.object.traverse( function ( child ) {
			        if ( child instanceof THREE.Mesh && child.name=='Rectangle003') {
			        	/*if(value==2){
			        		color='gray';
			        		text='关闭';
			        		other=actionLabel.open(object.code);
			        	}
			        	else*/ if(value==1||value==2){
			        		color='#3385ff';
			        		text='在线';
			        		other=actionLabel.close(object.code);
			        	}
			        	else if(value==0){
			        		color='red';
			        		text='离线';
			        	}
			        	child.material=new THREE.MeshPhongMaterial({color:color});
			        }
			    });
			    var label=object.params.label.text.replace(/<span.*?span>/g,'');
			    object.update({label:{text:label+'<span style="color:'+color+'">'+text+'</span>'+other}});
			}
		}
	},
	camera:{
		state:{
			default:-100,
			change:function(object,value){
				var color='red';
				var text='离线';
				var other='';
				
				/*if(value==2){
	        		color='gray';
	        		text='关闭';
	        		other=actionLabel.open(object.code);
	        	}
	        	else*/ if(value==1||value==2){
	        		color='#3385ff';
	        		text='在线';
	        		other=actionLabel.close(object.code);
	        	}
	        	else if(value==0){
	        		color='red';
	        		text='离线';
	        	}
			    //var label=object.params.label.text.replace(/<span.*?span>/g,'');
			    //object.update({label:{text:label+'<span style="color:'+color+'">'+text+'</span>'+other}});
			    var label=object.params.label.text.replace(/：/g,'');
			    object.update({label:{text:label}});
			}
		}
	},
};
