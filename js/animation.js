var a =0;
 var id=setInterval(anim, 1000);
function anim(){
    a =a+10;
    if(a==40){
        clearInterval(id);
    }else{
var target  =document.querySelector("button")
target.style.marginLeft=a+'px';
    }
    }