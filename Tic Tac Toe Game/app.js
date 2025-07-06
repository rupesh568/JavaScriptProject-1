let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector(".resetbtn");
let newgamebtn=document.querySelector(".newgamebtn");
let messageContainer=document.querySelector(".msg-container");
let accessMsg=document.querySelector("#msg")




let turnX=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let count=0;
boxes.forEach((val)=>{
    val.addEventListener("click",(e)=>{
    
       if(turnX){
        val.innerText="X";
        turnX=false;

       }else{
        val.innerText="O";
        turnX=true;
       }
       val.disabled=true;
       checkWinner();
       count++;
    })
})

const resetGame=()=>{
    turnX=true;
    boxenable();
    messageContainer.classList.add("hide");


}

const boxenable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";


    }
}

const stop=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}
const checkWinner=()=>{
    for(let patterns of winPatterns){
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText);
        valpos1=boxes[patterns[0]].innerText;
        valpos2=boxes[patterns[1]].innerText;
        valpos3=boxes[patterns[2]].innerText;

        if(valpos1!="" && valpos2!="" && valpos3!=""){
            if(valpos1===valpos2 && valpos2===valpos3){
                let win=`Congratulations ,Winner is ${valpos1}`;
                messageContainer.classList.remove("hide");
                accessMsg.innerText=win;
                stop();
            
                

                
            }
            else{
                count=9;
                accessMsg.innerText="Draw";
            } 
        }
    }
}
 
let accessH1=document.querySelector("h1");
accessH1.classList.add("h1");


newgamebtn.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);
