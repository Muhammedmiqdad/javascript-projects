const quotes=[
    {
        quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, commodi.",
        author:"Lorem, ipsum."
    },
    {
        quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laboriosam quia consectetur voluptas repellendus aliquam.",
        author:"Lorem, ipsum."
    },
    {
        quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, commodi.",
        author:"Lorem, ipsum."
    },
    {
        quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, commodi.",
        author:"Lorem, ipsum."
    },
    {
        quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laboriosam quia consectetur voluptas repellendus aliquam",
        author:"Lorem, ipsum."
    },
    {
        quote:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi alias hic veritatis dolores.",
        author:"Lorem, ipsum."
    },
    {
        quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, commodi.",
        author:"Lorem, ipsum."
    },
    {
        quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, commodi.",
        author:"Lorem, ipsum."
    }
]

const btn=document.getElementById("generatequote");
const quote=document.getElementById("quote");
const author=document.getElementById("author");

btn.addEventListener("click",()=>{
    let random=Math.floor(Math.random()*quotes.length);
    let generate=quotes[random];
    quote.innerHTML=generate.quote;
    author.innerHTML=generate.author;
})



