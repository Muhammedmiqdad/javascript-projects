var list=document.getElementById("list");
var btns=list.getElementsByClassName("list-item");
var i;

for(i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(){
        var current=document.getElementsByClassName("active");
        current[0].className=current[0].className.replace("active"," ");
        this.className+=" active";
    })
}
