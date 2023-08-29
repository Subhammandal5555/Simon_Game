
let gameSeq=[];
let userSeq=[];

let btns=["st","nd","rd","th"];
let start=false;
let h2=document.querySelector("h2");
let level=0;
let highsc=0;
let h4=document.querySelector("h4");
document.addEventListener("click", function () {
    if(start == false){
        console.log("Game Started");
        start=true;
        levelUp();
    }
})
function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},500);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let random=Math.floor(Math.random()*3);
    let randColour=btns[random];
    let randbtn=document.querySelector(`.${randColour}`);
    gameSeq.push(randColour);
    btnFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,500);
        }
    }else{
        alert(`Game Over & your Score was ${level}`);

        if(level>highsc){
            highsc=level;
        }
        h4.innerText=` High Score ${highsc}`;
    reset();
    }
}

function btnpress(){
    let btn= this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
let help=document.querySelector("p");
let about=document.getElementById("explain");
let main=document.getElementsByClassName("main");
help.addEventListener("click",function(){
    about.classList.add("help");
})
let close=document.querySelector("button");
close.addEventListener("click",function(){
 
 about.classList.remove("help");
})
