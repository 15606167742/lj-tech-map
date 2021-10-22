var cameraHtml=function(text,id,address){
	return '<a onclick="vm.openDialog(\''+id+'\',\''+address+'\')" style="cursor:pointer">'+text+'</a>';
};

var loadDemoData=function(){
	var wallHeight=30;
	var doorHeight=21;//15
    
	var room=[
		//房间
		{type:'Rect',width:60,height:142,depth:wallHeight,hollow:true,bottom:{visible:true,map:{name:'floor',repeat:0.025}},position:{x:30.0,y:0,z:137},holes:[
			{width:7.6,height:5,depth:doorHeight,position:{x:0,y:0,z:71}},
			{width:7.6,height:5,depth:doorHeight,position:{x:0,y:0,z:-71}},
		],rotation:{x:-90,y:0,z:0},top:{visible:true,map:{color:'#213137'}}},
		
		//放风场
		{type:'Rect',width:60,height:66,depth:wallHeight,hollow:true,bottom:{visible:true,map:{color:'#b0b0b0'}},position:{x:30,y:0,z:241},holes:[
			{width:56,height:1,depth:100,position:{x:0,y:0,z:33}},
			{width:56,height:1,depth:100,position:{x:0,y:0,z:-33}},
		],rotation:{x:-90,y:0,z:0},top:{clip:true,visible:true,map:{color:'#213137'}}},
		//栅栏
		{type:'Model',modelName:'fence',position:{x:30,y:0,z:272.4},rotation:{x:0,y:0,z:0}},
		
		//门
		{type:'Model',modelName:'door',position:{x:30,y:0,z:66}},
		//后门
		{type:'Model',modelName:'door',position:{x:30,y:0,z:208}},
	
		//隔档
		{type:'Rect',width:22.34,height:0.3,depth:20,position:{x:11.17,y:0,z:84.98},rotation:{x:-90,y:0,z:0},map:{opacity:0.8}},
		{type:'Rect',width:22.34,height:0.3,depth:20,position:{x:48.81,y:0,z:84.98},rotation:{x:-90,y:0,z:0},map:{opacity:0.8}},
		
		//水池
		{type:'Model',modelName:'trough',position:{x:11.73,y:5,z:70.03},rotation:{x:0,y:-90,z:0}},
		
		//便池
		{type:'Model',modelName:'urinal',position:{x:45,y:1,z:73.23},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'urinal',position:{x:52,y:1,z:73.23},rotation:{x:0,y:-90,z:0}},
		
		//水管
		//{type:'Model',modelName:'pipe',states:{state:0},position:{x:51,y:15,z:193.03},rotation:{x:0,y:-90,z:-45},label:{text:'温水：',position:'bottom|left'}},
		//{type:'Model',modelName:'pipe',states:{state:1},position:{x:57.6,y:15,z:185.23},rotation:{x:0,y:0,z:-45},label:{text:'冷水：',position:'left'}},
		
		//摄像头
		//{type:'Model',modelName:'camera',position:{x:29.9,y:26,z:191.93},rotation:{x:0,y:180,z:0},label:{text:cameraHtml('摄像头'),position:'left',showDistance:300}},
		//{type:'Model',modelName:'camera',position:{x:9,y:26,z:82.13},rotation:{x:0,y:0,z:0},label:{text:cameraHtml('摄像头2'),position:'bottom',showDistance:300}},
		//{type:'Model',modelName:'camera',position:{x:47.9,y:26,z:75.03},rotation:{x:0,y:180,z:0},label:{text:cameraHtml('风场摄像头'),showDistance:300,position:'left'}},

		//设备
		//{type:'Model',modelName:'internalscreen',states:{state:-1},position:{x:20.5,y:14,z:194.2},rotation:{x:0,y:180,z:0},label:{text:'内屏：',position:'bottom|left'}},
		//{type:'Model',modelName:'externalscreen',states:{state:1},position:{x:40.4,y:14,z:196.6},rotation:{x:0,y:0,z:0},label:{text:'外屏：',position:'bottom|left'}},
		//{type:'Model',modelName:'tv',states:{state:0},position:{x:30,y:25.5,z:79.7},rotation:{x:0,y:0,z:0},label:{text:'电视机：'}},
		
		{type:'Model',modelName:'bed',position:{x:11.24,y:5.1,z:94.92},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'bed',position:{x:11.24,y:5.1,z:107.92},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'bed',position:{x:11.24,y:5.1,z:120.92},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'bed',position:{x:11.24,y:5.1,z:133.92},rotation:{x:0,y:0,z:0}},
		
		{type:'Model',modelName:'bed',position:{x:48.1,y:5.1,z:94.92},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'bed',position:{x:48.1,y:5.1,z:107.92},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'bed',position:{x:48.1,y:5.1,z:120.92},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'bed',position:{x:48.1,y:5.1,z:133.92},rotation:{x:0,y:180,z:0}},
	];
	
	var bigRoom=[
		{type:'Rect',width:120,height:80,depth:wallHeight,hollow:true,bottom:{visible:true,map:{name:'floor',repeat:0.025}},position:{x:30.0,y:0,z:137},holes:[
			{width:7.6,height:5,depth:doorHeight,position:{x:-30,y:0,z:-40}},
			{width:7.6,height:5,depth:doorHeight,position:{x:30,y:0,z:-40}},
			
			{width:12,height:5,depth:12,position:{x:-30,y:12,z:40}},
			{width:12,height:5,depth:12,position:{x:0,y:12,z:40}},
			{width:12,height:5,depth:12,position:{x:30,y:12,z:40}},
		],rotation:{x:-90,y:0,z:0},top:{visible:true,map:{color:'#213137'}}},
		
		//{type:'Rect',width:7.6,height:0.3,depth:doorHeight,position:{x:0,y:0,z:97},rotation:{x:-90,y:0,z:0},map:{color:'#3385ff'}},
		//{type:'Rect',width:7.6,height:0.3,depth:doorHeight,position:{x:60,y:0,z:97},rotation:{x:-90,y:0,z:0},map:{color:'#3385ff'}},
		{type:'Model',modelName:'door',position:{x:0,y:0,z:97}},
		{type:'Model',modelName:'door',position:{x:60,y:0,z:97}},
		
		{type:'Model',modelName:'window',position:{x:0,y:12,z:177}},
		{type:'Model',modelName:'window',position:{x:30,y:12,z:177}},
		{type:'Model',modelName:'window',position:{x:60,y:12,z:177}},
	];
	
	var rightRoom=[
		{type:'Rect',width:77,height:187.13,depth:wallHeight,hollow:true,position:{x:0,y:0,z:0},bottom:{visible:true,map:{name:'floor',repeat:0.025}},holes:[
			{width:5,height:7.6,depth:doorHeight,position:{x:-38.5,y:0,z:-60}},
			{width:5,height:7.6,depth:doorHeight,position:{x:-38.5,y:0,z:60}},
			
			{width:5,height:12,depth:12,position:{x:38.5,y:12,z:-70}},
			{width:5,height:12,depth:12,position:{x:38.5,y:12,z:-35}},
			{width:5,height:12,depth:12,position:{x:38.5,y:12,z:0}},
			{width:5,height:12,depth:12,position:{x:38.5,y:12,z:35}},
			{width:5,height:12,depth:12,position:{x:38.5,y:12,z:70}},
		],rotation:{x:-90,y:0,z:0},top:{visible:true,map:{color:'#213137'}}},
		
		//{type:'Rect',width:0.3,height:7.6,depth:doorHeight,map:{color:'#3385ff'},position:{x:-38.5,y:0,z:-60},rotation:{x:-90,y:0,z:0}},
		//{type:'Rect',width:0.3,height:7.6,depth:doorHeight,map:{color:'#3385ff'},position:{x:-38.5,y:0,z:60},rotation:{x:-90,y:0,z:0}},
		{type:'Model',modelName:'door',position:{x:-38.5,y:0,z:-60},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'door',position:{x:-38.5,y:0,z:60},rotation:{x:0,y:90,z:0}},
		
		{type:'Model',modelName:'window',position:{x:38.5,y:12,z:-70},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:38.5,y:12,z:-35},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:38.5,y:12,z:0},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:38.5,y:12,z:35},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:38.5,y:12,z:70},rotation:{x:0,y:90,z:0}},
		
		/*{type:'Rect',width:50,height:0.1,depth:wallHeight,position:{x:-25,y:0,z:235.7},holes:[
			{width:5,height:7.6,depth:doorHeight,position:{x:0,y:0,z:0}}
		],rotation:{x:-90,y:0,z:0}},
		{type:'Rect',width:0.3,height:7.6,depth:doorHeight,map:{color:'#3385ff'},position:{x:-25,y:0,z:235.7},rotation:{x:-90,y:0,z:0}},*/
		
	];
	
	var topObj={visible:true,map:{color:'#213137'}};
	var mmidoffz=16;
	var mlbotoffz=8;
	
	var objs=[
		//todo
		// {type:'Rect',width:50,height:100,depth:30,hollow:true,position:{x:0,y:50,z:0},map:{color:'#33ffff'},bottom:{visible: true,map:{name:'floor'}},holes:[
		// 	{width:10,height:5,depth:30,position:{x:0,y:0,z:50}},
		// 	{width:7.6,height:5,depth:doorHeight,position:{x:15,y:0,z:-50}},//门洞
		// 	{width:12,height:12,depth:12,position:{x:-10,y:8,z:-50}},//窗洞
		// ]},
		// {type:'Model',modelName:'door',position:{x:15,y:50,z:-50}},//门
		// {type:'Model',modelName:'window',position:{x:-10,y:58,z:-50}},//窗
		// {type:'Rect',width:50,height:100,depth:30,hollow:true,position:{x:-50,y:50,z:0},map:{color:'#33ffff'},bottom:{visible: true,map:{name:'floor'}},holes:[
		// 	{width:10,height:5,depth:30,position:{x:0,y:0,z:50}},
		// 	{width:7.6,height:5,depth:doorHeight,position:{x:0,y:0,z:-50}},
		// ]},
		
		//左右草地
		{type:'Rect',width:360,height:122,depth:wallHeight,hollow:true,position:{x:-355.5,y:0,z:-129.7},
		bottom:{depth:0,visible:true,map:{name:'grass',repeat:0.018}},holes:[
			{height:1,width:356,depth:100,position:{x:0,y:0,z:-61}},
			{height:1,width:356,depth:100,position:{x:0,y:0,z:61}},
			{height:122,width:1,depth:100,position:{x:180,y:0,z:0}},
		],top:{visible:true,clip:true,map:{color:'#213137'}}},
		{type:'Rect',width:360,height:122,depth:wallHeight,hollow:true,position:{x:305.5,y:0,z:-129.7},
		bottom:{depth:0,visible:true,map:{name:'grass',repeat:0.018}},holes:[
			{height:1,width:356,depth:100,position:{x:0,y:0,z:-61}},
			{height:1,width:356,depth:100,position:{x:0,y:0,z:61}},
			{height:122,width:1,depth:100,position:{x:-180,y:0,z:0}},
		],top:{visible:true,clip:true,map:{color:'#213137'}}},
		//电梯房
		{type:'Rect',width:36,height:72,depth:wallHeight,hollow:true,position:{x:-517.5,y:0,z:-129.7},top:topObj,bottom:{visible:true,map:{name:'floor',repeat:0.025}},holes:[
			{height:7.6,width:7.6,depth:21,position:{x:19.00,y:0.00,z:28.62}},
		]},
		{type:'Model',modelName:'door',position:{x:-499.36,y:0.00,z:-101.08},rotation:{x:0,y:90,z:0}},
		{type:'Rect',width:36,height:72,depth:wallHeight,hollow:true,position:{x:467.5,y:0,z:-129.7},top:topObj,bottom:{visible:true,map:{name:'floor',repeat:0.025}},holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-19.00,y:0.00,z:28.67}},
		]},
		{type:'Model',modelName:'door',position:{x:449.36,y:0.00,z:-101.03},rotation:{x:0,y:-90,z:0}},
		
		//大厅
		{type:'Rect',width:297,height:593,depth:wallHeight,hollow:true,position:{x:-25,y:0,z:-127.7},
		bottom:{clip:true,visible:true,map:{name:'floor',repeat:0.025}},holes:[
			{height:7.6,width:2,depth:20,position:{x:-149.50,y:1.00,z:-284.52}},
			{height:7.6,width:2,depth:20,position:{x:149.50,y:1.00,z:-284.50}},
			{height:7.6,width:2,depth:20,position:{x:149.50,y:1.00,z:71.49}},
			{height:7.6,width:2,depth:20,position:{x:-149.50,y:1.00,z:71.51}},
			//窗
			{height:12,width:12,depth:12,position:{x:128.14,y:12.00,z:-297.50}},
			{height:12,width:12,depth:12,position:{x:90.19,y:12.00,z:-297.50}},
			{height:12,width:12,depth:12,position:{x:52.50,y:12.00,z:-297.50}},
			{height:12,width:12,depth:12,position:{x:17.34,y:12.00,z:-297.50}},
			{height:12,width:12,depth:12,position:{x:-17.27,y:12.00,z:-297.50}},
			{height:12,width:12,depth:12,position:{x:-54.33,y:12.00,z:-297.50}},
			{height:12,width:12,depth:12,position:{x:-91.40,y:12.00,z:-297.50}},
			{height:12,width:12,depth:12,position:{x:-126.05,y:12.00,z:-297.50}},
			//中庭
			{width:216,height:105,depth:5,position:{x:0,y:0,z:9}},
			{width:215,height:73,depth:5,position:{x:0,y:0,z:-168.75}},
			
			//{type:'Rect',width:215,height:73,depth:wallHeight,hollow:true,position:{x:-25,y:0,z:-296.45},top:topObj,holes:[
			//{height:1,width:211,depth:wallHeight,position:{x:0,y:0,z:-36.5}},
			
			//侧门和窗
			{height:7.6,width:7.6,depth:20,position:{x:-149.50,y:1.00,z:7.37}},
			{height:12,width:12,depth:12,position:{x:-149.50,y:12.00,z:-18.75}},
			{height:12,width:12,depth:12,position:{x:-149.50,y:12.00,z:32.39}},
			{height:7.6,width:7.6,depth:20,position:{x:149.50,y:1.00,z:8.75}},
			{height:12,width:12,depth:12,position:{x:149.50,y:12.00,z:35.24}},
			{height:12,width:12,depth:12,position:{x:149.50,y:12.00,z:-17.75}},
			//大门
			{height:7.6,width:7.6,depth:20,position:{x:-0.43,y:1.00,z:297.50}},
			{height:12,width:12,depth:12,position:{x:-88.16,y:12.00,z:297.50}},
			{height:12,width:12,depth:12,position:{x:-124.52,y:12.00,z:297.50}},
			{height:12,width:12,depth:12,position:{x:-51.96,y:12.00,z:297.50}},
			{height:12,width:12,depth:12,position:{x:88.02,y:12.00,z:297.50}},
			{height:12,width:12,depth:12,position:{x:124.59,y:12.00,z:297.50}},
			{height:12,width:12,depth:12,position:{x:53.48,y:12.00,z:297.50}},
		],rotation:{x:-90,y:0,z:0},top:topObj},
		{type:'Model',modelName:'door',position:{x:-173.64,y:0.00,z:-412.22},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'door',position:{x:123.64,y:0.00,z:-412.20},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'door',position:{x:123.64,y:0.00,z:-56.21},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'door',position:{x:-173.64,y:0.00,z:-56.19},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:103.14,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'window',position:{x:65.19,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'window',position:{x:27.50,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'window',position:{x:-7.66,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'window',position:{x:-42.27,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'window',position:{x:-79.33,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'window',position:{x:-116.40,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'window',position:{x:-151.05,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		//侧
		{type:'Model',modelName:'door',position:{x:-173.64,y:0.00,z:-120.33},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:-173.50,y:12.00,z:-95.31},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:-173.50,y:12.00,z:-146.45},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'door',position:{x:123.64,y:0.00,z:-118.95},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:123.50,y:12.00,z:-92.46},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:123.50,y:12.00,z:-145.45},rotation:{x:0,y:90,z:0}},
		
		//门口
		{type:'Model',modelName:'door',position:{x:-25.43,y:0.00,z:168.94},rotation:{x:0,y:0,z:0}},
		{type:'Rect',width:76,height:21,depth:1,position:{x:-25,y:0,z:179.3},map:{color:'#b0b0b0'}},
		//{type:'Rect',width:79,height:24,depth:1,position:{x:-25,y:1,z:180.8},map:{color:'#b0b0b0'}},
		//{type:'Rect',width:82,height:27,depth:1,position:{x:-25,y:0,z:182.3},map:{color:'#b0b0b0'}},
		{type:'Model',modelName:'window',position:{x:-149.52,y:12.00,z:168.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-113.16,y:12.00,z:168.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-76.96,y:12.00,z:168.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:28.48,y:12.00,z:168.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:63.02,y:12.00,z:168.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:99.59,y:12.00,z:168.80},rotation:{x:0,y:0,z:0}},
		
		//大厅-最下
		//{type:'Rect',width:215,height:75,depth:wallHeight,hollow:true,position:{x:-25,y:0,z:67.3},bottom:{visible:true,map:{name:'floor',repeat:0.025}}},
		{type:'Rect',width:71,height:75,depth:wallHeight,hollow:true,position:{x:-97,y:0,z:67.3+mlbotoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-26.38,y:0,z:-36.5}},
			{height:12,width:12,depth:12,position:{x:-7.58,y:12,z:-36.50}},
			{height:12,width:12,depth:12,position:{x:15.73,y:12,z:-36.50}},
			{height:12,width:12,depth:12,position:{x:-18.44,y:12,z:38.50}}
		]},
		{type:'Model',modelName:'door',position:{x:-123.38,y:0,z:29.94+mlbotoffz},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-104.58,y:12,z:29.80+mlbotoffz},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-81.27,y:12,z:29.8+mlbotoffz},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-115.44,y:12,z:104.8+mlbotoffz},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:75,depth:wallHeight,hollow:true,position:{x:-43.5,y:0,z:67.3+mlbotoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-9.74,y:0.00,z:-36.50}},
			{height:12,width:12,depth:12,position:{x:5.57,y:12.00,z:-36.50}},
		]},
		{type:'Model',modelName:'door',position:{x:-53.24,y:0.00,z:37.94},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-37.93,y:12.00,z:37.80},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:72,height:75,depth:wallHeight,hollow:true,position:{x:10.5,y:0,z:67.3+mlbotoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-24.80,y:0.00,z:-36.50}},
		]},
		{type:'Model',modelName:'door',position:{x:-14.30,y:0.00,z:37.94},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:75,depth:wallHeight,hollow:true,position:{x:64.5,y:0,z:67.3+mlbotoffz},top:topObj,holes:[
			{height:12,width:12,depth:12,position:{x:0.32,y:12.00,z:38.50}},
			{height:7.6,width:7.6,depth:21,position:{x:19.00,y:0.00,z:25.72}},
		]},
		{type:'Model',modelName:'window',position:{x:64.82,y:12.00,z:112.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'door',position:{x:82.64,y:0.00,z:101.02},rotation:{x:0,y:90,z:0}},
		
		//大厅-下
		//{type:'Rect',width:215,height:60,depth:wallHeight,hollow:true,position:{x:-25,y:0,z:-23.2}},
		{type:'Rect',width:35.5,height:60,depth:wallHeight,hollow:true,position:{x:-114.7,y:0,z:-23.2+9},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-8.85,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:6.61,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-0.34,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:-123.55,y:0.00,z:-44.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-108.09,y:12.00,z:-44.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-115.04,y:12.00,z:15.80},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:60,depth:wallHeight,hollow:true,position:{x:-78.9,y:0,z:-23.2+9},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-9.28,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:6.22,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-0.25,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:-88.18,y:0.00,z:-44.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-72.68,y:12.00,z:-44.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-79.15,y:12.00,z:15.80},rotation:{x:0,y:0,z:0}},
		
		//{type:'Rect',width:36,height:60,depth:wallHeight,hollow:true,position:{x:-42.9,y:0,z:-23.2}},
		{type:'Rect',width:36,height:34.1,depth:wallHeight,hollow:true,position:{x:-42.9,y:0,z:-36.1+9},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-9.42,y:0.00,z:-16.05}},
			{height:12,width:12,depth:12,position:{x:6.25,y:12.00,z:-16.05}},
		]},
		{type:'Model',modelName:'door',position:{x:-52.32,y:0.00,z:-44.01},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-36.65,y:12.00,z:-44.15},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:25.3,depth:wallHeight,hollow:true,position:{x:-42.9,y:0,z:-5.9+9},top:topObj,holes:[
			{height:12,width:12,depth:12,position:{x:-0.07,y:12.00,z:13.65}},
			{height:7.6,width:7.6,depth:21,position:{x:19.00,y:0.00,z:-4.54}},
		]},
		{type:'Model',modelName:'window',position:{x:-42.97,y:12.00,z:15.75},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'door',position:{x:-24.76,y:0.00,z:-1.44},rotation:{x:0,y:90,z:0}},
		
		{type:'Rect',width:72,height:60,depth:wallHeight,hollow:true,position:{x:11.1,y:0,z:-23.2+9},top:topObj,holes:[
			{height:56,width:1,depth:30,position:{x:-36,y:0,z:0}},//去左墙
			{height:56,width:1,depth:30,position:{x:36,y:0,z:0}},//去右墙
			{height:7.6,width:7.6,depth:21,position:{x:-27.84,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-12.31,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-19.31,y:12.00,z:31.00}},
			{height:12,width:12,depth:12,position:{x:16.82,y:12.00,z:31.00}},
			{height:12,width:12,depth:12,position:{x:15.80,y:12.00,z:-29.00}},
		]},
		{type:'Model',modelName:'door',position:{x:-16.74,y:0.00,z:-44.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-1.21,y:12.00,z:-44.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-8.21,y:12.00,z:15.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:27.92,y:12.00,z:15.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:26.90,y:12.00,z:-44.20},rotation:{x:0,y:0,z:0}},
		
		//隔间
		{type:'Rect',width:0.1,height:13,depth:wallHeight,position:{x:11.1,y:0,z:0.09+9},top:topObj},
		//{type:'Rect',width:35.5,height:60,depth:wallHeight,hollow:true,position:{x:64.85,y:0,z:-23.2}},
		{type:'Rect',width:35.5,height:34.1,depth:wallHeight,hollow:true,position:{x:64.85,y:0,z:-36.1+9},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:7.85,y:0.00,z:-16.05}},
			{height:12,width:12,depth:12,position:{x:-6.58,y:12.00,z:-16.05}},
		]},
		{type:'Model',modelName:'door',position:{x:72.70,y:0.00,z:-44.01},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:58.27,y:12.00,z:-44.15},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:35.5,height:25.3,depth:wallHeight,hollow:true,position:{x:64.85,y:0,z:-5.9+9},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-18.75,y:0.00,z:-5.89}},
		]},
		{type:'Model',modelName:'door',position:{x:46.96,y:0.00,z:-2.79},rotation:{x:0,y:-90,z:0}},
		
		//大厅-中
		//{type:'Rect',width:215,height:165,depth:wallHeight,hollow:true,position:{x:-25,y:0,z:-164.7}},
		{type:'Rect',width:216,height:105,depth:wallHeight,hollow:true,position:{x:-25,y:0,z:-134.7+mmidoffz},top:topObj,holes:[
			{height:1,width:212,depth:wallHeight,position:{x:0,y:0,z:-52.25}},
			{height:12,width:12,depth:12,position:{x:-89.29,y:12.00,z:53.50}},
			{height:12,width:12,depth:12,position:{x:-52.74,y:12.00,z:53.50}},
			{height:12,width:12,depth:12,position:{x:-16.66,y:12.00,z:53.50}},
			{height:12,width:12,depth:12,position:{x:20.25,y:12.00,z:53.50}},
			{height:12,width:12,depth:12,position:{x:56.81,y:12.00,z:53.50}},
			{height:12,width:12,depth:12,position:{x:91.67,y:12.00,z:53.50}},
			
			{height:7.6,width:7.6,depth:21,position:{x:-109.00,y:0.00,z:0}},
			{height:12,width:12,depth:12,position:{x:-109.00,y:12.00,z:-26.25}},
			{height:12,width:12,depth:12,position:{x:-109.00,y:12.00,z:26.25}},
			{height:7.6,width:7.6,depth:21,position:{x:109.00,y:0.00,z:0}},
			{height:12,width:12,depth:12,position:{x:109.00,y:12.00,z:26.25}},
			{height:12,width:12,depth:12,position:{x:109.00,y:12.00,z:-26.25}},
		],bottom:{visible:true,depth:0,map:{name:'grass',repeat:0.018}}},
		{type:'Model',modelName:'window',position:{x:-114.29,y:12.00,z:-66.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-77.74,y:12.00,z:-66.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-41.66,y:12.00,z:-66.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-4.75,y:12.00,z:-66.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:31.81,y:12.00,z:-66.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:66.67,y:12.00,z:-66.20},rotation:{x:0,y:0,z:0}},
		
		{type:'Model',modelName:'door',position:{x:-133.14,y:0.00,z:-118.7},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:-133.00,y:12.00,z:-144.95},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:-133.00,y:12.00,z:-92.2},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'door',position:{x:83.14,y:0.00,z:-118.7},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:83.00,y:12.00,z:-144.95},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:83.00,y:12.00,z:-92.2},rotation:{x:0,y:90,z:0}},
		
		{type:'Rect',width:36,height:60,depth:wallHeight,hollow:true,position:{x:-115,y:0,z:-217.2+mmidoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-8.44,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:6.42,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:0.50,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:-123.44,y:0.00,z:-231.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-108.58,y:12.00,z:-231.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-114.50,y:12.00,z:-171.20},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:60,depth:wallHeight,hollow:true,position:{x:-79,y:0,z:-217.2+mmidoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:7.53,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-7.11,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-0.25,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:-71.47,y:0.00,z:-231.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-86.11,y:12.00,z:-231.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-79.25,y:12.00,z:-171.20},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:60,depth:wallHeight,hollow:true,position:{x:-43,y:0,z:-217.2+mmidoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-8.68,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:5.93,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:0.29,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:-51.68,y:0.00,z:-231.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-37.07,y:12.00,z:-231.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-42.71,y:12.00,z:-171.20},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:60,depth:wallHeight,hollow:true,position:{x:-7,y:0,z:-217.2+mmidoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:9.55,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-5.65,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:1.25,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:2.55,y:0.00,z:-231.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-12.65,y:12.00,z:-231.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-5.75,y:12.00,z:-171.20},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:60,depth:wallHeight,hollow:true,position:{x:29,y:0,z:-217.2+mmidoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-7.90,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:6.95,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:0.32,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:21.10,y:0.00,z:-231.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:35.95,y:12.00,z:-231.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:29.32,y:12.00,z:-171.20},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:60,depth:wallHeight,hollow:true,position:{x:65,y:0,z:-217.2+mmidoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:9.16,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-6.11,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:0.27,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:74.16,y:0.00,z:-231.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:58.89,y:12.00,z:-231.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:65.27,y:12.00,z:-171.20},rotation:{x:0,y:0,z:0}},
		
		//大厅-上
		//{type:'Rect',width:215,height:131.5,depth:wallHeight,hollow:true,position:{x:-25,y:0,z:-333.2}},
		{type:'Rect',width:35.5,height:66,depth:wallHeight,hollow:true,position:{x:-114.75,y:0,z:-365.95},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:9.31,y:0.00,z:-32.00}},
			{height:7.6,width:7.6,depth:21,position:{x:-18.75,y:0.00,z:0.04}},
			{height:7.6,width:7.6,depth:21,position:{x:-18.75,y:0.00,z:25.92}},
		]},
		{type:'Model',modelName:'door',position:{x:-105.44,y:0.00,z:-398.81},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'door',position:{x:-132.64,y:0.00,z:-365.91},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'door',position:{x:-132.64,y:0.00,z:-340.03},rotation:{x:0,y:-90,z:0}},
		{type:'Rect',width:35.5,height:0.1,depth:wallHeight,hollow:true,position:{x:-114.75,y:0,z:-349.15},top:topObj},
		{type:'Rect',width:16.2,height:33.6,depth:wallHeight,hollow:true,position:{x:-124.40,y:0,z:-365.95},top:topObj,holes:[
			{height:29.6,width:1,depth:wallHeight,position:{x:-8.1,y:0.00,z:0}},
		]},
		
		{type:'Rect',width:36,height:66,depth:wallHeight,hollow:true,position:{x:-79.5,y:0,z:-365.95},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-9.29,y:0.00,z:-32.00}},
			{height:12,width:12,depth:12,position:{x:0.17,y:12.00,z:34.00}},
		]},
		{type:'Model',modelName:'door',position:{x:-88.79,y:0.00,z:-398.81},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-79.33,y:12.00,z:-332.95},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:72,height:66,depth:wallHeight,hollow:true,position:{x:-25.5,y:0,z:-365.95},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-28.34,y:0.00,z:-32.00}},
			{height:12,width:12,depth:12,position:{x:16.56,y:12.00,z:-32.00}},
			{height:12,width:12,depth:12,position:{x:16.25,y:12.00,z:34.00}},
			{height:12,width:12,depth:12,position:{x:-16.27,y:12.00,z:34.00}},
		]},
		{type:'Model',modelName:'door',position:{x:-53.84,y:0.00,z:-398.81},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-8.94,y:12.00,z:-398.95},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-41.77,y:12.00,z:-332.95},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-9.25,y:12.00,z:-332.95},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:66,depth:wallHeight,hollow:true,position:{x:28.5,y:0,z:-365.95},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-9.53,y:0.00,z:-32.00}},
			{height:12,width:12,depth:12,position:{x:0.30,y:12.00,z:34.00}},
		]},
		{type:'Model',modelName:'door',position:{x:18.97,y:0.00,z:-398.81},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:28.80,y:12.00,z:-332.95},rotation:{x:0,y:0,z:0}},
		//WC
		{type:'Rect',width:36,height:66,depth:wallHeight,hollow:true,position:{x:64.5,y:0,z:-365.95},top:{clip:true,visible:true,map:{color:'#213137'}},holes:[
			{height:12,width:12,depth:12,position:{x:0.67,y:12.00,z:34.00}},
			{height:14,width:1,depth:100,position:{x:18,y:0,z:0}},
		]},
		{type:'Model',modelName:'window',position:{x:65.17,y:12.00,z:-332.95},rotation:{x:0,y:0,z:0}},
		{type:'Rect',width:36,height:0.1,depth:wallHeight,position:{x:64.5,y:0,z:-374.95},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:11.95,y:0.00,z:1.05}},
		]},
		{type:'Model',modelName:'door',position:{x:76.45,y:0.00,z:-374.76},rotation:{x:0,y:0,z:0}},
		{type:'Rect',width:14,height:0.1,depth:wallHeight,position:{x:75.50,y:0.00,z:-357.95},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:0.10,y:0.00,z:1.05}},
		]},
		{type:'Model',modelName:'door',position:{x:75.60,y:0.00,z:-357.76},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:0.1,height:14,depth:wallHeight,position:{x:68.60,y:0.00,z:-365.95},top:topObj},
		//下部
		{type:'Rect',width:215,height:73,depth:wallHeight,hollow:true,position:{x:-25,y:0,z:-296.45},top:topObj,holes:[
			{height:1,width:211,depth:wallHeight,position:{x:0,y:0,z:-36.5}},
			{height:12,width:12,depth:12,position:{x:-89.66,y:12.00,z:37.50}},
			{height:12,width:12,depth:12,position:{x:-54.18,y:12.00,z:37.50}},
			{height:12,width:12,depth:12,position:{x:-17.65,y:12.00,z:37.50}},
			{height:12,width:12,depth:12,position:{x:17.50,y:12.00,z:37.50}},
			{height:12,width:12,depth:12,position:{x:53.53,y:12.00,z:37.50}},
			{height:12,width:12,depth:12,position:{x:89.52,y:12.00,z:37.50}},
			
			{height:7.6,width:7.6,depth:21,position:{x:-108.50,y:0.00,z:0.97}},
			{height:12,width:12,depth:12,position:{x:-108.50,y:12.00,z:-18.62}},
			{height:12,width:12,depth:12,position:{x:-108.50,y:12.00,z:20.64}},
			{height:7.6,width:7.6,depth:21,position:{x:106.50,y:0.00,z:-1.27}},
			{height:12,width:12,depth:12,position:{x:106.50,y:12.00,z:-19.97}},
			{height:12,width:12,depth:12,position:{x:106.50,y:12.00,z:17.39}},
		],bottom:{visible:true,depth:0,map:{name:'grass',repeat:0.018}}},
		{type:'Model',modelName:'window',position:{x:-114.66,y:12.00,z:-259.95},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-79.18,y:12.00,z:-259.95},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-42.65,y:12.00,z:-259.95},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-7.50,y:12.00,z:-259.95},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:28.53,y:12.00,z:-259.95},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:64.52,y:12.00,z:-259.95},rotation:{x:0,y:0,z:0}},
		
		{type:'Model',modelName:'door',position:{x:-132.64,y:0.00,z:-295.48},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:-132.50,y:12.00,z:-275.81},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:-132.50,y:12.00,z:-315.07},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'door',position:{x:82.36,y:0.00,z:-297.72},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:82.50,y:12.00,z:-316.42},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:82.50,y:12.00,z:-279.06},rotation:{x:0,y:-90,z:0}},
		
		//单独关押
		{type:'Rect',width:31.7,height:35.6,depth:wallHeight,hollow:true,position:{x:-219.59,y:0.00,z:-26.16},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:16.85,y:0.00,z:0.03}},
			{height:7.6,width:7.6,depth:21,position:{x:-16.85,y:0.00,z:9.73}},
		]},
		{type:'Model',modelName:'door',position:{x:-203.60,y:0.00,z:-26.13},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'bed',position:{x:-215.34,y:4.10,z:-14.47},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'door',position:{x:-235.58,y:0.00,z:-16.43},rotation:{x:0,y:-90,z:0}},
		
		{type:'Rect',width:31.7,height:35.6,depth:wallHeight,hollow:true,position:{x:-219.59,y:0.00,z:-26.16+35.6},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:16.85,y:0.00,z:-0.04}},
			{height:7.6,width:7.6,depth:21,position:{x:-16.85,y:0.00,z:10.98}},
		]},
		{type:'Model',modelName:'door',position:{x:-203.60,y:0.00,z:9.40},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'bed',position:{x:-215.34,y:4.10,z:-14.47+35.6},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'door',position:{x:-235.58,y:0.00,z:20.42},rotation:{x:0,y:-90,z:0}},
		
		{type:'Rect',width:31.7,height:35.6,depth:wallHeight,hollow:true,position:{x:-219.59,y:0.00,z:-26.16+35.6*2},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:16.85,y:0.00,z:-0.04}},
			{height:7.6,width:7.6,depth:21,position:{x:-16.85,y:0.00,z:9.93}},
		]},
		{type:'Model',modelName:'door',position:{x:-203.60,y:0.00,z:45.30},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'bed',position:{x:-215.34,y:4.10,z:-14.47+35.6*2},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'door',position:{x:-235.58,y:0.00,z:54.97},rotation:{x:0,y:-90,z:0}},
		
		{type:'Rect',width:31.7,height:35,depth:wallHeight,hollow:true,position:{x:-219.59,y:0.00,z:-26.36+35.6*3},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:16.85,y:0.00,z:-0.27}},
			{height:7.6,width:7.6,depth:21,position:{x:-16.85,y:0.00,z:10.41}},
		]},
		{type:'Model',modelName:'door',position:{x:-203.60,y:0.00,z:80.17},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'bed',position:{x:-215.34,y:4.10,z:-14.67+35.6*3},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'door',position:{x:-235.58,y:0.00,z:90.85},rotation:{x:0,y:-90,z:0}},
		
		//门
		{type:'Model',modelName:'door',position:{x:-189.57,y:0.00,z:-43.86},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'door',position:{x:-183.68,y:0.00,z:98.14},rotation:{x:0,y:0,z:0}},
	];
	
	var objs_bak=[
		//通道
		{type:'Rect',width:50,height:788.8,depth:wallHeight,hollow:true,position:{x:-25,y:0,z:-127.7},bottom:{visible:true,map:{name:'floor',repeat:0.025}},holes:[
			{width:7.6,height:5,depth:doorHeight,position:{x:0,y:0,z:394.4}},
			//左 右
			{width:5,height:20,depth:100,position:{x:-25,y:0,z:340}},
			{width:5,height:60,depth:100,position:{x:25,y:0,z:360}},
			{width:5,height:20,depth:100,position:{x:-25,y:0,z:20}},
			{width:5,height:20,depth:100,position:{x:25,y:0,z:20}},
			{width:5,height:20,depth:100,position:{x:-25,y:0,z:-220}},
			{width:5,height:20,depth:100,position:{x:25,y:0,z:-220}},
			
			{width:12,height:5,depth:12,position:{x:0,y:12,z:-394.4}},
			
			{width:5,height:12,depth:12,position:{x:-25,y:12,z:140}},
			{width:5,height:12,depth:12,position:{x:25,y:12,z:140}},
			{width:5,height:12,depth:12,position:{x:-25,y:12,z:-180}},
			{width:5,height:12,depth:12,position:{x:25,y:12,z:-180}},
			
		],rotation:{x:-90,y:0,z:0},top:{visible:true,map:{color:'#213137'}}},
		//A门
		{type:'Rect',width:7.6,height:0.3,depth:doorHeight/*,dataid:'609488a1ff64420b96c34fe2dd8db37f',dataindex:'0',label:{position:'left',visible:true,text:'没有此设备信息'}*/,map:{color:'#3385ff'},position:{x:-25,y:0,z:266.7},rotation:{x:-90,y:0,z:0}},
		{type:'Model',modelName:'door',position:{x:-25,y:0,z:266.7},/*label:{text:'A门',showDistance:300,position:'left'}*/},
		
		//中间
		{type:'Rect',width:50,height:0.1,depth:wallHeight,position:{x:-25,y:0,z:235.7},holes:[
			{width:7.6,height:5,depth:doorHeight,position:{x:0,y:0,z:0}}
		],rotation:{x:-90,y:0,z:0},top:{visible:true,map:{color:'#213137'}}},
		//B门
		//{type:'Rect',width:7.6,height:0.3,depth:doorHeight,isOpen:false/*,dataid:'609488a1ff64420b96c34fe2dd8db37f',dataindex:'2',label:{visible:true,text:'没有此设备信息'}*/,map:{color:'#3385ff'},position:{x:-25,y:0,z:235.7},rotation:{x:-90,y:0,z:0}},
		{type:'Model',modelName:'door',position:{x:-25,y:0,z:235.7},/*label:{text:'B门',showDistance:300}*/},
		//窗
		{type:'Model',modelName:'window',position:{x:-25,y:12,z:-522.1}},
		{type:'Model',modelName:'window',position:{x:-50,y:12,z:12.3},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:0,y:12,z:12.3},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:-50,y:12,z:-307.7},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:0,y:12,z:-307.7},rotation:{x:0,y:90,z:0}},
		
		//传达室
		{type:'Rect',width:46,height:41,depth:wallHeight,hollow:true,position:{x:23,y:0,z:246.2},bottom:{visible:true,map:{name:'floor',repeat:0.025}},holes:[
			{width:160,height:5,depth:100,position:{x:23,y:0,z:-23}},
			{width:5,height:10,depth:10,position:{x:-23,y:10,z:5}},//窗
			{width:5,height:12,depth:12,position:{x:23,y:10,z:5}},
			{width:7.6,height:5,depth:doorHeight,position:{x:0,y:0,z:20.5}},//门
		],rotation:{x:-90,y:0,z:0},top:{visible:true,map:{color:'#213137'}}},
		{type:'Rect',width:0.4,height:10,depth:10,position:{x:0,y:10,z:251.2},rotation:{x:-90,y:0,z:0},map:{color:'white',opacity:0.3}},
		{type:'Model',modelName:'window',position:{x:46,y:10,z:251.2},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'door',position:{x:23,y:0,z:266.7}},
		
		//草地
		//两侧:左,右
		{type:'Rect',width:45,height:837.9,depth:2,hollow:true,bottom:{visible:true,depth:0,map:{name:'grass',repeat:0.018}},map:{name:'stone',repeat:0.075},position:{x:-674.46,y:0,z:-152.26},holes:[
			{width:5,height:833.9,depth:100,position:{x:22.25,y:0,z:0}},
		],rotation:{x:-90,y:0,z:0}},
		{type:'Rect',width:45,height:837.9,depth:2,hollow:true,bottom:{visible:true,depth:0,map:{name:'grass',repeat:0.018}},map:{name:'stone',repeat:0.075},position:{x:731.09,y:0,z:-152.26},holes:[
			{width:5,height:833.9,depth:100,position:{x:-22.25,y:0,z:0}},
		],rotation:{x:-90,y:0,z:0}},
		
		//第一层 :右,左
		{type:'Rect',width:660.6,height:41,depth:2,hollow:true,bottom:{visible:true,depth:0,map:{name:'grass',repeat:0.018}},map:{name:'stone',repeat:0.075},position:{x:376.3,y:0,z:246.2},holes:[
			{width:670,height:5,depth:100,position:{x:0,y:0,z:-20}},
			{width:5,height:37,depth:100,position:{x:331.3,y:0,z:0}},
			{width:5,height:37,depth:100,position:{x:-331.3,y:0,z:0}},
		],rotation:{x:-90,y:0,z:0}},
		
		{type:'Rect',width:600,height:41,depth:2,hollow:true,bottom:{visible:true,depth:0,map:{name:'grass',repeat:0.018}},map:{name:'stone',repeat:0.075},position:{x:-350,y:0,z:246.2},holes:[
			{width:596,height:5,depth:100,position:{x:0,y:0,z:-20}},
			{width:5,height:37,depth:100,position:{x:-20.5,y:0,z:0}},
			{width:5,height:37,depth:100,position:{x:-300,y:0,z:0}},
			{width:5,height:37,depth:100,position:{x:300,y:0,z:0}},
		],rotation:{x:-90,y:0,z:0}},
		
		//第二层
		{type:'Rect',width:600,height:49,depth:2,hollow:true,bottom:{visible:true,depth:0,map:{name:'grass',repeat:0.018}},map:{name:'stone',repeat:0.075},position:{x:300,y:0,z:12.1},holes:[
			{width:596,height:5,depth:100,position:{x:0,y:0,z:24}},
			{width:596,height:5,depth:100,position:{x:0,y:0,z:-24}},
		],rotation:{x:-90,y:0,z:0}},
		
		{type:'Rect',width:600,height:49,depth:2,hollow:true,bottom:{visible:true,depth:0,map:{name:'grass',repeat:0.018}},map:{name:'stone',repeat:0.075},position:{x:-350,y:0,z:12.1},holes:[
			{width:596,height:5,depth:100,position:{x:0,y:0,z:24}},
			{width:596,height:5,depth:100,position:{x:0,y:0,z:-24}},
			{width:5,height:50,depth:100,position:{x:-300,y:0,z:0}},
		],rotation:{x:-90,y:0,z:0}},
		
		//第三层
		{type:'Rect',width:600,height:49,depth:2,hollow:true,bottom:{visible:true,depth:0,map:{name:'grass',repeat:0.018}},map:{name:'stone',repeat:0.075},position:{x:300,y:0,z:-307.8},holes:[
			{width:596,height:5,depth:100,position:{x:0,y:0,z:24}},
			{width:596,height:5,depth:100,position:{x:0,y:0,z:-24}},
		],rotation:{x:-90,y:0,z:0}},
		
		{type:'Rect',width:600,height:49,depth:2,hollow:true,bottom:{visible:true,depth:0,map:{name:'grass',repeat:0.018}},map:{name:'stone',repeat:0.075},position:{x:-350,y:0,z:-307.8},holes:[
			{width:596,height:5,depth:100,position:{x:0,y:0,z:24}},
			{width:596,height:5,depth:100,position:{x:0,y:0,z:-24}},
			{width:5,height:50,depth:100,position:{x:-300,y:0,z:0}},
		],rotation:{x:-90,y:0,z:0}},
		
		//第四层
		{type:'Rect',width:1356.7,height:49,depth:2,hollow:true,bottom:{visible:true,depth:0,map:{name:'grass',repeat:0.018}},map:{name:'stone',repeat:0.075},position:{x:28.32,y:0,z:-546.74},holes:[
			{width:1360.6,height:5,depth:100,position:{x:0,y:0,z:24}},
			{width:5,height:45,depth:100,position:{x:-679.3,y:0,z:0}},
			{width:5,height:45,depth:100,position:{x:679.3,y:0,z:0}},
		],rotation:{x:-90,y:0,z:0}},
		
		//右通道
		{type:'Rect',width:31,height:748.5,depth:wallHeight,hollow:true,position:{x:615.5,y:0,z:-147.95},bottom:{visible:true,map:{name:'floor',repeat:0.025}},holes:[
			//窗
			{width:12,height:5,depth:12,position:{x:0,y:12,z:-374.3}},
			{width:12,height:5,depth:12,position:{x:0,y:12,z:374.3}},
			{width:5,height:12,depth:12,position:{x:-15,y:12,z:160},rotation:{x:0,y:90,z:0}},
			{width:5,height:12,depth:12,position:{x:-15,y:12,z:-160},rotation:{x:0,y:90,z:0}},
			
			{width:5,height:20,depth:100,position:{x:-15.5,y:0,z:355}},
			{width:5,height:20,depth:100,position:{x:-15.5,y:0,z:40}},
			{width:5,height:20,depth:100,position:{x:-15.5,y:0,z:-200}},
			
			{width:5,height:740,depth:100,position:{x:15.5,y:0,z:0}},
		],rotation:{x:-90,y:0,z:0},top:{visible:true,map:{color:'#213137'}}},
		{type:'Model',modelName:'window',position:{x:615.5,y:12,z:-522.2}},
		{type:'Model',modelName:'window',position:{x:615.5,y:12,z:226.3}},
		{type:'Model',modelName:'window',position:{x:600,y:12,z:12.05},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:600,y:12,z:-307.95},rotation:{x:0,y:90,z:0}},
	];
	var createRoom=function(offset,params){
		roomIndex++;
		if(offset==null){
			offset={x:0,y:0,z:0};
		}
		for(var r=0;r<room.length;r++){
			var item=JSON.parse(JSON.stringify(room[r]));
			if(params&&params.room===false){
				if(r==0){
					item.holes=[
						{height:7.6,width:7.6,depth:21,position:{x:15.93,y:0.00,z:-70.00}},
						{height:7.6,width:7.6,depth:21,position:{x:21.82,y:0.00,z:72.00}},
					];
				}
				else if(r>2){
					break;
				}
			}
			if(params&&params.leftwall===false&&r==0){
				item.holes.push({height:138,width:1,depth:wallHeight,position:{x:-30,y:0,z:0}});
			}
			if(params&&params.rightwall===false&&r==0){
				item.holes.push({height:138,width:1,depth:wallHeight,position:{x:30,y:0,z:0}});
			}
			item.position.x+=offset.x;
			item.position.y+=offset.y;
			item.position.z+=offset.z;
			/*if(item.modelName=='door'){
				item.label.text=roomLocationIndex+(roomIndex>=10?roomIndex+'':'0'+roomIndex)+item.label.text;
			}*/
			objs.push(item);
		}
	};
	
	var createRightRoom=function(offset){
		if(offset==null){
			offset={x:0,y:0,z:0};
		}
		for(var r=0;r<rightRoom.length;r++){
			var item=JSON.parse(JSON.stringify(rightRoom[r]));
			item.position.x+=offset.x;
			item.position.y+=offset.y;
			item.position.z+=offset.z;
			objs.push(item);
		}
	};
	
	var createPassageway=function(offset,params){
		if(params==null){
			params={};
		}
		var holes=[
			{width:356,height:1,depth:100,position:{x:0,y:0,z:12.0}},
		];
		/*if(params.nowall){
			holes.push({width:700,height:1,depth:100,position:{x:0,y:0,z:16.0}});
		}*/
		if(params.leftdoor){
			holes.push({width:5,height:7.6,depth:doorHeight,position:{x:-180,y:0,z:0}});
		}
		if(params.rightdoor){
			holes.push({width:5,height:7.6,depth:doorHeight,position:{x:180,y:0,z:0}});
		}
		/*if(params.leftwindow){
			holes.push({width:5,height:12,depth:12,position:{x:-300,y:12,z:0}});
			objs.push({type:'Model',position:{x:offset.x,y:12+offset.y,z:210.8+offset.z},modelName:'window',rotation:{x:0,y:90,z:0}});
		}*/
		for(var i=-5;i<=5;i++){
			if(params.windows){
				holes.push({width:12,height:5,depth:12,position:{x:0+i*30,y:12,z:-12}});
				//窗
				//objs.push({type:'Rect',width:12,height:0.1,depth:12,position:{x:300+i*30+offset.x,y:12+offset.y,z:226.3+offset.z},map:{opacity:0.3}});
				objs.push({type:'Model',position:{x:180+i*30+offset.x,y:12+offset.y,z:41.8+offset.z},modelName:'window'});
			}
		}
	
		objs.push({type:'Rect',width:360,height:24,depth:wallHeight,hollow:true,position:{x:180.0+offset.x,y:0,z:53.8+offset.z},top:{visible:true,map:{color:'#213137'}},bottom:{visible:true,map:{name:'floor',repeat:0.025}},holes:holes,rotation:{x:-90,y:0,z:0}});
	
		//左门
		/*if(params.leftdoor){
			//objs.push({type:'Model',modelName:'door',position:{x:0+offset.x,y:0+offset.y,z:210.8+offset.z},rotation:{x:0,y:90,z:0},label:{text:roomLocationIndex+'左监区门',showDistance:300,position:'left'}});
			objs.push({type:'Model',modelName:'door',position:{x:0+offset.x,y:0+offset.y,z:210.8+offset.z},rotation:{x:0,y:90,z:0}});
		}
		//右门
		if(params.rightdoor){
			//objs.push({type:'Model',modelName:'door',position:{x:600+offset.x,y:0+offset.y,z:210.8+offset.z},rotation:{x:0,y:-90,z:0},label:{text:roomLocationIndex+'右监区门',showDistance:300}});
			objs.push({type:'Model',modelName:'door',position:{x:600+offset.x,y:0+offset.y,z:210.8+offset.z},rotation:{x:0,y:-90,z:0}});
		}*/
		
		//摄像头
		//objs.push({type:'Model',modelName:'camera',position:{x:3.5+offset.x,y:26,z:210.73+offset.z},rotation:{x:0,y:90,z:0},label:{text:cameraHtml('摄像头左'),position:'bottom',showDistance:300}});
		//objs.push({type:'Model',modelName:'camera',position:{x:596.5+offset.x,y:26,z:210.73+offset.z},rotation:{x:0,y:-90,z:0},label:{text:cameraHtml('摄像头右'),position:'bottom|left',showDistance:300}});
	}
	
	var setDoorInfo=function(obj,dataid,dataindex){
		obj.dataid=dataid;
		obj.dataindex=dataindex;
		obj.label={visible:true,text:'没有此设备信息'};
		obj.isOpen=false;
	}
	
	var createBigRoom=function(offset){
		if(offset==null){
			offset={x:0,y:0,z:0};
		}
		for(var r=0;r<bigRoom.length;r++){
			var item=JSON.parse(JSON.stringify(bigRoom[r]));
			item.position.x+=offset.x;
			item.position.y+=offset.y;
			item.position.z+=offset.z;
			objs.push(item);
		}
	}
	
	var roomLocationIndex=0;
	var roomIndex=0;
	var createArea=function(offset,params){
		roomLocationIndex++;
		roomIndex=0;
		createRoom({x:0+offset.x,y:0+offset.y,z:0+offset.z});
		createRoom({x:60+offset.x,y:0+offset.y,z:0+offset.z});
		createRoom({x:120+offset.x,y:0+offset.y,z:0+offset.z});
		createRoom({x:180+offset.x,y:0+offset.y,z:0+offset.z});
		createRoom({x:240+offset.x,y:0+offset.y,z:0+offset.z},{rightwall:params.room});
		createRoom({x:300+offset.x,y:0+offset.y,z:0+offset.z},{room:params.room,leftwall:params.room});
		/*createRoom({x:360+offset.x,y:0+offset.y,z:0+offset.z});
		createRoom({x:420+offset.x,y:0+offset.y,z:0+offset.z});
		createRoom({x:480+offset.x,y:0+offset.y,z:0+offset.z});
		createRoom({x:540+offset.x,y:0+offset.y,z:0+offset.z});*/
		
		createPassageway(offset,params);
	}
	
	var createBigRooms=function(offset){
		createBigRoom({x:30+offset.x,y:0,z:129.4+offset.z});
		createBigRoom({x:150+offset.x,y:0,z:129.4+offset.z});
		createBigRoom({x:270+offset.x,y:0,z:129.4+offset.z});
		createBigRoom({x:390+offset.x,y:0,z:129.4+offset.z});
		createBigRoom({x:510+offset.x,y:0,z:129.4+offset.z});
	}
	
	createArea({x:125.5,y:0,z:-110},{windows:true,leftdoor:true});
	createArea({x:-535.5,y:0,z:-110},{windows:true,rightdoor:true,room:false});
	
	createArea({x:125.5,y:0,z:-466},{windows:true,leftdoor:true});
	createArea({x:-535.5,y:0,z:-466},{windows:true,rightdoor:true});
	
	//createArea({x:0,y:0,z:-320},{leftdoor:true,rightdoor:true,nowall:true});
	//createArea({x:-650,y:0,z:-320},{rightdoor:true,nowall:true,leftwindow:true});
	//createBigRooms({x:0,y:0,z:-320});
	//createBigRooms({x:-650,y:0,z:-320});
	
	//createArea({x:0,y:0,z:-560},{leftdoor:true,windows:true,rightdoor:true});
	//createArea({x:-650,y:0,z:-560},{windows:true,rightdoor:true,leftwindow:true});
	
	//createRightRoom({x:669.52,y:0,z:-428.65});
	//createRightRoom({x:669.52,y:0,z:-241.52});
	//createRightRoom({x:669.52,y:0,z:-54.39});
	//createRightRoom({x:669.52,y:0,z:132.74});
	
	demoData=objs;
}

var demoData=[];

loadDemoData();
