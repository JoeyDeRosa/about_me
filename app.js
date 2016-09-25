'use strict';

function Question(qPrompt, alert1, alert2, alert3, answer, wAnswer, numOfG) {
  this.qPrompt = qPrompt;
  this.alert1 = alert1;
  this.alert2 = alert2;
  this.alert3 = alert3;
  this.answer = answer;
  this.wAnswer = wAnswer;
  this.numOfG = numOfG;
}

var qIndex = 0;
var totalRight = 0;
var totalWrong = 0;
var right = 0;
var wrong = 0;
var games = 1;

var user = prompt('What is your name');
var qArray = [
  new Question('Hi ' + user + ', do you want to play a guessing game y/n.', 'Fantastic lets get started!', 'Well that is a bummer, that\'s all this site was made for.', false, 'yes', 'no', false),
  new Question('First question, was I, Joey DeRosa, born in Washington? y/n', 'That is correct, congratulations! I was born in Tacoma Washington to be exact.', 'Ohhhhhh, that is unfortunatly wrong. I was born in Tacoma Washington.', false, 'yes', 'no', false),
  new Question('Second qeustion, is pizza my favorite food? y/n', 'Wow, you saw through my trick question. Very impressive.', 'HAHA, trick question. All food is delicious and how dare you expect me to pick a favorite.', false, 'no', 'yes', false),
  new Question('Third question, is the car I drive a yellow 2002 ford escape. y/n', 'Impressive, I do drive a yellow 2002 ford escape. Not sure how you could possibly know that considering I take the bus here.', 'I\'m sorry but that is incorect. I was hoping the detail of the question would give away the answer but i guess not.', false, 'yes', 'no', false),
  new Question('Fourth question, is the computer i use for code fellows a Mac. y/n', 'Very observent of you, while my laptop is silver like a Mac it is in fact a Google Chromebook running Ubuntu', 'That answer is not correct. While my laptop is silver like a Mac it is in fact a Google Chromebook running Ubuntu.', false, 'no', 'yes', false),
  new Question('Fifth question, and this is a tough one, is my hair red. y/n', 'Impossible! how could you possibly have known that, I didn\'t think anyone would know that.', 'You got the last question wrong, but don\'t worry I didn\'t expect anyone to get this question right.', false, 'yes', 'no', false),
  new Question('Sixth question, can you guess my favorite number, you have four tries.', 'Nicely done, my favorite number is 11.', 'That guess was too ', 'I\'m afraid you never guessed my favorite number of ', 11, false, 4),
  new Question('Seventh question, can you guess one of my favorite bands. You have six tries.', 'Nicely done, one of my favorite bands is/are ', 'Nope, that is not one of my top five favorite bands. You have ', 'I\'m afraid you never guessed one of my favorite bands. They are ',['the white stripes', 'the rolling stones', 'tigers jaw', 'nirvana', 'slipknot'], false, 6),
  new Question('Would you like to play again? y/n', 'Awsome lets get started!', 'That\'s to bad.', false, 'yes', 'no', false)
];

var playing = yesNoQuestion(qArray);
++qIndex;
while(playing) {
  var answer;
  if(qIndex === (qArray.length - 1)) {
    alert('Wow, that was fun!');
    alert('this game you got ' + right + ' right and ' + wrong + ' wrong.');
    alert('In ' + games + ' game(s) you have ' + totalRight + ' right and ' + totalWrong + ' wrong.');
    playing = yesNoQuestion(qArray);
    ++games;
    answer = 0;
    right = 0;
    wrong = 0;
    qIndex = 0;
  } else if(qArray[qIndex].numOfG !== false) {
    answer = multiGuessQuestion(qArray);
  } else {
    answer = yesNoQuestion(qArray);
  }
  ++qIndex;
  if(answer === true) {
    ++right;
    ++totalRight;
  } else if(answer === false) {
    ++wrong;
    ++totalWrong;
  }
}

function yesNoQuestion(qArray) {
  var loop = true;
  while(loop) {
    var a = prompt(qArray[qIndex].qPrompt).toLowerCase();
    if(a === qArray[qIndex].answer || a === qArray[qIndex].answer.charAt(0)) {
      alert(qArray[qIndex].alert1);
      console.log(user + ' got the ' + (qIndex + 1) + 'question right.');
      loop = false;
      return true;
    } else if(a === qArray[qIndex].wAnswer || a === qArray[qIndex].wAnswer.charAt(0)) {
      alert(qArray[qIndex].alert2);
      console.log(user + ' got the ' + (qIndex + 1) + 'question wrong.');
      loop = false;
      return false;
    } else {
      alert('I\'m afraid that is not an answer, try again.');
      console.log(user + ' entered an invalid responce.');
    }
  }
}

function multiGuessQuestion(qArray) {
  for(var i = 0; i < qArray[qIndex].numOfG; i++) {
    var addOn = '';
    var a = prompt(qArray[qIndex].qPrompt).toLowerCase();
    if(Array.isArray(qArray[qIndex].answer) === true) {
      for(var x = 0 ; x < qArray[qIndex].answer.length; x++) {
        if(a === qArray[qIndex].answer[x]) {
          addOn = a;
          alert(qArray[qIndex].alert1 + addOn);
          i = qArray[qIndex].numOfG;
          console.log(user + ' got the ' + qIndex + ' question right.');
          return true;
        }
      }
    } else if(qArray[qIndex].answer !== NaN) {
      if(+a === qArray[qIndex].answer) {
        alert(qArray[qIndex].alert1);
        i = qArray[qIndex].numOfG;
        console.log(user + ' got the ' + qIndex + ' question right.');
        return true;
      } else if(parseFloat(a) < qArray[qIndex].answer){
        addOn = 'low, ';
      } else {
        addOn = 'high, ';
      }
    }
    if(i < qArray[qIndex].numOfG - 1) {
      alert(qArray[qIndex].alert2 + addOn + ((qArray[qIndex].numOfG - 1) - i) + ' try(s) left.');
    } else {
      alert(qArray[qIndex].alert3 + qArray[qIndex].answer);
      console.log(user + ' got the ' + qIndex + ' question wrong.');
      return false;
    }
  }
}

alert('Farewell, I hope you enjoy the site.');
