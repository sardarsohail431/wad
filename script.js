var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "Then",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
},{
    question : "what is the capital of pakistan",
    choices : [ "Changa Manga",
        "Patozki",
        "Kahna",
        "Islamabad"],
    correctAnswer : 3
},{
    question : "current prime mininter of pakistan?",
    choices : [ "Sheikh Rasheed",
        "khadim hussain rizvi urf D",
        "CH Shujaat hussain",
        "Imran Khan"],
    correctAnswer : 3
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
    /*Write your code here */
    /*Is used almost every time you want to manipulate, or get info from, an element on your document.*/


        var n = document.querySelector('input[name="val"]:checked');
    if (n == null)
    /* if nothing is selected then show message */
    {
        document.getElementById("quiz-message").style.display = 'block';/* get elements in html using id */
        document.getElementById("quiz-message").innerText = 'Please Select an answer';/* this will select correct anser using getelementbyid*/
        return;
    }
    /*we can use inner html instead of innertext. it will be able to get inline elements in inner html.In inner text we can get all text values*/
    document.getElementById("quiz-message").style.display = 'none';/* hiding message*/
    if (n.value == questions[currentQuestion].correctAnswer){
        /*count correct */
        correctAnswers++;
    }
    if (currentQuestion == questions.length - 1)
    {
        displayScore();/*display fuction called*/
        document.getElementById("next-btn").innerHTML = "Start Again";/*move to next button to start again */
        currentQuestion=0;/* restart*/
        quizOver = true;/*tells that quiz is done*/
        return;
    }
    currentQuestion++;/*jimps to next question*/
    if (quizOver)
    {
        quizOver = false;
        resetQuiz();/*reset to start again quiz*/
        document.getElementById("next-btn").innerHTML = "Next Question";/*checking value and moving to next question*/
    }
    displayCurrentQuestion();/*function called*/

}

function displayCurrentQuestion() {
    /*Write your code here */
    document.getElementById("question").innerHTML = "";/* sets or returns the HTML content (inner HTML) of an element.*/
    var ul = document.getElementById("choice-list").innerHTML = "";
    document.getElementById("question").innerText = questions[currentQuestion].question;/*it changes values of id namesd question to question,question is
     a variable which contain different questions*/
    var ul = document.getElementById("choice-list");
    for (var i = 0; i < questions[currentQuestion].choices.length; i++){/*a loop to jump to next question*/
        var li = document.createElement("li");
        li.innerHTML = "<input type='radio' id=radio-"+i+" name='val' value='"+i+"'>"+questions[currentQuestion].choices[i]+"</input>";
        /*this is used to display bullets for option that a user can select*/
        ul.appendChild(li);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}