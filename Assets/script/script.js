var timer = 70;
var score = 0;
var questions = 0;

var header = document.querySelector("#header");
var time = document.querySelector("#time");
var finalScore = document.querySelector("#final-score");
var inputField = document.getElementById("initial");
var quizChallenge = document.querySelector("#main-screen");
var firstQuestion = document.querySelector("#first-question");
var secondQuestion = document.querySelector("#second-question");
var thirdQuestion = document.querySelector("#third-question");
var fourthQuestion = document.querySelector("#fourth-question");
var fifthQuestion = document.querySelector("#fifth-question");
var enterInitials = document.querySelector("#enter-initials");
var highScore = document.querySelector("#display-highScore");


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timer--;
      time.textContent = "Time: "+timer;
  
      if(timer === 0 || questions === 5) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

document.addEventListener("click", function(event){
    var child = event.target;
    if(child.matches("#start-quiz")){
        setTime();
        quizChallenge.setAttribute("style", "display: none;");
        firstQuestion.setAttribute("style", "display: flex;");
        console.log("displaying first question");
    }
    if(child.matches(".first-question")){
        console.log("first answer clicked");
        questions++;
        var answer = child.dataset.answer;
        if(answer == "correct"){
            score+=10;
        }else{
            timer-=10;
        }
        console.log(score);
        firstQuestion.setAttribute("style", "display:none;");
        secondQuestion.setAttribute("style", "display:flex;");
    }
    if(child.matches(".second-question")){
        console.log("second answer clicked");
        questions++;
        var answer = child.dataset.answer;
        if(answer == "correct"){
            score+=10;
        }else{
            timer-=10;
        }
        console.log(score);
        secondQuestion.setAttribute("style", "display:none;");
        thirdQuestion.setAttribute("style", "display:flex;");
    }
    if(child.matches(".third-question")){
        console.log("third answer clicked");
        questions++;
        var answer = child.dataset.answer;
        if(answer == "correct"){
            score+=10;
        }else{
            timer-=10;
        }
        console.log(score);
        thirdQuestion.setAttribute("style", "display:none;");
        fourthQuestion.setAttribute("style", "display:flex;");
    }
    if(child.matches(".fourth-question")){
        console.log("fourth answer clicked");
        questions++;
        var answer = child.dataset.answer;
        if(answer == "correct"){
            score+=10;
        }else{
            timer-=10;
        }
        console.log(score);
        fourthQuestion.setAttribute("style", "display:none;");
        fifthQuestion.setAttribute("style", "display:flex;");
    }
    if(child.matches(".fifth-question")){
        console.log("fifth answer clicked");
        questions++;
        var answer = child.dataset.answer;
        if(answer == "correct"){
            score+=10;
        }else{
            timer-=10;
        }
        console.log(score);
        fifthQuestion.setAttribute("style", "display:none;");
        enterInitials.setAttribute("style", "display:flex;");
        finalScore.textContent = "Your final score is "+ score;
    }
    if(child.matches("#submit")){
        console.log("submit button clicked");
        var value = inputField.value;
        localStorage.setItem("initial", value);
        localStorage.setItem("score", score);
        enterInitials.setAttribute("style", "display:none;");
        header.setAttribute("style", "display:none;");
        highScore.setAttribute("style", "display:flex;");
    }
    if(child.matches("#go-back")){
        timer = 70;
        questions = 0;
        score = 0;
        highScore.setAttribute("style", "display:none;");
        quizChallenge.setAttribute("style", "display:flex;");
    }

});

