var check=document.getElementById("check");
var close=document.getElementById("close");
var cancel=document.getElementById("cancel");
var yes=document.getElementById("yes");
var open=document.getElementById("open");


check.addEventListener("click",()=>{
    open.style.display="block";
})

//span
close.addEventListener("click",()=>{
    open.style.display="none";
})


//yes
yes.addEventListener("click",()=>{
    open.style.display="none";
})


//cancel
cancel.addEventListener("click",()=>{
    open.style.display="none";
})