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
    //Maybe redifine questionTime in here so this can be reused... Or maybe only define question time in here
    clearInterval(intervalID);
    intervalID = setInterval(decrement,1000);
}
function decrement(){
    questionTime--;

    //Need to display timer to a div/span here
    if(questionTime===0){
        loss();
    }

}
function loss(){

}

function question1(){
    var question1="What is the name of the programmer?"
    correctAnswer="Jamie Barton";
    incorrect1="Jeff";
    incorrect2="Eric";
    incorrect3="Bob";


}