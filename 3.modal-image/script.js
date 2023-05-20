var logo=document.getElementById('myImg');
var imgModel=document.getElementById('imgModal');
var close=document.getElementById('close');
var img=document.getElementById('img');
var description=document.getElementById('description');

logo.addEventListener('click',()=>{
    imgModel.style.display="block";
    description.innerHTML="Our services";
    img.src="images/img2.jpg";
});

close.addEventListener('click',()=>{
    imgModel.style.display="none";
})

