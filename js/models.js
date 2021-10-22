(function(){
	const modelConfig={
		bed:{scale:0.01},
		internalscreen:{scale:0.01},
		externalscreen:{scale:0.01},
		tv:{scale:0.01},
		camera:{scale:0.02},
		pipe:{scale:0.01},
		cardpassword:{scale:0.015},
		facecard:{scale:0.01},
		fingercard:{scale:0.015},
	};
	
	const textureConfig={
		grass:{repeat:0.018},
		//wall:{repeat:0.038},
		stone:{repeat:0.168},
		//chimney:{repeat:0.018},
		floor:{},
	};
	
	var loadAmount=-1;
	
	models={};
	var loadOBJModel=function(name,transform,asname){
		if(loadAmount==-1){
			loadAmount=0;
		}
		loadAmount++;
		var mtlLoader=new THREE.MTLLoader();
		var objLoader=new THREE.OBJLoader();
		if(asname==null){
			asname=name;
		}
		mtlLoader.setPath('models/'+name+'/')
		.load( name+'.mtl', function ( materials ) {
			materials.preload();
			objLoader.setMaterials(materials)
				.setPath( 'models/'+name+'/' )
				.load( name+'.obj', function ( object ) {
					transform(object);
					models[asname]=object.clone();
					//modelsParams[asname]={area:getObjectArea(models[asname])};
					loadComplete();
			});
		});
	};
	
	textures={};
	var loadTexture=function(name,callback){
		if(loadAmount==-1){
			loadAmount=0;
		}
		loadAmount++;
		var textureLoader=new THREE.TextureLoader();
		textureLoader.load('models/'+name+(name.indexOf('.')==-1?'.jpg':''),function(texture){
			textures[name]=texture;
			textures[name].wrapS = textures[name].wrapT = THREE.RepeatWrapping;
			//magFilter
			//textures[name].magFilter = THREE.NearestFilter;
			if(callback!=undefined){
				callback(textures[name]);
			}
			loadComplete();
		});
	};
	
	var loadComplete=function(){
		loadAmount--;
		if(loadAmount==0){
			setTimeout(function(){
				model._isReady=true;
				if(model._readyCallback!=null)
					model._readyCallback(models,textures);
			},200);
		}
	}
	
	var load=function(){
		for(let name in modelConfig){
			loadOBJModel(name,function(object){
				//object.scale.multiplyScalar(0.01);
				if(modelConfig[name].scale){
					object.scale.multiplyScalar(modelConfig[name].scale);
				}
			});
		}
		for(let name in textureConfig){
			loadTexture(name,function(texture){
				//texture.repeat.set(1,1);
				if(textureConfig[name].repeat){
					texture.repeat.set(textureConfig[name].repeat,textureConfig[name].repeat);
				}
			});
		}
	};
	load();
})();

var models={};
var textures={};

var modelConfigs={
	'01':'internalscreen',
	'02':'externalscreen',
	'04':'fingercard',
	'05':'facecard',
	'09':'camera',
	'11':'tv',
	'13':'pipe',
	'16':'cardpassword',
};

var model={
	_isReady:false,
	_readyCallback:null,
	ready(callback){
		if(!model._isReady){
			model._readyCallback=callback;
		}
		else{
			callback();
		}
	}
};