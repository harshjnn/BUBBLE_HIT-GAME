var Timer = 60;
var score =0;
var Hitrn = 0;



function updatesocer(){
    score += 10;
    document.querySelector("#update").textContent =score;
    
}

function makebubble(){
    var clutter ="";
    
for(var i=1;i<=240;i++){
     var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pannelbuttom").innerHTML =clutter;
}

function getnewhit(){
    Hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent =Hitrn;
}
function runtimer(){
    var timerint =  setInterval(function(){
        if(Timer>0){
          Timer --;
        document.querySelector("#timervalue").textContent = Timer;    
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pannelbuttom").innerHTML=`<h1>Game Over</h1>`;
        }
      
    },1200)

}  

// this is use add eventlisteneer to the bubbles because we need to get the value or num
//of the bubble to compare it with the Hit value to update score if click correctly
//NUMBER() this help to convert the string of number writen by the .Targert/,textcontent 
//uses because to compare the int value of the hit we need to have the int or num value 
//of the bubble not the string value ........

document.querySelector("#pannelbuttom").addEventListener("click",function(detailOfclick){
    var clickednum = Number(detailOfclick.target.textContent);
    if (clickednum === Hitrn){
        updatesocer();
         getnewhit();
        //we reccall this because we need to change thr hit valur after click hit
        makebubble();
        

    }
        // alert("running");

    })


runtimer();
getnewhit();
makebubble();

