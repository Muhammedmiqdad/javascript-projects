var values=document.getElementById("values");
let button=document.querySelectorAll("button");
// console.log(button);
let srcvalues="";

// for(var i=0;i<button.length;i++){
//     button[i].addEventListener("click",(e)=>{
//         // console.log(e.target);
//         // console.log(e.target.innerHTML)
//         var numberEntered=e.target.innerHTML;
//         // console.log(numberEntered);
//         if(numberEntered=='c'){
//             values.value="";
//         }else if(numberEntered=='='){
//             values.value=eval(srcvalues);
//         }else{
//             srcvalues+=numberEntered;
//             console.log(numberEntered);
//             values.value=srcvalues;
//         }
//     })
// }

for(var i=0;i<button.length;i++){
    button[i].addEventListener('click',(e)=>{
        var numberEntered=e.target.innerHTML;
        if(numberEntered=='C'){
            values.value="";
        }else if(numberEntered=='='){
            values.value=eval(srcvalues);
        }else{
            srcvalues+=numberEntered;
            console.log(numberEntered);
            values.value=srcvalues;
        }
    })
}