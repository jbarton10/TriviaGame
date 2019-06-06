
//Should just be answer 1-4, so the correct answer isnt always in the same spot.....  Also make the answers an object inside the question object
var question1 = {
    rightAnswer:"Sand",
    question: "What is the surname given to the bastards of Dorne?",
    ans1: "Snow",
    ans2: "Rivers",
    ans3: "Sand",       
    ans4: "Mountain",
    aArray: ["Snow","Rivers","Sand","Mountain",]
};
var question2 = {
    question: "/'The Mountain/' is the nickname for which character?",
    rightAnswer:"Gregor Clegane",
    ans1: "Oberyn Martell",
    ans2: "Sandor Clegane",
    ans3: "Joffrey Baratheon",  
    ans4: "Gregor Clegane",
    aArray: ["Gregor Clegane","Oberyn Martell","Sandor Clegane","Joffrey Baratheon"]
};
var question3 = {
    question: "Who was the head of the Kings Guard at the beggining of Game of Thrones?",
    rightAnswer:"Ser Barristan Selmy",
    ans1: "Ser Jamie Lannister",
    ans2: "Ser Barristan Selmy",
    ans3:"Lord Eddard Stark",     
    ans4: "Bran the Broken",
    aArray: ["Bran the Broken","Lord Eddard Stark","Ser Barristan Selmy","Ser Jamie Lannister"]
};

var question4 = {
    question: "Who was Margaery Tyrell's first husband",
    rightAnswer:"Renly Baratheon",
    ans1:"Renly Baratheon", 
    ans2: "Stannis Baratheon",
    ans3: "Tommen Baratheon",    
    ans4:"Joffrey Baratheon", 
    aArray:["Joffrey Baratheon","Renly Baratheon","Stannis Baratheon","Tommen Baratheon"]
};
var question5 = {
    question: "Who is known as the /'The Kind Beyond the Wall/'?",
    rightAnswer: "Mance Rayder",
    ans1: "The Night King",
    ans2:"Mance Rayder",
    ans3: "Tormund Giantsbane",   
    ans4: "Jon Snow",
    aArray: ["The Night King","Mance Rayder","Tormund Giantsbane","Jon Snow"]
};
var question6 = {
    question: "How many times has Sansa Stark been married?",
    rightAnswer: "2",
    ans1:"2",
    ans2: "0",
    ans3: "5",     
    ans4: "1",
    aArray: ["2","0","5","1"]
};
var question7 = {
    question: "Who was the Mad King's first born son?",
    rightAnswer: "Rhaegar Targaryen",
    ans1:"Viserys Targaryen",
    ans2: "Agon Targaryen",
    ans3: "Aemon Targaryen",   
    ans4: "Rhaegar Targaryen",
    aArray: ["Viserys Targaryen","Agon Targaryen","Aemon Targaryen","Rhaegar Targaryen"]
      
 
};
var question8 = {
    question: "Who delivered the fatal blow to The King in the North, Robb Stark?",
    rightAnswer:"Roose Bolton",
    ans1: "Walder Frey",
    ans2: "Ramsey Bolton",
    ans3:"Roose Bolton",    
    ans4:"Theon Grejoy",
    aArray:["Roose Bolton","Walder Frey","Theon Grejoy","Ramsey Bolton"]
};
var question9 = {
    question: "Which rival king tried to take King's Landing during the battle of the Blackwater?",
    rightAnswer:"Stannis Baratheon",
    ans1: "Balon Greyjoy",
    ans2: "Stannis Baratheon",
    ans3:"Renly Baratheon",    
    ans4:"Robb Stark",
    aArray:["Stannis Baratheon","Renly Baratheon","Robb Stark","Balon Greyjoy"]
    
};
var question10 = {
    question: "What city did Samwell Tarly travel to in order to train as a maester?",
    rightAnswer: "Oldtown",
    ans1:"Sunspear",
    ans2: "Gulltown",
    ans3: "Highgarden",      
    ans4: "Oldtown",
    aArray: ["Sunspear","Gulltown","Highgarden","Oldtown"]
};
//Variables
var questionTime = 30;
var intervalID;
var questionCounter = 0;
var score = 0;
var objArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];


document.getElementById("startDiv").innerHTML = "Start!";
document.getElementById("startDiv").addEventListener("click", function () {
    question(objArray, questionCounter);
});



function timer() {
    
    console.log("we here");
    document.getElementById("startDiv").outerHTML = "";
    
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
}
function decrement() {
    questionTime--;

    if (questionTime === 0) {
        loss();
    }

}
function loss() {
    questionTime=7;
    document.getElementById("gameContent").innerHTML("");
    var lossScreen = document.createElement("div");
    lossScreen.textContent = "Incorrect, the right answer to " + array[questionCounter].question + " is " + findCorrectAnswer(array[questionCounter]);
    lossScreen.setAttribute("class","winLossScreen")
    questionCounter++;
    question(objArray,questionCounter);

}
function win() {
    questionTime=7;
    document.getElementById("gameContent").innerHTML("");
    var winScreen = document.createElement("div");
    winScreen.textContent = "Correct! The answer to " + array[questionCounter].question + " is " + findCorrectAnswer(array[questionCounter]);
    winScreen.setAttribute("class","winLossScreen")
    questionCounter++;
    score++;
    question(objArray,questionCounter);



}
//Puts the questions out on the screen
function question(array, counter) {
    //Finishes the game
    if(array.length ===counter){
        finishingScreen();
    }

    questionTime=30;
    timer();
    //Need to add clicker events to all of these
    var currentQuestion = document.createElement("div");
    currentQuestion.textContent = array[counter].question;
    currentQuestion.setAttribute("class", "currentQuestion");
    document.getElementById("gameContent").appendChild(currentQuestion);


    var answer1 = document.createElement("div");
    answer1.textContent = array[counter].ans1.answer;
    answer1.setAttribute("class", "answers");
    answer1.addEventListener("click", function(){
        if(array[counter].ans1.correctAnswer){
            win();
        }
        else{
            loss();
        }

    });
    document.getElementById("gameContent").appendChild(answer1);

    var answer2 = document.createElement("div");
    answer2.textContent = array[counter].ans2.answer;
    answer2.setAttribute("class", "answers");
    document.getElementById("gameContent").appendChild(answer2);

    var answer3 = document.createElement("div");
    answer3.textContent = array[counter].ans3.answer;
    answer3.setAttribute("class", "answers");
    document.getElementById("gameContent").appendChild(answer3);

    var answer4 = document.createElement("div");
    answer4.textContent = array[counter].ans4.answer;
    answer4.setAttribute("class", "answers");
    document.getElementById("gameContent").appendChild(answer4);




    

}
//Needs work lmao
function findCorrectAnswer(obj){
    
        
    
}

function finishingScreen(){
    document.getElementById("gameContent").innerHTML("");
    var finalScreen = document.createElement("div");
    finalScreen.textContent = "Score: " + score + "/10";
}




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