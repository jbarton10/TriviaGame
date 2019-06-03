var score=0;
var correctAnswer;
var incorrect1;
var incorrect2;
var incorrect3;
var intervalID;
var questionTime=30;


document.getElementById("startDiv").innerHTML = "Start!";
document.getElementById("startDiv").addEventListener("click",question1);



function timer(){
    console.log("we here");
    document.getElementById("startDiv").outerHTML = "";
    //Maybe redifine questionTime in here so this can be reused... Or maybe only define question time in here
    clearInterval(intervalID);
    intervalID = setInterval(decrement,1000);
}
function decrement(){
    questionTime--;

    //Need to display timer to a div/span here
    //document.getElementById("startDiv").textContent= questionTime;
    if(questionTime===0){
        loss();
    }

}
function loss(){


}
function win(){


}

function question1(){
    timer();
    var currentQuestion= document.createElement("div");
    currentQuestion.textContent = "What is the name of the programmer?"
    currentQuestion.setAttribute("class", "currentQuestion");
    document.getElementById("gameContent").appendChild(currentQuestion);
    
    correctAnswer="Jamie Barton";
    incorrect1="Jeff";
    incorrect2="Eric";
    incorrect3="Bob";


}