var width;
var height;
var renderer;
var labelRenderer;

var camera;
var planformCamera;
var orbitctrl;
var planformOrbitctrl;

var scene;

var light;
var amlight;

var threeViewer={
	mapRunning:false,
	initContainer:null,
	_initContainer:function(){
		width = document.getElementById('canvas-frame').clientWidth;
        height = document.getElementById('canvas-frame').clientHeight;
        
        document.getElementById('canvas-frame').style.position = 'absolute';
        
        renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setSize(width, height);
        renderer.domElement.id='canvas';
        //renderer.domElement.style.position = 'absolute';
        
        document.getElementById('canvas-frame').appendChild(renderer.domElement);
        //renderer.setClearColor(0x222222, 1.0);
        //renderer.setClearColor(0xace4ff, 0.3);
        //renderer.setClearColor(0x08163A, 1);
        //renderer.setClearColor(0x3e4652, 0.8);
        //renderer.setClearColor(0xd5d4d4, 1);
        renderer.setClearColor(0x9BC0FB, 1);
        
        labelRenderer = new THREE.CSS2DRenderer();
		labelRenderer.setSize( width, height );
		labelRenderer.domElement.style.position = 'absolute';
		labelRenderer.domElement.style.top = 0;
		//labelRenderer.domElement.style.background='transparent';
		document.getElementById('canvas-frame').appendChild(labelRenderer.domElement);
        
    	window.addEventListener('resize',threeViewer._onWindowResize,false);
    	threeViewer.mapRunning=true;
    	
    	if(threeViewer.initContainer!=null){
			threeViewer.initContainer();
		}
	},
	onWindowResize:null,
	_onWindowResize:function(){
		width = document.getElementById('canvas-frame').clientWidth;
        height = document.getElementById('canvas-frame').clientHeight;
        //width=window.innerWidth;
        //height=window.innerHeight;
		
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		planformCamera.left = -width / 2;
		planformCamera.right = width / 2;
		planformCamera.top = height / 2;
		planformCamera.bottom = -height / 2;
		planformCamera.updateProjectionMatrix();
		renderer.setSize( width, height );
		labelRenderer.setSize( width, height );
		
		if(threeViewer.onWindowResize!=null){
			threeViewer.onWindowResize();
		}
	},
	_initCamera:function(){
		planformCamera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 10000);
        planformCamera.position.x = 0;
        planformCamera.position.y =	1000;
        planformCamera.position.z = 0;
        
        camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
        camera.position.x = 0;
        camera.position.y =	1000;
        camera.position.z = 500;
        //camera.target={x:0,y:200,z:0};
        /*camera.up.x = 0;
        camera.up.y = 1;
        camera.up.z = 0;
        camera.lookAt({
            x: 0,
            y: 0,
            z: 0
        });*/
        
        //orbitctrl = new THREE.OrbitControls(camera,document.getElementById('canvas-frame'));
        orbitctrl = new THREE.OrbitControls(camera,renderer.domElement.parentElement);
        orbitctrl.mouseButtons.LEFT=THREE.MOUSE.RIGHT;
        orbitctrl.mouseButtons.RIGHT=THREE.MOUSE.LEFT;
        orbitctrl.zoomSpeed=2;
        orbitctrl.minDistance=70;
        orbitctrl.maxDistance=2000;
        orbitctrl.maxPolarAngle = Math.PI/2;
        orbitctrl.minLeftDistance=-1200;
        orbitctrl.maxLeftDistance=1200;
        orbitctrl.minUpDistance=-400;
        orbitctrl.maxUpDistance=700;
        
        
        planformOrbitctrl = new THREE.OrbitControls(planformCamera,renderer.domElement.parentElement);
        planformOrbitctrl.enabled=false;
        planformOrbitctrl.mouseButtons.LEFT=THREE.MOUSE.RIGHT;
        planformOrbitctrl.mouseButtons.RIGHT=THREE.MOUSE.LEFT;
        planformOrbitctrl.zoomSpeed=2;
        planformOrbitctrl.maxZoom=20;
        planformOrbitctrl.minZoom=0.5;
        planformOrbitctrl.maxPolarAngle = 0;
        planformOrbitctrl.minLeftDistance=-1200;
        planformOrbitctrl.maxLeftDistance=1200;
        planformOrbitctrl.minUpDistance=-400;
        planformOrbitctrl.maxUpDistance=700;
	},
	_initScene:function(){
	 	scene = new THREE.Scene();
		//sky
		var vertexShader=`
			varying vec3 vWorldPosition;
			void main() {
				vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
				vWorldPosition = worldPosition.xyz;
	
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}
		`;
		
		var fragmentShader=`
			uniform vec3 topColor;
			uniform vec3 bottomColor;
			uniform float offset;
			uniform float exponent;

			varying vec3 vWorldPosition;

			void main() {

				float h = normalize( vWorldPosition + offset ).y;
				gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h , 0.0), exponent ), 0.0 ) ), 1.0 );

			}
		`;
		var uniforms = {
			topColor:    { value: new THREE.Color( 0x0077ff ) },
			bottomColor: { value: new THREE.Color( 0x97c7ff ) },
			
			offset:      { value: 33 },
			//exponent:    { value: 0.6 }
			exponent:    { value: 0.8 }
		};

		var skyGeo = new THREE.SphereBufferGeometry( 6000, 32, 15 );
		var skyMat = new THREE.ShaderMaterial( { vertexShader: vertexShader, fragmentShader: fragmentShader, uniforms: uniforms, side: THREE.BackSide } );

		var sky = new THREE.Mesh( skyGeo, skyMat );
		sky.objectType='sky';
		scene.add( sky );
	},
	_initLight:function(){
        //light = new THREE.DirectionalLight(0xFFFFFF, 1.0);

		light=new THREE.PointLight( 0xFFFFFF, 0.7, 0);
		light.position.set( 0, 1000, 0 );
        scene.add(light);
		
		/*var helight=new THREE.HemisphereLight(0x88A8F4, 0xFFFFFF, 1);
        helight.position.set( 0, 0, 0 );
        scene.add(helight);*/
        
        /*var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
		hemiLight.color.setHSL( 0.6, 1, 0.6 );
		hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
		hemiLight.position.set( 0, 50, 0 );
		scene.add( hemiLight );*/

		/*hemiLightHelper = new THREE.HemisphereLightHelper( hemiLight, 10 );
		scene.add( hemiLightHelper );*/
		
		amlight = new THREE.AmbientLight( 0xffffff,0.5 );
		scene.add(amlight);
	},
	setLight:function(step){
		light.intensity+=step;
    	return light.intensity;
	},
	setAmLight:function(step){
		amlight.intensity+=step;
    	return amlight.intensity;
	},
	load:function(menuState){
		threeViewer._initContainer();
		threeViewer._initCamera();
		threeViewer._initScene();
		threeViewer._initLight();
        renderer.render(scene, menuState.is3D?camera:planformCamera);
        threeViewer._onWindowResize();
	}
}