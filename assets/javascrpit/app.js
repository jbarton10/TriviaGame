
//Should just be answer 1-4, so the correct answer isnt always in the same spot
var question1 = {
    question: "What is the surname given to the bastards of Dorne?",
    ans1: "Snow",
    ans2: "Rivers",
    ans3: "Sand",       //correct
    ans4: "Mountain"
};
var question2 = {
    question: "/'The Mountain/' is the nickname for which character?",
    ans1: "Oberyn Martell",
    ans2: "Sandor Clegane",
    ans3: "Joffrey Baratheon",
    ans4: "Gregor Clegane"      //correct
};
var question3={
    question: "Who was the head of the Kings Guard at the beggining of Game of Thrones?",
    ans1: "Ser Jamie Lannister",
    ans2: "Ser Barristan Selmy",    //correct
    ans3: "Lord Eddard Stark",
    ans4: "Bran the Broken"
};

var question4={
    question: "Who was Margaery Tyrell's first husband",
    ans1: "Renly Baratheon",    //correct
    ans2: "Stannis Baratheon",
    ans3: "Tommen Baratheon",
    ans4: "Joffrey Baratheon"
};
var question5={
    question: "Who is known as the /'The Kind Beyond the Wall/'?",
    ans1: "The Night King",
    ans2:"Mance Rayder",    //correct
    ans3:"Tormund Giantsbane",
    ans4:"Jon Snow"
};
var question6={
    question: "How many times has Sansa Stark been married?",
    ans1:"2",   //correct
    ans2:"0",
    ans3:"5",
    ans4:"1"
};
var question7={
    question: "Who was the Mad King's first born son?",
    ans1: "Viserys Targaryen",
    ans2:"Agon Targaryen",
    ans3: "Aemon Targaryen",
    ans4: "Rhaegar Targaryen"   //correct
};
var question8={
    question:"Who delivered the fatal blow to The King in the North, Robb Stark?",
    ans1: "Walder Frey",
    ans2:"Ramsey Bolton",
    ans3:"Roose Bolton",    //Correct
    ans4:"Theon Grejoy"
};
var question9={
    question: "Which rival king tried to take King's Landing during the battle of the Blackwater?",
    ans1: "Stannis Baratheon",  //correct
    ans2:"Renly Baratheon",
    ans3:"Robb Stark",
    ans4:"Balon Greyjoy"
};
var question10={
    question:"What city did Samwell Tarly travel to in order to train as a maester?",
    ans1:"Sunspear",
    ans2:"Gulltown",
    ans3:"Highgarden",
    ans4:"Oldtown"  //correct
};
//This should probably be in timer()
var questionTime=30;
var intervalID;
var questionCounter = 0;
var score=0;
var objArray = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10];


document.getElementById("startDiv").innerHTML = "Start!";
document.getElementById("startDiv").addEventListener("click",function(){
    question(objArray,questionCounter);
});



function timer(){
    questionTime=30;
    console.log("we here");
    document.getElementById("startDiv").outerHTML = "";
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
function win(){


}
//Make questions objects
function question(array, counter){
    timer();
    var currentQuestion= document.createElement("div");
    currentQuestion.textContent = array[counter].question;
    currentQuestion.setAttribute("class", "currentQuestion");
    document.getElementById("gameContent").appendChild(currentQuestion);
    


    //Should make this with a for loop
    var answer1= document.createElement("div");
    answer1.textContent = array[counter].ans1;
    answer1.setAttribute("class","answers");
    document.getElementById("gameContent").appendChild(answer1);

    var answer2= document.createElement("div");
    answer2.textContent = array[counter].ans2;
    answer2.setAttribute("class","answers");
    document.getElementById("gameContent").appendChild(answer2);

    var answer3= document.createElement("div");
    answer3.textContent = array[counter].ans3;
    answer3.setAttribute("class","answers");
    document.getElementById("gameContent").appendChild(answer3);

    var answer4= document.createElement("div");
    answer4.textContent = array[counter].ans4;
    answer4.setAttribute("class","answers");
    document.getElementById("gameContent").appendChild(answer4);


    
    
    counter++;
    console.log(counter);
}