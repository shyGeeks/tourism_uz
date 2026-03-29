let staskL=[
    {
        id: 0,
        title:"Amaliy T 1",
        link: "sourses/books/amaliyot/1.pdf",
    },
    {
        id: 1,
        title:"Amaliy T 2",
        link: "sourses/books/amaliyot/2.pdf",
    },
    {
        id: 2,
        title:"Amaliy T 3",
        link: "sourses/books/amaliyot/3.pdf",
    },
    {
        id: 3,
        title:"Amaliy T 4",
        link: "sourses/books/amaliyot/4.pdf",
    },
    {
        id: 4,
        title:"Amaliy T 5",
        link: "sourses/books/amaliyot/5.pdf",
    },
    {
        id: 5,
        title:"Amaliy T 6",
        link: "sourses/books/amaliyot/6.pdf",
    },
    {
        id: 6,
        title:"Amaliy T 7",
        link: "sourses/books/amaliyot/7.pdf",
    },
    {
        id: 7,
        title:"Amaliy T 8",
        link: "sourses/books/amaliyot/8.pdf",
    },
    {
        id: 8,
        title:"Amaliy T 9",
        link: "sourses/books/amaliyot/9.pdf",
    },
    {
        id: 9,
        title:"Amaliy T 10",
        link: "sourses/books/amaliyot/10.pdf",
    }
    
]

let stasksBtns=document.querySelector("#stasksLink");
let objT=document.querySelector("#objL");
let countT=document.querySelector("#taskCount");

// countT.textContent=`${staskL.length} ta`;
// for(let k=0;k<staskL.length;k++){
    
// }

$(document).ready(() => {
    countT.textContent=`${staskL.length} ta`
    for(let i=0;i<staskL.length;i++){
        stasksBtns.innerHTML+=`<button 
                                    type="button" 
                                    class="btn btn-lg btn-primary w-100 text-start mb-2 mt-2" 
                                    style="font-size: 14px; height:50px;"
                                    onclick="setLink(${i})">
                                    ${staskL[i].title}
                                </button>`;
    }
});
function setLink(i){
    objT.data=staskL[i].link;
}