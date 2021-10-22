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
		
		{type:'Model',modelName:'bed',position:{x:11.24,y:5.1,z:94.92},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'bed',position:{x:11.24,y:5.1,z:107.92},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'bed',position:{x:11.24,y:5.1,z:120.92},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'bed',position:{x:11.24,y:5.1,z:133.92},rotation:{x:0,y:0,z:0}},
		
		{type:'Model',modelName:'bed',position:{x:48.1,y:5.1,z:94.92},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'bed',position:{x:48.1,y:5.1,z:107.92},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'bed',position:{x:48.1,y:5.1,z:120.92},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'bed',position:{x:48.1,y:5.1,z:133.92},rotation:{x:0,y:180,z:0}},
	];
	
	var topObj={visible:true,map:{color:'#213137'}};
	var mmidoffz=16;
	var mlbotoffz=8;
	
	var objs=[
		//测试
		// {
		// 	type:'Rect',width:100,height:300,depth:50,hollow:false,
		// 	top:{visible:true,map:{color:'#FFA0A0'}},
		// 	bottom:{visible:true,map:{name:'floor',repeat:0.025}},
		// 	position:{x:0,y:100,z:0},
		// 	holes:[
		// 		{height:7.6,width:7.6,depth:21,position:{x:19.00,y:0.00,z:28.62}},
		// 	],
		// },
		//左右草地
		{type:'Rect',width:420,height:122,depth:wallHeight,hollow:true,position:{x:-325.5,y:0,z:-129.7},
		bottom:{depth:0,visible:true,map:{name:'grass',repeat:0.018}},holes:[
			{height:1,width:416,depth:100,position:{x:0,y:0,z:-61}},
			{height:1,width:416,depth:100,position:{x:0,y:0,z:61}},
			{height:122,width:1,depth:100,position:{x:180,y:0,z:0}},
			//中部侧门和侧窗
			{height:7.6,width:7.6,depth:20,position:{x:210,y:1.00,z:9.38}},
			{height:12,width:12,depth:12,position:{x:210,y:12.00,z:-16.67}},
			{height:12,width:12,depth:12,position:{x:210,y:12.00,z:34.47}},
		],top:{visible:true,clip:true,map:{color:'#213137'}}},
		{type:'Rect',width:420,height:122,depth:wallHeight,hollow:true,position:{x:395.5,y:0,z:-129.7},
		bottom:{depth:0,visible:true,map:{name:'grass',repeat:0.018}},holes:[
			{height:1,width:416,depth:100,position:{x:0,y:0,z:-61}},
			{height:1,width:416,depth:100,position:{x:0,y:0,z:61}},
			{height:122,width:1,depth:100,position:{x:-180,y:0,z:0}},
			//中部侧门和侧窗
			{height:7.6,width:7.6,depth:20,position:{x:-210,y:1.00,z:10.75}},
			{height:12,width:12,depth:12,position:{x:-210,y:12.00,z:-15.67}},
			{height:12,width:12,depth:12,position:{x:-210,y:12.00,z:37.27}},
		],top:{visible:true,clip:true,map:{color:'#213137'}}},
		//左右电梯房
		{type:'Rect',width:36,height:72,depth:wallHeight,hollow:true,position:{x:-517.5,y:0,z:-129.7},top:topObj,bottom:{visible:true,map:{name:'floor',repeat:0.025}},holes:[
			{height:7.6,width:7.6,depth:21,position:{x:19.00,y:0.00,z:28.62}},
		]},
		{type:'Model',modelName:'door',position:{x:-499.36,y:0.00,z:-101.08},rotation:{x:0,y:90,z:0}},
		{type:'Rect',width:36,height:72,depth:wallHeight,hollow:true,position:{x:587.5,y:0,z:-129.7},top:topObj,bottom:{visible:true,map:{name:'floor',repeat:0.025}},holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-19.00,y:0.00,z:28.67}},
		]},
		{type:'Model',modelName:'door',position:{x:569.36,y:0.00,z:-101.03},rotation:{x:0,y:-90,z:0}},
		
		//大厅
		{type:'Rect',width:297,height:593,depth:wallHeight,hollow:true,position:{x:35,y:0,z:-127.7},
		bottom:{clip:true,visible:true,map:{name:'floor',repeat:0.025}},holes:[
			//走廊门
			{height:7.6,width:2,depth:20,position:{x:-149.50,y:1.00,z:-284.52}},
			{height:7.6,width:2,depth:20,position:{x:149.50,y:1.00,z:-284.50}},
			{height:7.6,width:2,depth:20,position:{x:149.50,y:1.00,z:71.49}},
			{height:7.6,width:2,depth:20,position:{x:-149.50,y:1.00,z:71.51}},
			//上部窗
			{height:12,width:12,depth:12,position:{x:128.14,y:12.00,z:-297.50}},
			{height:12,width:12,depth:12,position:{x:90.19,y:12.00,z:-297.50}},
			{height:12,width:12,depth:12,position:{x:52.50,y:12.00,z:-297.50}},
			{height:12,width:12,depth:12,position:{x:17.34,y:12.00,z:-297.50}},
			{height:12,width:12,depth:12,position:{x:-17.27,y:12.00,z:-297.50}},
			{height:12,width:12,depth:12,position:{x:-54.33,y:12.00,z:-297.50}},
			{height:12,width:12,depth:12,position:{x:-91.40,y:12.00,z:-297.50}},
			{height:12,width:12,depth:12,position:{x:-126.05,y:12.00,z:-297.50}},
			//中庭草地
			{width:216,height:105,depth:5,position:{x:0,y:0,z:9}},
			{width:215,height:73,depth:5,position:{x:0,y:0,z:-168.75}},
			
			//中部侧门和侧窗
			{height:7.6,width:7.6,depth:20,position:{x:-149.50,y:1.00,z:7.37}},
			{height:12,width:12,depth:12,position:{x:-149.50,y:12.00,z:-18.75}},
			{height:12,width:12,depth:12,position:{x:-149.50,y:12.00,z:32.39}},
			{height:7.6,width:7.6,depth:20,position:{x:149.50,y:1.00,z:8.75}},
			{height:12,width:12,depth:12,position:{x:149.50,y:12.00,z:35.24}},
			{height:12,width:12,depth:12,position:{x:149.50,y:12.00,z:-17.75}},
			//下部大门和窗
			{height:7.6,width:7.6,depth:20,position:{x:-0.43,y:1.00,z:297.50}},
			{height:12,width:12,depth:12,position:{x:-88.16,y:12.00,z:297.50}},
			{height:12,width:12,depth:12,position:{x:-124.52,y:12.00,z:297.50}},
			{height:12,width:12,depth:12,position:{x:-51.96,y:12.00,z:297.50}},
			{height:12,width:12,depth:12,position:{x:88.02,y:12.00,z:297.50}},
			{height:12,width:12,depth:12,position:{x:124.59,y:12.00,z:297.50}},
			{height:12,width:12,depth:12,position:{x:53.48,y:12.00,z:297.50}},
		],rotation:{x:-90,y:0,z:0},top:topObj},
		//走廊门
		{type:'Model',modelName:'door',position:{x:-113.64,y:0.00,z:-412.22},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'door',position:{x:183.64,y:0.00,z:-412.20},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'door',position:{x:183.64,y:0.00,z:-56.21},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'door',position:{x:-113.64,y:0.00,z:-56.19},rotation:{x:0,y:-90,z:0}},
		//上部窗
		{type:'Model',modelName:'window',position:{x:163.14,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'window',position:{x:125.19,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'window',position:{x:87.50,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'window',position:{x:52.34,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'window',position:{x:17.73,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'window',position:{x:-19.33,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'window',position:{x:-56.40,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'window',position:{x:-91.05,y:12.00,z:-424.20},rotation:{x:0,y:180,z:0}},
		//中部侧门和侧窗
		{type:'Model',modelName:'door',position:{x:-113.64,y:0.00,z:-120.33},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:-113.50,y:12.00,z:-95.31},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:-113.50,y:12.00,z:-146.45},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'door',position:{x:183.64,y:0.00,z:-118.95},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:183.50,y:12.00,z:-92.46},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:183.50,y:12.00,z:-145.45},rotation:{x:0,y:90,z:0}},
		//门口
		{type:'Model',modelName:'door',position:{x:34.57,y:0.00,z:168.94},rotation:{x:0,y:0,z:0}},
		{type:'Rect',width:76,height:21,depth:1,position:{x:35,y:0,z:179.3},map:{color:'#b0b0b0'}},
		{type:'Model',modelName:'window',position:{x:-89.52,y:12.00,z:168.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-53.16,y:12.00,z:168.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-16.96,y:12.00,z:168.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:88.48,y:12.00,z:168.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:123.02,y:12.00,z:168.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:159.59,y:12.00,z:168.80},rotation:{x:0,y:0,z:0}},
		//大厅-最下
		{type:'Rect',width:71,height:75,depth:wallHeight,hollow:true,position:{x:-37,y:0,z:67.3+mlbotoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-26.38,y:0,z:-36.5}},
			{height:12,width:12,depth:12,position:{x:-7.58,y:12,z:-36.50}},
			{height:12,width:12,depth:12,position:{x:15.73,y:12,z:-36.50}},
			{height:12,width:12,depth:12,position:{x:-18.44,y:12,z:38.50}}
		]},
		{type:'Model',modelName:'door',position:{x:-63.38,y:0,z:29.94+mlbotoffz},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-44.58,y:12,z:29.80+mlbotoffz},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-21.27,y:12,z:29.8+mlbotoffz},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-55.44,y:12,z:104.8+mlbotoffz},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:75,depth:wallHeight,hollow:true,position:{x:16.5,y:0,z:67.3+mlbotoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-9.74,y:0.00,z:-36.50}},
			{height:12,width:12,depth:12,position:{x:5.57,y:12.00,z:-36.50}},
		]},
		{type:'Model',modelName:'door',position:{x:6.76,y:0.00,z:37.94},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:22.07,y:12.00,z:37.80},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:72,height:75,depth:wallHeight,hollow:true,position:{x:70.5,y:0,z:67.3+mlbotoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-24.80,y:0.00,z:-36.50}},
		]},
		{type:'Model',modelName:'door',position:{x:45.7,y:0.00,z:37.94},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:75,depth:wallHeight,hollow:true,position:{x:124.5,y:0,z:67.3+mlbotoffz},top:topObj,holes:[
			{height:12,width:12,depth:12,position:{x:0.32,y:12.00,z:38.50}},
			{height:7.6,width:7.6,depth:21,position:{x:19.00,y:0.00,z:25.72}},
		]},
		{type:'Model',modelName:'window',position:{x:124.82,y:12.00,z:112.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'door',position:{x:142.64,y:0.00,z:101.02},rotation:{x:0,y:90,z:0}},
		
		//大厅-下
		{type:'Rect',width:35.5,height:60,depth:wallHeight,hollow:true,position:{x:-54.7,y:0,z:-23.2+9},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-8.85,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:6.61,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-0.34,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:-63.55,y:0.00,z:-44.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-48.09,y:12.00,z:-44.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-55.04,y:12.00,z:15.80},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:60,depth:wallHeight,hollow:true,position:{x:-18.9,y:0,z:-23.2+9},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-9.28,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:6.22,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-0.25,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:-28.18,y:0.00,z:-44.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-12.68,y:12.00,z:-44.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-19.15,y:12.00,z:15.80},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:34.1,depth:wallHeight,hollow:true,position:{x:17.1,y:0,z:-36.1+9},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-9.42,y:0.00,z:-16.05}},
			{height:12,width:12,depth:12,position:{x:6.25,y:12.00,z:-16.05}},
		]},
		{type:'Model',modelName:'door',position:{x:7.68,y:0.00,z:-44.01},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:23.35,y:12.00,z:-44.15},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:25.3,depth:wallHeight,hollow:true,position:{x:17.1,y:0,z:-5.9+9},top:topObj,holes:[
			{height:12,width:12,depth:12,position:{x:-0.07,y:12.00,z:13.65}},
			{height:7.6,width:7.6,depth:21,position:{x:19.00,y:0.00,z:-4.54}},
		]},
		{type:'Model',modelName:'window',position:{x:17.03,y:12.00,z:15.75},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'door',position:{x:35.24,y:0.00,z:-1.44},rotation:{x:0,y:90,z:0}},
		
		{type:'Rect',width:72,height:60,depth:wallHeight,hollow:true,position:{x:71.1,y:0,z:-23.2+9},top:topObj,holes:[
			{height:56,width:1,depth:30,position:{x:-36,y:0,z:0}},//去左墙
			{height:56,width:1,depth:30,position:{x:36,y:0,z:0}},//去右墙
			{height:7.6,width:7.6,depth:21,position:{x:-27.84,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-12.31,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-19.31,y:12.00,z:31.00}},
			{height:12,width:12,depth:12,position:{x:16.82,y:12.00,z:31.00}},
			{height:12,width:12,depth:12,position:{x:15.80,y:12.00,z:-29.00}},
		]},
		{type:'Model',modelName:'door',position:{x:43.26,y:0.00,z:-44.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:58.79,y:12.00,z:-44.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:51.79,y:12.00,z:15.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:87.92,y:12.00,z:15.80},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:86.90,y:12.00,z:-44.20},rotation:{x:0,y:0,z:0}},
		
		//隔间
		{type:'Rect',width:0.1,height:13,depth:wallHeight,position:{x:71.1,y:0,z:0.09+9},top:topObj},
		{type:'Rect',width:35.5,height:34.1,depth:wallHeight,hollow:true,position:{x:124.85,y:0,z:-36.1+9},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:7.85,y:0.00,z:-16.05}},
			{height:12,width:12,depth:12,position:{x:-6.58,y:12.00,z:-16.05}},
		]},
		{type:'Model',modelName:'door',position:{x:132.70,y:0.00,z:-44.01},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:118.27,y:12.00,z:-44.15},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:35.5,height:25.3,depth:wallHeight,hollow:true,position:{x:124.85,y:0,z:-5.9+9},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-18.75,y:0.00,z:-5.89}},
		]},
		{type:'Model',modelName:'door',position:{x:106.96,y:0.00,z:-2.79},rotation:{x:0,y:-90,z:0}},
		
		//大厅-中
		{type:'Rect',width:216,height:105,depth:wallHeight,hollow:true,position:{x:35,y:0,z:-134.7+mmidoffz},top:topObj,holes:[
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
		{type:'Model',modelName:'window',position:{x:-54.29,y:12.00,z:-66.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-17.74,y:12.00,z:-66.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:18.34,y:12.00,z:-66.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:55.25,y:12.00,z:-66.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:91.81,y:12.00,z:-66.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:126.67,y:12.00,z:-66.20},rotation:{x:0,y:0,z:0}},
		
		{type:'Model',modelName:'door',position:{x:-73.14,y:0.00,z:-118.7},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:-73.00,y:12.00,z:-144.95},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:-73.00,y:12.00,z:-92.2},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'door',position:{x:143.14,y:0.00,z:-118.7},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:143.00,y:12.00,z:-144.95},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'window',position:{x:143.00,y:12.00,z:-92.2},rotation:{x:0,y:90,z:0}},
		
		{type:'Rect',width:36,height:60,depth:wallHeight,hollow:true,position:{x:-55,y:0,z:-217.2+mmidoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-8.44,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:6.42,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:0.50,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:-63.44,y:0.00,z:-231.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-48.58,y:12.00,z:-231.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-54.50,y:12.00,z:-171.20},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:60,depth:wallHeight,hollow:true,position:{x:-19,y:0,z:-217.2+mmidoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:7.53,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-7.11,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-0.25,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:-11.47,y:0.00,z:-231.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-26.11,y:12.00,z:-231.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-19.25,y:12.00,z:-171.20},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:60,depth:wallHeight,hollow:true,position:{x:17,y:0,z:-217.2+mmidoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-8.68,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:5.93,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:0.29,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:8.32,y:0.00,z:-231.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:22.93,y:12.00,z:-231.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:17.29,y:12.00,z:-171.20},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:60,depth:wallHeight,hollow:true,position:{x:53,y:0,z:-217.2+mmidoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:9.55,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-5.65,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:1.25,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:62.55,y:0.00,z:-231.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:47.35,y:12.00,z:-231.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:54.25,y:12.00,z:-171.20},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:60,depth:wallHeight,hollow:true,position:{x:89,y:0,z:-217.2+mmidoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-7.90,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:6.95,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:0.32,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:81.10,y:0.00,z:-231.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:95.95,y:12.00,z:-231.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:89.32,y:12.00,z:-171.20},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:60,depth:wallHeight,hollow:true,position:{x:125,y:0,z:-217.2+mmidoffz},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:9.16,y:0.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:-6.11,y:12.00,z:-29.00}},
			{height:12,width:12,depth:12,position:{x:0.27,y:12.00,z:31.00}},
		]},
		{type:'Model',modelName:'door',position:{x:134.16,y:0.00,z:-231.06},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:118.89,y:12.00,z:-231.20},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:125.27,y:12.00,z:-171.20},rotation:{x:0,y:0,z:0}},
		
		//大厅-上
		{type:'Rect',width:35.5,height:66,depth:wallHeight,hollow:true,position:{x:-54.75,y:0,z:-365.95},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:9.31,y:0.00,z:-32.00}},
			{height:7.6,width:7.6,depth:21,position:{x:-18.75,y:0.00,z:0.04}},
			{height:7.6,width:7.6,depth:21,position:{x:-18.75,y:0.00,z:25.92}},
		]},
		{type:'Model',modelName:'door',position:{x:-45.44,y:0.00,z:-398.81},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'door',position:{x:-72.64,y:0.00,z:-365.91},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'door',position:{x:-72.64,y:0.00,z:-340.03},rotation:{x:0,y:-90,z:0}},
		{type:'Rect',width:35.5,height:0.1,depth:wallHeight,hollow:true,position:{x:-54.75,y:0,z:-349.15},top:topObj},
		{type:'Rect',width:16.2,height:33.6,depth:wallHeight,hollow:true,position:{x:-64.40,y:0,z:-365.95},top:topObj,holes:[
			{height:29.6,width:1,depth:wallHeight,position:{x:-8.1,y:0.00,z:0}},
		]},
		
		{type:'Rect',width:36,height:66,depth:wallHeight,hollow:true,position:{x:-19.5,y:0,z:-365.95},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-9.29,y:0.00,z:-32.00}},
			{height:12,width:12,depth:12,position:{x:0.17,y:12.00,z:34.00}},
		]},
		{type:'Model',modelName:'door',position:{x:-28.79,y:0.00,z:-398.81},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-19.33,y:12.00,z:-332.95},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:72,height:66,depth:wallHeight,hollow:true,position:{x:34.5,y:0,z:-365.95},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-28.34,y:0.00,z:-32.00}},
			{height:12,width:12,depth:12,position:{x:16.56,y:12.00,z:-32.00}},
			{height:12,width:12,depth:12,position:{x:16.25,y:12.00,z:34.00}},
			{height:12,width:12,depth:12,position:{x:-16.27,y:12.00,z:34.00}},
		]},
		{type:'Model',modelName:'door',position:{x:6.16,y:0.00,z:-398.81},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:51.06,y:12.00,z:-398.95},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:18.23,y:12.00,z:-332.95},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:50.75,y:12.00,z:-332.95},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:36,height:66,depth:wallHeight,hollow:true,position:{x:88.5,y:0,z:-365.95},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:-9.53,y:0.00,z:-32.00}},
			{height:12,width:12,depth:12,position:{x:0.30,y:12.00,z:34.00}},
		]},
		{type:'Model',modelName:'door',position:{x:78.97,y:0.00,z:-398.81},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:88.80,y:12.00,z:-332.95},rotation:{x:0,y:0,z:0}},
		//上部-WC
		{type:'Rect',width:36,height:66,depth:wallHeight,hollow:true,position:{x:124.5,y:0,z:-365.95},top:{clip:true,visible:true,map:{color:'#213137'}},holes:[
			{height:12,width:12,depth:12,position:{x:0.67,y:12.00,z:34.00}},
			{height:14,width:1,depth:100,position:{x:18,y:0,z:0}},
		]},
		{type:'Model',modelName:'window',position:{x:125.17,y:12.00,z:-332.95},rotation:{x:0,y:0,z:0}},
		{type:'Rect',width:36,height:0.1,depth:wallHeight,position:{x:124.5,y:0,z:-374.95},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:11.95,y:0.00,z:1.05}},
		]},
		{type:'Model',modelName:'door',position:{x:136.45,y:0.00,z:-374.76},rotation:{x:0,y:0,z:0}},
		{type:'Rect',width:14,height:0.1,depth:wallHeight,position:{x:135.50,y:0.00,z:-357.95},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:0.10,y:0.00,z:1.05}},
		]},
		{type:'Model',modelName:'door',position:{x:135.60,y:0.00,z:-357.76},rotation:{x:0,y:0,z:0}},
		
		{type:'Rect',width:0.1,height:14,depth:wallHeight,position:{x:128.60,y:0.00,z:-365.95},top:topObj},
		//上部-草地
		{type:'Rect',width:215,height:73,depth:wallHeight,hollow:true,position:{x:35,y:0,z:-296.45},top:topObj,holes:[
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
		{type:'Model',modelName:'window',position:{x:-54.66,y:12.00,z:-259.95},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:-19.18,y:12.00,z:-259.95},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:17.35,y:12.00,z:-259.95},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:52.5,y:12.00,z:-259.95},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:88.53,y:12.00,z:-259.95},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'window',position:{x:124.52,y:12.00,z:-259.95},rotation:{x:0,y:0,z:0}},
		
		{type:'Model',modelName:'door',position:{x:-72.64,y:0.00,z:-295.48},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:-72.50,y:12.00,z:-275.81},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:-72.50,y:12.00,z:-315.07},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'door',position:{x:142.36,y:0.00,z:-297.72},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:142.50,y:12.00,z:-316.42},rotation:{x:0,y:-90,z:0}},
		{type:'Model',modelName:'window',position:{x:142.50,y:12.00,z:-279.06},rotation:{x:0,y:-90,z:0}},
		
		//左下房间-单独关押
		{type:'Rect',width:31.7,height:35.6,depth:wallHeight,hollow:true,position:{x:-159.59,y:0.00,z:-26.16},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:16.85,y:0.00,z:0.03}},
			{height:7.6,width:7.6,depth:21,position:{x:-16.85,y:0.00,z:9.73}},
		]},
		{type:'Model',modelName:'door',position:{x:-143.60,y:0.00,z:-26.13},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'bed',position:{x:-155.34,y:4.10,z:-14.47},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'door',position:{x:-175.58,y:0.00,z:-16.43},rotation:{x:0,y:-90,z:0}},
		
		{type:'Rect',width:31.7,height:35.6,depth:wallHeight,hollow:true,position:{x:-159.59,y:0.00,z:-26.16+35.6},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:16.85,y:0.00,z:-0.04}},
			{height:7.6,width:7.6,depth:21,position:{x:-16.85,y:0.00,z:10.98}},
		]},
		{type:'Model',modelName:'door',position:{x:-143.60,y:0.00,z:9.40},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'bed',position:{x:-155.34,y:4.10,z:-14.47+35.6},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'door',position:{x:-175.58,y:0.00,z:20.42},rotation:{x:0,y:-90,z:0}},
		
		{type:'Rect',width:31.7,height:35.6,depth:wallHeight,hollow:true,position:{x:-159.59,y:0.00,z:-26.16+35.6*2},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:16.85,y:0.00,z:-0.04}},
			{height:7.6,width:7.6,depth:21,position:{x:-16.85,y:0.00,z:9.93}},
		]},
		{type:'Model',modelName:'door',position:{x:-143.60,y:0.00,z:45.30},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'bed',position:{x:-155.34,y:4.10,z:-14.47+35.6*2},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'door',position:{x:-175.58,y:0.00,z:54.97},rotation:{x:0,y:-90,z:0}},
		
		{type:'Rect',width:31.7,height:35,depth:wallHeight,hollow:true,position:{x:-159.59,y:0.00,z:-26.36+35.6*3},top:topObj,holes:[
			{height:7.6,width:7.6,depth:21,position:{x:16.85,y:0.00,z:-0.27}},
			{height:7.6,width:7.6,depth:21,position:{x:-16.85,y:0.00,z:10.41}},
		]},
		{type:'Model',modelName:'door',position:{x:-143.60,y:0.00,z:80.17},rotation:{x:0,y:90,z:0}},
		{type:'Model',modelName:'bed',position:{x:-155.34,y:4.10,z:-14.67+35.6*3},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'door',position:{x:-175.58,y:0.00,z:90.85},rotation:{x:0,y:-90,z:0}},
		
		//门
		{type:'Model',modelName:'door',position:{x:-129.57,y:0.00,z:-43.86},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'door',position:{x:-123.68,y:0.00,z:98.14},rotation:{x:0,y:0,z:0}},
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
			
			objs.push(item);
		}
	};
	
	//创建走廊
	var createPassageway=function(offset,params){
		if(params==null){
			params={};
		}
		var holes=[
			{width:416,height:1,depth:100,position:{x:0,y:0,z:12.0}},
		];
		if(params.leftdoor){
			holes.push({width:5,height:7.6,depth:doorHeight,position:{x:-180,y:0,z:0}});
		}
		if(params.rightdoor){
			holes.push({width:5,height:7.6,depth:doorHeight,position:{x:180,y:0,z:0}});
		}
		for(var i=-6;i<=6;i++){
			if(params.windows){
				holes.push({width:12,height:5,depth:12,position:{x:0+i*30,y:12,z:-12}});
				objs.push({type:'Model',position:{x:210+i*30+offset.x,y:12+offset.y,z:41.8+offset.z},modelName:'window'});
			}
		}
		objs.push({type:'Rect',width:420,height:24,depth:wallHeight,hollow:true,position:{x:210.0+offset.x,y:0,z:53.8+offset.z},top:{visible:true,map:{color:'#213137'}},bottom:{visible:true,map:{name:'floor',repeat:0.025}},holes:holes,rotation:{x:-90,y:0,z:0}});
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
		createRoom({x:240+offset.x,y:0+offset.y,z:0+offset.z});
		createRoom({x:300+offset.x,y:0+offset.y,z:0+offset.z},{rightwall:params.room});
		createRoom({x:360+offset.x,y:0+offset.y,z:0+offset.z},{room:params.room,leftwall:params.room});
		
		createPassageway(offset,params);
	}
	
	//右下角房间群
	createArea({x:185.5,y:0,z:-110},{windows:true,leftdoor:true});
	//左下角房间群
	createArea({x:-535.5,y:0,z:-110},{windows:true,rightdoor:true,room:false});
	//右上角房间群
	createArea({x:185.5,y:0,z:-466},{windows:true,leftdoor:true});
	//左上角房间群
	createArea({x:-535.5,y:0,z:-466},{windows:true,rightdoor:true});
	
	demoData=objs;
}

var demoData=[];

loadDemoData();
