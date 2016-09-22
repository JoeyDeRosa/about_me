'use strict';
var qArray = [];
function Question(qPrompt, alert1, alert2, answer, wAnswer) {
  this.qPrompt = qPrompt;
  this.alert1 = alert1;
  this.alert2 = alert2;
  this.answer = answer;
  this.wAnswer = wAnswer;
  qArray.push(this);
}
var qIndex = 0;
var totalRight = 0;
var totalWrong = 0;
var games = 0;

var user = prompt('What is your name');

do {
  
}
  var right = 0;
  var wrong = 0;
  games++;

  function askQuestion(qArray) {
    var a = prompt(qArray[qIndex].qPrompt).toLowerCase();
    if(a === qArray[qIndex].answer || a === qArray[qIndex].answer.charAt(0)) {
      alert(qArray[qIndex].alert1);
      console.log('user got the ' + (qIndex + 1) + 'question right.');
      return true;
    } else if(a === qArray[qIndex].wAnswer || a === qArray[qIndex].wAnswer.charAt(0)) {
      alert(qArray[qIndex].alert2);
      console.log(user + ' got the ' + (qIndex + 1) + 'question wrong.');
      return false;
    } else {
      alert('I\'m afraid that is not an answer, try again.');
      console.log('user entered an invalid responce.');
    }
  }

alert('Wow, that was fun!');
alert('this game you got ' + right + ' right and ' + wrong + ' wrong.');
alert('In ' + games + ' game(s) you have ' + totalRight + ' right and ' + totalWrong + ' wrong.');

var x = 1;
while(x == 1) {
  a = prompt('Would you like to play again?');
  if(question === 'y' || question === 'yes') {
    alert('Awsome lets get started!');
    console.log('user wants to play again.');
    x++;
    qIndex = 0;
  } else if (question === 'n' || question === 'no') {
    alert('That\'s to bad.');
    x++;
    playing = 0;
    console.log('user does not want to play again.');
  } else {
    alert('I\'m afraid that is not an answer, try again.');
    console.log('user entered an invalid responce.');
  }
}

alert('Farewell, I hope you enjoy the site.');
