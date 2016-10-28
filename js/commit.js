window.onload=function() {
    //导航条
    var oFix = document.getElementById('header-fixed');
    var t = getPos(oFix).top;
    window.onscroll=function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //关于导航条
        if (scrollTop >= t) {
            oFix.className = 'header-home';
        } else {
            oFix.className = 'header-fixed';
        }
        //关于回到顶部
        if(scrollTop>=500){
            oTotop.style.display='block';
        }else{
            oTotop.style.display='none';
        }
    };
    //回到顶部
    var oTotop=document.getElementById('totop');
    var timer=null;
    oTotop.onclick=function(){
        clearInterval(timer);
        var iTarget=0;
        var start=document.documentElement.scrollTop || document.body.scrollTop;
        var dis=iTarget-start;
        var time=500;
        var count=Math.ceil(time/30);
        var n=0;
        timer=setInterval(function(){
            n++;
            var a=(1-n/count);
            var cur=start+dis*(1-a*a*a);
            document.documentElement.scrollTop=document.body.scrollTop=cur;
            if(n==count){
                clearInterval(timer);
            }
        },30);
    };
    //自我介绍
    var str='  假如生活给了我们困难，无非只有一句话，向前冲，最穷无非讨饭，不死终会出头，上帝都是公平的，开头是苦的，假如你半路退出了，那就说明你已经输了，只有尝尽了苦头，你才有资格享受未来的甜蜜，我会哭会抱怨，但我相信我不会输！路是自己走的，无论再苦都必须要坚持下去，等到成功了才可以骄傲的告诉自己，我没有被挫折打败，我赢了！未来的路我会好好的努力的去走！有人问我后悔么？那我只能告诉你我的字典里没有后悔这两个字！';
    var oWord=document.getElementById('word');
    for(var i=0; i<str.length; i++){
        var oSpan=document.createElement('span');
        oSpan.innerHTML=str.charAt(i);
        oWord.appendChild(oSpan);
    }
    var aSpan=oWord.children;
    var i=0;
    var timer1=setInterval(function(){
        move(aSpan[i],{opacity:.8});
        i++;
        if(i==str.length){
            clearInterval(timer1);
        }
    },300);
    document.getElementById('pao').onclick=function(){
        window.open('http://weibo.com/chutianbaby?refer_flag=1001030101_&is_hot=1');
    };
    //搜索
    var oFrame=document.getElementById('frame');
    var oTxt=oFrame.getElementsByTagName('input')[0];
    var oUl=oFrame.getElementsByTagName('ul')[0];
    var url='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su';
    oTxt.onkeyup=function(){
        oUl.innerHTML='';
        jsonp({
            url:url,
            data:{
                wd:oTxt.value
            },
            fnSucc:function(json){
                var arr=json.s;
                for(var i=0; i<arr.length; i++){
                    var oLi=document.createElement('li');
                    oLi.innerHTML=arr[i];
                    oUl.appendChild(oLi);
                }
                var aLi=oUl.children;
                for(var i=0; i<aLi.length; i++){
                    aLi[i].onclick=function(){
                        window.open('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='+this.innerHTML);
                    }
                }
            }
        })
    };
    var r=parseInt(Math.random()*256);
    var g=parseInt(Math.random()*256);
    var b=parseInt(Math.random()*256);
    var oP=document.getElementById('p');
    setInterval(function(){
        oP.style.color= 'rgb(' + r + ',' + g + ',' + b + ')';
    },30);
    //作品
    var oUl3d=document.getElementById('ul3d');
    var x=0;
    var y=0;
    oUl3d.onmousedown=function(ev){
        var disX=ev.clientX-y;
        var disY=ev.clientY-x;
        document.onmousemove=function(ev){
            x=ev.clientY-disY;
            y=ev.clientX-disX;
            oUl3d.style.transform='perspective(800px) rotateX('+-x+'deg) rotateY('+y+'deg)';
        };
        document.onmouseup=function(){
            document.onmousemove=null;
            document.onmouseup=null;
        };
        return false;
    };
    var aLi=oUl3d.children;
    aLi[0].onclick=function(){
        window.open('html/3Dpicture.html');
    };
    aLi[1].onclick=function(){
        window.open('html/3Dcarousel.html');
    };
    aLi[2].onclick=function(){
        window.open('html/iPhone.html');
    };
    aLi[3].onclick=function(){
        window.open('html/CountDown.html');
    };
    aLi[4].onclick=function(){
        window.open('html/demo.html');
    };
    aLi[5].onclick=function(){
        window.open('html/360movies.html');
    };
    //底部
    var oDiv3d=document.getElementById('div3d');
    var R = 5;
    var C = 4;
    var len = R*C;
    var bReady = true;
    for(var r=0; r<R; r++){
        for(var c=0; c<C; c++){
            var oI=document.createElement('i');
            oDiv3d.appendChild(oI);
            oI.style.width = oDiv3d.offsetWidth/C + "px";
            oI.style.height = oDiv3d.offsetHeight/R + "px";
            oI.style.left = oI.offsetWidth*c + "px";
            oI.style.top  = oI.offsetHeight*r + "px";
            oI.style.backgroundPosition = -oI.offsetLeft+"px -"+oI.offsetTop+"px";
        }
    }
    var iNow = 0;
    var aI = oDiv3d.getElementsByTagName('i');
    clearInterval(timer11);
    var timer11=setInterval( function(){
        if(!bReady) return ;
        bReady = false;
        iNow++;
        for(var i = 0; i < len; i++){
            var x = aI[i].offsetLeft + aI[i].offsetWidth/2 - oDiv3d.offsetWidth/2;
            var y = aSpan[i].offsetTop + aI[i].offsetHeight/2 - oDiv3d.offsetHeight/2;
            aI[i].style.transition = "1s all ease";
            aI[i].style.transform = "translate("+x+"px,"+y+"px) rotateX("+rnd(-180,180)+"deg)  rotateY("+rnd(-180,180)+"deg)";
            aI[i].style.opacity = "0";
        }
    },666);
    aI[0].addEventListener("transitionend",function(){
        for(var i = 0; i < len; i++){
            aI[i].style.opacity = 1;
            aI[i].style.transition = "none";
            aI[i].style.transform = "translate(0px,0px) rotateX(0deg)  rotateY(0deg)";
            aI[i].style.backgroundImage = "url(img/"+iNow%13+".jpg)";
        }
        oDiv3d.style.backgroundImage = "url(img/"+(iNow+1)%13+".jpg)";
        bReady = true;
    },false);
    function rnd(n,m){
        return Math.floor(Math.random()*(m-n)+n);
    }
}