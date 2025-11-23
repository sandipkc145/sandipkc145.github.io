var firstRanNumber= (Math.floor((Math.random()*6)+1));
var secondRanNumber= (Math.floor((Math.random()*6)+1));



function refresh(){
    if(firstRanNumber==1)
    {
        document.querySelector(" img "). setAttribute("src","1.png");
    }
    else if(firstRanNumber==2){
        document.querySelector(" img "). setAttribute("src","2.png");

    }
    else if(firstRanNumber==3){
        document.querySelector(" img "). setAttribute("src","3.png");

    }
    else if(firstRanNumber==4){
        document.querySelector(" img "). setAttribute("src","4.png");

    }
    else if(firstRanNumber==5){
        document.querySelector(" img "). setAttribute("src","5.png");

    }
    else if(firstRanNumber==6){
        document.querySelector(" img "). setAttribute("src","6.png");

    }
}
refresh();
function refresh1(){

 if(secondRanNumber==1)
    {
        document.getElementById("simage"). setAttribute("src","1.png");
    }
    else if(secondRanNumber==2){
        document.getElementById("simage"). setAttribute("src","2.png");

    }
    else if(secondRanNumber==3){
        document.getElementById("simage"). setAttribute("src","3.png");

    }
    else if(secondRanNumber==4){
        document.getElementById("simage"). setAttribute("src","4.png");

    }
    else if(secondRanNumber==5){
        document.getElementById("simage"). setAttribute("src","5.png");

    }
    else if(secondRanNumber==6){
        document.getElementById("simage"). setAttribute("src","6.png");

    }
}
refresh1();


function win(){
   
    if(firstRanNumber==secondRanNumber){
        document.querySelector(".screen").innerText="It's a tie game";

    }
    else if(firstRanNumber>secondRanNumber)
    {
        document.querySelector(".screen").innerText="Player1 wins this game";
    }
    else{
        document.querySelector(".screen").innerText="Player2 wins this game";
    }

}
win();
