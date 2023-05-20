
const menuItem=[
    {
        id:1,
        item:"Food Item1",
        oneLiner:"One:Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet.",
        img:"images/food1.jpg",
        hotel:"Hotel1 name1",
        desc:"One:Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, harum."
    },
    {
        id:2,
        item:"Food Item2",
        oneLiner:"two:Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet.",
        img:"images/food2.jpg",
        hotel:"Hotel2 name2",
        desc:"One:Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, harum."
    },
    {
        id:3,
        item:"Food Item3",
        oneLiner:"three:Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet.",
        img:"images/food3.jpg",
        hotel:"Hotel3 name3",
        desc:"three:Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, harum."
    },
    {
        id:4,
        item:"Food Item4",
        oneLiner:"four:Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet.",
        img:"images/food4.jpg",
        hotel:"Hotel4 name4",
        desc:"four:Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, harum."
    },
    {
        id:5,
        item:"Food Item5",
        oneLiner:"five:Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet.",
        img:"images/food5.jpg",
        hotel:"Hotel5 name5",
        desc:"five:Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, harum."
    }
]

const item=document.getElementById('item');
const oneLiner=document.getElementById('oneLiner');
const img=document.getElementById('img');
const hotel=document.getElementById('hotel');
const desc=document.getElementById('desc');
const prev=document.getElementById('prev');
const random=document.getElementById('random');
const next=document.getElementById('next');



let currentMenu=0;

window.addEventListener('DOMContentLoaded',function(){
    // let menu=menuItem[currentMenu];
    // item.textContent=menu.item;
    // oneLiner.textContent=menu.oneLiner;
    // img.src=menu.img;
    // hotel.textContent=menu.hotel;
    // desc.textContent=menu.desc;
    allMenu(currentMenu);
});

const allMenu=()=>{
    let menu=menuItem[currentMenu];
    item.textContent=menu.item;
    oneLiner.textContent=menu.oneLiner;
    img.src=menu.img;
    hotel.textContent=menu.hotel;
    desc.textContent=menu.desc;
}

//random menu
random.addEventListener('click',()=>{
    currentMenu=Math.floor(Math.random()*menuItem.length);
    allMenu(currentMenu);
});

//prev 

prev.addEventListener('click',()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu=menuItem.length-1;
    }
    allMenu(currentMenu);
});

//next

next.addEventListener('click',()=>{
    currentMenu++;
    if(currentMenu>menuItem.length-1){
        currentMenu=0;
    }
    allMenu(currentMenu);
})


