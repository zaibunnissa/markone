var readlineSync = require('readline-sync');
var userName = readlineSync.question("Hello, May I know your name? ");
console.log("                                                 ");

console.log("**************************************************");

console.log("welcome " + userName + " to Do you know about the NEOG camp!");
console.log("**************************************************");
console.log("                                                 ")
console.log("Here each correct answer will fetch you +2 score, lets begin the quiz now. All the best!");
console.log("                                                 ")

var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("you are right!");
    score = score + 2;
  } else {
    console.log("you are wrong!" + "the correct answer is ", answer);
  }
  console.log("your score is ", score);
  console.log("---------------------------------")
}
var questions = [{
  question: "1.Who is hosting the NEOG camp? ",
  answer: "Tanay pratap"
},
{
  question: "2.how many levels does the camp have? ",
  answer: "2",
},
{
  question: "3.The level zero is for absolute beginners![yes/no]",
  answer: "yes"
},
{
  question: "4.The level one of NEOG camp is free of cost and open to all.[True/false] ",
  answer: "false"
},

{
  question: "5.There is a developer community which helps to clear doubts regarding NEOG camp and related things, what is the name of the platform? ",
  answer: "Discord"
}]
for (var i = 0; i < questions.length; i++) {
  var currentQues = questions[i];
  play(currentQues.question, currentQues.answer)
}
console.log("Yay! you scored : ", score);
console.log("                         ");
console.log("Check out the high score ");
var highScore = [{
  name: "Isaac",
  score: "10"
},
{
  name: "Neha",
  score: "10"
}]
for (var i = 0; i < highScore.length; i++) {
  var highScorer = highScore[i];
  console.log(highScorer.name);
  console.log(highScorer.score);
}
console.log("If you have beaten the high score share screenshot, we will update the High scores");
console.log("Thank you");