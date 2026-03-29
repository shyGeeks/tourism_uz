let lectureL=[
    {
        id: 0,
        title:"Maruza ",
        link: "sourses/books/Maruza/1.pdf",
    },
    {
        id: 1,
        title:"Maruza ",
        link: "sourses/books/Maruza/2.pdf",
    },
    {
        id: 2,
        title:"Maruza ",
        link: "sourses/books/Maruza/3.pdf",
    },
    {
        id: 3,
        title:"Maruza ",
        link: "sourses/books/Maruza/4.pdf",
    },
    {
        id: 4,
        title:"Maruza ",
        link: "sourses/books/Maruza/5.pdf",
    },
    {
        id: 5,
        title:"Maruza ",
        link: "sourses/books/Maruza/6.pdf",
    },
    {
        id: 6,
        title:"Maruza ",
        link: "sourses/books/Maruza/7.pdf",
    },
    {
        id: 7,
        title:"Maruza ",
        link: "sourses/books/Maruza/8.pdf",
    },
    {
        id: 8,
        title:"Maruza ",
        link: "sourses/books/Maruza/9.pdf",
    },
    {
        id: 9,
        title:"Maruza ",
        link: "sourses/books/Maruza/10.pdf",
    }
]

const lectureBtns=document.querySelector("#lectureLink");
const objL=document.querySelector("#objL");
const count=document.querySelector("#lecCount");
$(document).ready(() => {
    count.textContent=`${lectureL.length} ta`
    for(let i=0;i<lectureL.length;i++){
        lectureBtns.innerHTML+=`<button 
                                    type="button" 
                                    class="btn btn-lg btn-primary w-100 text-start mb-2 mt-2" 
                                    style="font-size: 13px; height:50px;"
                                    onclick="setLink(${i})">
                                    ${i+1}-${lectureL[i].title}
                                </button>`;
    }
});

function setLink(i){
    objL.data=lectureL[i].link;
}