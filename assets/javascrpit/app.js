
//Should just be answer 1-4, so the correct answer isnt always in the same spot.....  Also make the answers an object inside the question object
var question1 = {
    rightAnswer:"Sand",
    question: "What is the surname given to the bastards of Dorne?",
    ans1: "Snow",
    ans2: "Rivers",
    ans3: "Sand",       
    ans4: "Mountain"
};
var question2 = {
    question: "'The Mountain' is the nickname for which character?",
    rightAnswer:"Gregor Clegane",
    ans1: "Oberyn Martell",
    ans2: "Sandor Clegane",
    ans3: "Joffrey Baratheon",  
    ans4: "Gregor Clegane"
};
var question3 = {
    question: "Who was the head of the Kings Guard at the beggining of Game of Thrones?",
    rightAnswer:"Ser Barristan Selmy",
    ans1: "Ser Jamie Lannister",
    ans2: "Ser Barristan Selmy",
    ans3:"Lord Eddard Stark",     
    ans4: "Bran the Broken"
};

var question4 = {
    question: "Who was Margaery Tyrell's first husband",
    rightAnswer:"Renly Baratheon",
    ans1:"Renly Baratheon", 
    ans2: "Stannis Baratheon",
    ans3: "Tommen Baratheon",    
    ans4:"Joffrey Baratheon"
};
var question5 = {
    question: "Who is known as the /'The Kind Beyond the Wall/'?",
    rightAnswer: "Mance Rayder",
    ans1: "The Night King",
    ans2:"Mance Rayder",
    ans3: "Tormund Giantsbane",   
    ans4: "Jon Snow"

};
var question6 = {
    question: "How many times has Sansa Stark been married?",
    rightAnswer: "2",
    ans1:"2",
    ans2: "0",
    ans3: "5",     
    ans4: "1"

};
var question7 = {
    question: "Who was the Mad King's first born son?",
    rightAnswer: "Rhaegar Targaryen",
    ans1:"Viserys Targaryen",
    ans2: "Agon Targaryen",
    ans3: "Aemon Targaryen",   
    ans4: "Rhaegar Targaryen"

      
 
};
var question8 = {
    question: "Who delivered the fatal blow to The King in the North, Robb Stark?",
    rightAnswer:"Roose Bolton",
    ans1: "Walder Frey",
    ans2: "Ramsey Bolton",
    ans3:"Roose Bolton",    
    ans4:"Theon Grejoy"
};
var question9 = {
    question: "Which rival king tried to take King's Landing during the battle of the Blackwater?",
    rightAnswer:"Stannis Baratheon",
    ans1: "Balon Greyjoy",
    ans2: "Stannis Baratheon",
    ans3:"Renly Baratheon",    
    ans4:"Robb Stark"

    
};
var question10 = {
    question: "What city did Samwell Tarly travel to in order to train as a maester?",
    rightAnswer: "Oldtown",
    ans1:"Sunspear",
    ans2: "Gulltown",
    ans3: "Highgarden",      
    ans4: "Oldtown"

};
//Variables
var questionTime = 30;
var intervalID;
var questionCounter = 0;
var score = 0;
var objArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];


document.getElementById("startDiv").innerHTML = "Start!";
document.getElementById("startDiv").addEventListener("click", function () {
    document.getElementById("startDiv").outerHTML = "";
    question(objArray, questionCounter);
});


//TIMER FUNCTION
function timer() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
}
function decrement() {
    questionTime--;

    if (questionTime === 0) {
        alert("Time's up!");
        loss();
    }

}
function loss() {
    document.getElementById("gameContent").innerHTML ="";
    var lossScreen = document.createElement("div");
    lossScreen.textContent = "Incorrect, the right answer to " + objArray[questionCounter].question + " is " + objArray[questionCounter].rightAnswer;
    lossScreen.setAttribute("class","winLossScreen")
    document.getElementById("gameContent").append(lossScreen);
    questionCounter++;
    
    setTimeout(function(){
        question(objArray,questionCounter);
    }, 5000);

}
function win() {
    document.getElementById("gameContent").innerHTML="";
    var winScreen = document.createElement("div");
    winScreen.textContent = "Correct! The answer to " + objArray[questionCounter].question + " is " + objArray[questionCounter].rightAnswer;
    winScreen.setAttribute("class","winLossScreen")
    document.getElementById("gameContent").append(winScreen);
    questionCounter++;
    score++;
    setTimeout(function(){
        question(objArray,questionCounter);

    },5000)



}
//Puts the questions out on the screen
function question(array, counter) {
    //Clears div
    document.getElementById("gameContent").innerHTML="";
    //Finishes the game
  
    if(array.length ==counter){

        finishingScreen();
        
    }
    else{
    questionTime=30;
    timer();
    //Need to add clicker events to all of these
    var currentQuestion = document.createElement("div");
    currentQuestion.textContent = array[counter].question;
    currentQuestion.setAttribute("class", "currentQuestion");
    document.getElementById("gameContent").appendChild(currentQuestion);


    var answer1 = document.createElement("div");
    answer1.textContent = array[counter].ans1;
    answer1.setAttribute("class", "answers");
    answer1.addEventListener("click", function(){
        if(array[counter].rightAnswer === array[counter].ans1){
            win();
        }
        else{
            loss();
        }

    });
    document.getElementById("gameContent").append(answer1);

    var answer2 = document.createElement("div");
    answer2.textContent = array[counter].ans2;
    answer2.setAttribute("class", "answers");
    answer2.addEventListener("click", function(){
        if(array[counter].rightAnswer === array[counter].ans2){
            win();
        }
        else{
            loss();
        }

    });
    document.getElementById("gameContent").append(answer2);

    var answer3 = document.createElement("div");
    answer3.textContent = array[counter].ans3;
    answer3.setAttribute("class", "answers");
    answer3.addEventListener("click", function(){
        if(array[counter].rightAnswer === array[counter].ans3){
            win();
        }
        else{
            loss();
        }

    });
    document.getElementById("gameContent").append(answer3);

    var answer4 = document.createElement("div");
    answer4.textContent = array[counter].ans4;
    answer4.setAttribute("class", "answers");
    answer4.addEventListener("click", function(){
        if(array[counter].rightAnswer === array[counter].ans4){
            win();
        }
        else{
            loss();
        }

    });
    document.getElementById("gameContent").append(answer4);

}
}
 


function finishingScreen(){
    questionTime=-1000;
    document.getElementById("gameContent").innerHTML= "";
    var finalScreen = document.createElement("div");
    finalScreen.textContent = "Score: " + score + "/10";
    document.getElementById("gameContent").append(finalScreen);
}



    //Wanted to create answer divs using loop, but got lost...
    //Buggy for now
    // for (var key in array[counter]) {
    //     console.log(array[counter][key])

    //     if (!(array[counter].question)=== key){
    //         var answer = document.createElement("div");
    //         answer.textContent = array[counter][key];
    //         answer.setAttribute("class", "answers");
    //         document.getElementById("gameContent").appendChild(answer);
    //     }
    // }