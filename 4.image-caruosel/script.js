const moves=document.getElementById("move");
const images=document.querySelectorAll('img');
let start=0;

function move() {
    start++;
    if(start>images.length){
        start=0;
    }
    moves.style.transform=`translatex(${-start*80}%)`;
}
setInterval(move,2000);
