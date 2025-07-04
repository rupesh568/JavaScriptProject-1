let boxes=document.querySelectorAll(".box");
let button=document.querySelector(".resetbtn");


let turnX=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,7],
    [2,4,6],
];


boxes.forEach((val)=>{
    val.addEventListener("click",(e)=>{
       if(turnX){
        val.innerText="X";
        turnX=false;

       }else{
        val.innerText="O";
        turnX=true;
       }

    })
})