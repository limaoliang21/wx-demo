function getStyle(obj,name){
    return (obj.currentStyle||getComputedStyle(obj,false))[name];
};

function move(obj,json,options){
    clearInterval(obj.timer);
    options=options || {};
    options.type=options.type || 'ease-in';
    options.time=options.time || '700';
    var count=Math.ceil(options.time/30);
    var start={};
    var dis={};
    for(var name in json){
        start[name]=parseFloat(getStyle(obj,name));
        dis[name]=json[name]-start[name];
    };
    var n=0;
    obj.timer=setInterval(function(){
        n++;
        // start[name]+dis[name]*n/count
        for(var name in json){
            switch(options.type){
                case 'linear':
                    var a=n/count;
                    var cur=start[name]+dis[name]*a;
                    break;
                case 'ease-in':
                    var a=n/count;
                    var cur=start[name]+dis[name]*a*a*a;
                    break;
                case 'ease-out':
                    var a=(1-n/count);
                    var cur=start[name]+dis[name]*(1-a*a*a);
                    break;
            }
            if(name=='opacity'){
                obj.style.opacity=cur;
                obj.style.filter='alpha(opacity:'+cur*100+')'
            }else{
                obj.style[name]=cur+'px';
            }
        }
        if(n==count){
            clearInterval(obj.timer);
            options.end && options.end();
        }
    },30)
};

function getPos(obj){
    var l=0;
    var t=0;
    while(obj){
        l+=obj.offsetLeft;
        t+=obj.offsetTop;
        obj=obj.offsetParent;
    }
    return {left:l, top:t};
};

function jsonp(json){
    json=json || {};
    json.data=json.data || {};
    json.name=json.name || 'cb';
    if(!json.url)return;
    var fnName='show'+Math.random();
    fnName=fnName.replace('.','');
    window[fnName]=function(json1){
        json.fnSucc && json.fnSucc(json1);
    }
    var arr=[];
    json.data[json.name]=fnName;
    for(var name in json.data){
        arr.push(name+'='+json.data[name]);
    }
    var oS=document.createElement('script');
    oS.src=json.url+'?'+arr.join('&');
    var oHead=document.getElementsByTagName('head')[0];
    oHead.appendChild(oS);
};









