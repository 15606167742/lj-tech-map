var cameraHtml=function(text,id,address){
	return '<a onclick="vm.openDialog(\''+id+'\',\''+address+'\')" style="cursor:pointer">'+text+'</a>';
};

var loadDemoData=function(){
	var wallHeight=30;
	var doorHeight=21;//15
    
	var room=[
		//房间
		{type:'Rect',width:60,height:116.80,depth:wallHeight,hollow:true,bottom:{visible:true,map:{name:'floor',repeat:0.025}},position:{x:30.0,y:0,z:137},holes:[
			{width:7.6,height:5,depth:doorHeight,position:{x:0,y:0,z:57.8}},
			{width:7.6,height:5,depth:doorHeight,position:{x:0,y:0,z:-57.8}},
		],rotation:{x:-90,y:0,z:0},top:{visible:true,map:{color:'#213137'}}},
		
		//放风场
		{type:'Rect',width:60,height:40,depth:wallHeight,hollow:true,bottom:{visible:true,map:{color:'#b0b0b0'}},position:{x:30,y:0,z:58.2},holes:[
			{width:56,height:1,depth:100,position:{x:0,y:0,z:20}},
			{width:56,height:1,depth:100,position:{x:0,y:0,z:-20}},
		],rotation:{x:-90,y:0,z:0},top:{visible:true,map:{color:'#213137'}}},
		//栅栏
		{type:'Model',modelName:'fence',position:{x:30,y:0,z:38},rotation:{x:0,y:0,z:0}},
		
		//门
		//{type:'Rect',width:7.6,height:0.3,depth:doorHeight,position:{x:30,y:0,z:195.35},rotation:{x:-90,y:0,z:0},map:{color:'#3385ff'},label:{text:'监室门',showDistance:300}},
		{type:'Model',modelName:'door',position:{x:30,y:0,z:195.35}/*,label:{text:'监室门',showDistance:300}*/},
		//后门
		{type:'Model',modelName:'door',position:{x:30,y:0,z:78.55}/*,label:{text:'风场门',showDistance:300,position:'left'}*/},
	
		//隔档
		{type:'Rect',width:22.34,height:0.3,depth:20,position:{x:11.17,y:0,z:174.98},rotation:{x:-90,y:0,z:0},map:{opacity:0.8}},
		{type:'Rect',width:22.34,height:0.3,depth:20,position:{x:48.81,y:0,z:174.98},rotation:{x:-90,y:0,z:0},map:{opacity:0.8}},
		
		//水池
		{type:'Model',modelName:'trough',position:{x:4.03,y:5,z:185.23}},
		
		//便池
		{type:'Model',modelName:'urinal',position:{x:51,y:1,z:182.23}},
		{type:'Model',modelName:'urinal',position:{x:51,y:1,z:188.23}},
		
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
		
		{type:'Model',modelName:'bed',position:{x:11.24,y:5.1,z:164.92},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'bed',position:{x:11.24,y:5.1,z:151.92},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'bed',position:{x:11.24,y:5.1,z:138.92},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'bed',position:{x:11.24,y:5.1,z:125.92},rotation:{x:0,y:0,z:0}},
		/*{type:'Model',modelName:'bed',position:{x:11.24,y:5.1,z:112.92},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'bed',position:{x:11.24,y:5.1,z:99.92},rotation:{x:0,y:0,z:0}},
		{type:'Model',modelName:'bed',position:{x:11.24,y:5.1,z:86.92},rotation:{x:0,y:0,z:0}},*/
		
		{type:'Model',modelName:'bed',position:{x:48.1,y:5.1,z:164.92},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'bed',position:{x:48.1,y:5.1,z:151.92},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'bed',position:{x:48.1,y:5.1,z:138.92},rotation:{x:0,y:180,z:0}},
		/*{type:'Model',modelName:'bed',position:{x:48.1,y:5.1,z:125.92},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'bed',position:{x:48.1,y:5.1,z:112.92},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'bed',position:{x:48.1,y:5.1,z:99.92},rotation:{x:0,y:180,z:0}},
		{type:'Model',modelName:'bed',position:{x:48.1,y:5.1,z:86.92},rotation:{x:0,y:180,z:0}},*/
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
	
	var objs=[
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
		//{type:'Rect',width:7.6,height:0.3,depth:doorHeight/*,dataid:'609488a1ff64420b96c34fe2dd8db37f',dataindex:'0',label:{position:'left',visible:true,text:'没有此设备信息'}*/,map:{color:'#3385ff'},position:{x:-25,y:0,z:266.7},rotation:{x:-90,y:0,z:0}},
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
	var createRoom=function(offset){
		roomIndex++;
		if(offset==null){
			offset={x:0,y:0,z:0};
		}
		for(var r=0;r<room.length;r++){
			var item=JSON.parse(JSON.stringify(room[r]));
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
			{width:700,height:1,depth:100,position:{x:0,y:0,z:-16.0}},
		];
		if(params.nowall){
			holes.push({width:700,height:1,depth:100,position:{x:0,y:0,z:16.0}});
		}
		if(params.leftdoor){
			holes.push({width:5,height:7.6,depth:doorHeight,position:{x:-300,y:0,z:0}});
		}
		if(params.rightdoor){
			holes.push({width:5,height:7.6,depth:doorHeight,position:{x:300,y:0,z:0}});
		}
		if(params.leftwindow){
			holes.push({width:5,height:12,depth:12,position:{x:-300,y:12,z:0}});
			objs.push({type:'Model',position:{x:offset.x,y:12+offset.y,z:210.8+offset.z},modelName:'window',rotation:{x:0,y:90,z:0}});
		}
		for(var i=-9;i<=9;i++){
			if(offset.x==0&&offset.z==0&&i<=-9){
				continue;
			}
			if(params.windows){
				holes.push({width:12,height:5,depth:12,position:{x:0+i*30,y:12,z:15}});
				//窗
				//objs.push({type:'Rect',width:12,height:0.1,depth:12,position:{x:300+i*30+offset.x,y:12+offset.y,z:226.3+offset.z},map:{opacity:0.3}});
				objs.push({type:'Model',position:{x:300+i*30+offset.x,y:12+offset.y,z:226.3+offset.z},modelName:'window'});
			}
		}
	
		objs.push({type:'Rect',width:600,height:31,depth:wallHeight,hollow:true,position:{x:300.0+offset.x,y:0,z:210.8+offset.z},top:{visible:true,map:{color:'#213137'}},bottom:{visible:true,map:{name:'floor',repeat:0.025}},holes:holes,rotation:{x:-90,y:0,z:0}});
	
		//左门
		if(params.leftdoor){
			//objs.push({type:'Model',modelName:'door',position:{x:0+offset.x,y:0+offset.y,z:210.8+offset.z},rotation:{x:0,y:90,z:0},label:{text:roomLocationIndex+'左监区门',showDistance:300,position:'left'}});
			objs.push({type:'Model',modelName:'door',position:{x:0+offset.x,y:0+offset.y,z:210.8+offset.z},rotation:{x:0,y:90,z:0}});
		}
		//右门
		if(params.rightdoor){
			//objs.push({type:'Model',modelName:'door',position:{x:600+offset.x,y:0+offset.y,z:210.8+offset.z},rotation:{x:0,y:-90,z:0},label:{text:roomLocationIndex+'右监区门',showDistance:300}});
			objs.push({type:'Model',modelName:'door',position:{x:600+offset.x,y:0+offset.y,z:210.8+offset.z},rotation:{x:0,y:-90,z:0}});
		}
		
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
		createRoom({x:240+offset.x,y:0+offset.y,z:0+offset.z});
		createRoom({x:300+offset.x,y:0+offset.y,z:0+offset.z});
		createRoom({x:360+offset.x,y:0+offset.y,z:0+offset.z});
		createRoom({x:420+offset.x,y:0+offset.y,z:0+offset.z});
		createRoom({x:480+offset.x,y:0+offset.y,z:0+offset.z});
		createRoom({x:540+offset.x,y:0+offset.y,z:0+offset.z});
		
		createPassageway(offset,params);
	}
	
	var createBigRooms=function(offset){
		createBigRoom({x:30+offset.x,y:0,z:129.4+offset.z});
		createBigRoom({x:150+offset.x,y:0,z:129.4+offset.z});
		createBigRoom({x:270+offset.x,y:0,z:129.4+offset.z});
		createBigRoom({x:390+offset.x,y:0,z:129.4+offset.z});
		createBigRoom({x:510+offset.x,y:0,z:129.4+offset.z});
	}
	
	createArea({x:0,y:0,z:0},{windows:true,leftdoor:true,rightdoor:true});
	createArea({x:-650,y:0,z:0},{windows:true,rightdoor:true,leftwindow:true});
	
	createArea({x:0,y:0,z:-320},{leftdoor:true,rightdoor:true,nowall:true});
	createArea({x:-650,y:0,z:-320},{rightdoor:true,nowall:true,leftwindow:true});
	createBigRooms({x:0,y:0,z:-320});
	createBigRooms({x:-650,y:0,z:-320});
	
	createArea({x:0,y:0,z:-560},{leftdoor:true,windows:true,rightdoor:true});
	createArea({x:-650,y:0,z:-560},{windows:true,rightdoor:true,leftwindow:true});
	
	createRightRoom({x:669.52,y:0,z:-428.65});
	createRightRoom({x:669.52,y:0,z:-241.52});
	createRightRoom({x:669.52,y:0,z:-54.39});
	createRightRoom({x:669.52,y:0,z:132.74});
	
	demoData=objs;
}

var demoData=[];

loadDemoData();
