
function info(data){
	alert(JSON.stringify(data));
}

function setParams(oparams,cparams,isLight){
	if(cparams!=undefined){
		for(var name in cparams){
			if(isLight!=true&&typeof cparams[name]=='object'&&cparams[name].length==null){
				oparams[name]=setParams(oparams[name],cparams[name]);
			}
			else{
				oparams[name]=cparams[name];
			}
		}
	}
	return oparams;
}

var common={
	getUrlParam:function(name){
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	    
	    if (r != null) return decodeURI(r[2]); return null; //返回参数值
	},
	redirect:function(uri,params){
        var url=uri;
        if(params!=undefined){
			window.location=url+'?'+common.objectToQuery(params);
		}
        else{
        	window.location=url;
        }
    },
    getFullUrl:function(url){
		if(url.indexOf(':')==-1){
			return connectPaths.default+url;
		}
		var urls=url.split(':');
		return connectPaths[urls[0]]+urls[1];
	},
	combineParams:function(oparams,cparams){
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
	},
	objectToQuery:function(params){
		var url='';
		if (params != null) {
		    for (var name in params) {
		        url += name + '=' + params[name] + '&';
		    }
		    url = url.slice(0, -1);
		}
		return url;
	},
	group:function(list,callback,amount){
		for(var g=0;g<list.length/amount;g++){
			callback(function(eachcallback){
				for(var i=g*amount;i<(g+1)*amount&&i<list.length;i++){
					eachcallback(list[i]);
				}
			});
		}
	},
	connect:function(type,url,data,callback,errorCallback){
        if(typeof data=='function'){
        	errorCallback=callback;
        	callback=data;
        	data={};
        }

		var token='db77f45d641b7a68bff6966feb49ba68';
		
		//var token=common.token.get();
		/*if(token==undefined){
			common.redirect('/views/login.html')
			return;
		}*/
		
		var params={};
		if(typeof type=='object'){
			params=type;
		}
		else if(type.indexOf(':')!=-1){
			var types=type.split(':');
			params.type=types[1];
			if(types[0]=="json"){
				params.contentType='application/json';
				data=JSON.stringify(data);
			}
		}

        jQuery.ajax(setParams({
            url: common.getFullUrl(url),
            type: type,
            data: data,
            cache: false,
            beforeSend: function(xhr) {
			    //xhr.setRequestHeader("token",token);
			},
            success: function (result) {
            	//console.log(result);
	           	
	           	if(result.code==400){
	           		common.alert('需要重新登录');
	                //common.redirect('/views/login.html');
	            }
	           	else if(result.code==0){
	           		if(callback!=null)
	                	callback(result.data);
	           	}
	           	else{
	           		if(errorCallback!=null){
	           			errorCallback(result);
	           		}
                	else{
                		common.alert(result.msg+'\n'+result.data);
                	}
	           	}
            },
            error:function(){
            	common.alert('网络连接失败');
            }
        },params));
	},
	alert:function(msg){
		alert(msg);
	}
	/*connect:function(type,url,data,callback){
        if(typeof data=='function'){
        	callback=data;
        	data={};
        }

		var params={};
		if(typeof type=='object'){
			params=type;
		}
		else if(type.indexOf(':')!=-1){
			var types=type.split(':');
			params.type=types[1];
			if(types[0]=="json"){
				params.contentType='application/json';
				data=JSON.stringify(data);
			}
		}

        jQuery.ajax(common.combineParams({
            url: 'http://localhost:3333'+url,
            type: type,
            data: data,
            cache: false,
            success: function (result) {
           		if(callback!=null)
                	callback(result);
            },
            error:function(){
            	alert('网络连接失败');
            }
        },params));
	}*/
};

var db={
	collection:function(name){
		return {
			find:function(where,callback){
				if(callback==undefined){
					callback=where;
				}
				common.connect('get','/db/'+name,where,function(data){
					if(callback!=null)
						callback(data);
				});
			},
			insert:function(values,callback){
				common.connect('json:post','/db/'+name,values,function(data){
					if(callback!=null)
						callback(data);
				});
			},
			update:function(values,where,upsert,callback){
				if(callback==null){
					callback=upsert;
					upsert=false;
				}
				where._upsert=upsert;
				common.connect('json:put','/db/'+name+'?'+common.objectToQuery(where),values,function(data){
					if(callback!=null)
						callback(data);
				});
			},
			delete:function(where,callback){
				common.connect('json:delete','/db/'+name+'?'+common.objectToQuery(where),function(data){
					if(callback!=null)
						callback(data);
				});
			}
		};
	}
};