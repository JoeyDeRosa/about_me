'use strict';
var playing = 0;
var intro = 1;
while(intro == 1) {
  var play = prompt('Do you want to play a guessing game y/n.').toLowerCase();
  if(play == 'y' || play == 'yes') {
    alert('Fantastic lets get started!');
    alert('I am pleased to welcome you to this fantastic game all about me, your score will be tracked and you can play as many times as you like.');
    playing = 1;
    intro = 0;
    console.log('user wants to play.');
  } else if (play == 'n' || play == 'no') {
    alert('Well that is a bummer, that\'s all this site was made for.');
    intro = 0;
    console.log('user does not want to play.');
  } else {
    alert('I\'m afraid that is not an answer, try again.');
    console.log('user entered an invalid responce.');
  }
}
var totalRight = 0;
var totalWrong = 0;
var games = 0;
while(playing == 1) {
  games += 1;
  var right = 0;
  var wrong = 0;
  var q = 1;
  while(q == 1) {
    var question = prompt('First question, was I, Joey DeRosa, born in Washington? y/n').toLowerCase();
    if(question == 'y' || question == 'yes') {
      alert('That is correct, congratulations! I was born in Tacoma Washington to be exact.');
      right += 1;
      totalRight += 1;
      q = 0;
      console.log('user got the first question right.');
    } else if (question == 'n' || question == 'no') {
      alert('Ohhhhhh, that is unfortunatly wrong. I was born in Tacoma Washington.');
      wrong += 1;
      totalWrong += 1;
      q = 0;
      console.log('user got the first question wrong.');
    } else {
      alert('I\'m afraid that is not an answer, try again.');
      console.log('user entered an invalid responce.');
    }
  }
  q = 1;
  while(q == 1) {
    var question = prompt('Second qeustion, is pizza my favorite food? y/n').toLowerCase();
    if(question == 'n' || question == 'no') {
      alert('Wow, you saw through my trick question. Very impressive.');
      right += 1;
      totalRight += 1;
      q = 0;
      console.log('user got the second question right.');
    } else if (question == 'y' || question == 'yes') {
      alert('HAHA, trick question. All food is delicious and how dare you expect me to pick a favorite.');
      wrong += 1;
      totalWrong += 1;
      q = 0;
      console.log('user got the second question wrong.');
    } else {
      alert('I\'m afraid that is not an answer, try again.');
      console.log('user entered an invalid responce.');
    }
  }
  q = 1;
  while(q == 1) {
    var question = prompt('Third question, is the car I drive a yellow 2002 ford escape. y/n').toLowerCase();
    if(question == 'y' || question == 'yes') {
      alert('Impressive, I do drive a yellow 2002 ford escape. Not sure how you could possibly know that considering I take the bus to here.');
      right += 1;
      totalRight += 1;
      q = 0;
      console.log('user got the third question right.');
    } else if (question == 'n' || question == 'no') {
      alert('I\'m sorry but that is incorect. I was hoping the detail of the question would give away the answer but i guess not.');
      wrong += 1;
      totalWrong += 1;
      q = 0;
      console.log('user got the third question wrong.');
    } else {
      alert('I\'m afraid that is not an answer, try again.');
      console.log('user entered an invalid responce.');
    }
  }
  q = 1;
  while(q == 1) {
    var question = prompt('Fourth question, is the computer i use for code fellows a Mac. y/n').toLowerCase();
    if(question == 'n' || question == 'no') {
      alert('Very observent of you, while my laptop is silver like a Mac it is in fact a Google Chromebook running Ubuntu');
      right += 1;
      totalRight += 1;
      q = 0;
      console.log('user got the fourth question right.');
    } else if (question == 'y' || question == 'yes') {
      alert('That answer is not correct. While my laptop is silver like a Mac it is in fact a Google Chromebook running Ubuntu.');
      wrong += 1;
      totalWrong += 1;
      q = 0;
      console.log('user got the fourth question wrong.');
    } else {
      alert('I\'m afraid that is not an answer, try again.');
      console.log('user entered an invalid responce.');
    }
  }
  q = 1;
  while(q == 1) {
    var question = prompt('Fifth question, and this is a tough one, is my hair red. y/n').toLowerCase();
    if(question == 'y' || question == 'yes') {
      alert('Impossible! how could you possibly have known that, I didn\'t think anyone would know that.');
      right += 1;
      totalRight += 1;
      q = 0;
      console.log('user got the fifth question right.');
    } else if (question == 'n' || question == 'no') {
      alert('You got the last question wrong, but don\'t worry I didn\'t expect anyone to get this question right.');
      wrong += 1;
      totalWrong += 1;
      q = 0;
      console.log('user got the fifth question wrong.');
    } else {
      alert('I\'m afraid that is not an answer, try again.');
      console.log('user entered an invalid responce.');
    }
  }
  alert('Wow, that was fun!');
  alert('this game you got ' + right + ' right and ' + wrong + ' wrong.');
  alert('In ' + games + ' game(s) you have '+ totalRight + ' right and ' + totalWrong + ' wrong.');
  q = 1;
  while(q == 1) {
    var question = prompt('Would you like to play again? y/n');
    if(question == 'y' || question == 'yes') {
      alert('Awsome lets get started!');
      q += 1;
      console.log('user wants to play again.');
    } else if (question == 'n' || question == 'no') {
      alert('That\'s to bad.');
      q += 1;
      playing = 0;
      console.log('user does not want to play again.');
    } else {
      alert('I\'m afraid that is not an answer, try again.');
      console.log('user entered an invalid responce.');
    }
  }
}
alert('Farewell, I hope you enjoy the site.');
