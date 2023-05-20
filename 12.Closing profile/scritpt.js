var closeBtn=document.getElementById("close");
closeBtn.addEventListener("click",()=>{
    const close=closeBtn.parentElement.parentElement;
    close.style.display="none";
})