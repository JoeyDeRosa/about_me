// function question(qPrompt, qAlert, qAlert2, answer1, answer2, wAnswer1, wAnswer2) {
//   this.qPrompt = qPrompt;
//   this.qAlert1 = qAlert1;
//   this.qAlert2 = qAlert2;
//   this.answer1 = answer1;
//   this.answer2 = answer2;
//   this.wAnswer1 = wAnswer1;
//   this.wAnswer2 = wAnswer2;
// }
var qArray = [];

var question1 = {
    qPrompt: 'First question, was I, Joey DeRosa, born in Washington? y/n',
    qAlert1: 'That is correct, congratulations! I was born in Tacoma Washington to be exact.',
    qAlert2: 'Ohhhhhh, that is unfortunatly wrong. I was born in Tacoma Washington.',
    answer1: 'y',
    answer2: 'yes',
    wAnswer1: 'n',
    wAnswer2: 'no',
}
qArray.push(question1);

var question2 = {
    qPrompt: '',
    qAlert1: '',
    qAlert2: '',
    answer1: 'n',
    answer2: 'no',
    wAnswer1: 'y',
    wAnswer2: 'yes',
}
qArray.push(question2);

var question3 = {
    qPrompt: '',
    qAlert1: '',
    qAlert2: '',
    answer1: 'y',
    answer2: 'yes',
    wAnswer1: 'n',
    wAnswer2: 'no',
}
qArray.push(question3);

var question4 = {
    qPrompt: '',
    qAlert1: '',
    qAlert2: '',
    answer1: '',
    answer2: '',
    wAnswer1: '',
    wAnswer2: '',
}
qArray.push(question4);

var question5 = {
    qPrompt: '',
    qAlert1: '',
    qAlert2: '',
    answer1: '',
    answer2: '',
    wAnswer1: '',
    wAnswer2: '',
}
qArray.push(question5);

var qIndex = 0;
var totalRight = 0;
var totalWrong = 0;
var games = 0;

while(playing === 1) {
  var right = 0;
  var wrong = 0;
  games++;

  while(qIndex < qArray.length) {
    var a = prompt(qArray[qIndex].qPrompt).toLowerCase();
    if(a === qArray[qIndex].answer1 || a === qArray[qIndex].answer2) {
      alert(qArray[qIndex].qAlert1);
      console.log('user got the ' + (qIndex + 1) + 'question wrong.');
      qIndex++;
      right++;
      totalRight++;
    } else if(a === qArray[qIndex].wAnswer1 || a === qArray[qIndex].wAnswer2) {
      alert(qArray[qIndex].qAlert2);
      console.log('user got the ' + (qIndex + 1) + 'question wrong.');
      qIndex++;
      wrong++;
      totalWrong++;
    } else {
      alert('I\'m afraid that is not an answer, try again.');
      console.log('user entered an invalid responce.');
    }
  }

  alert('Wow, that was fun!');
  alert('this game you got ' + right + ' right and ' + wrong + ' wrong.');
  alert('In ' + games + ' game(s) you have '+ totalRight + ' right and ' + totalWrong + ' wrong.');

  var x = 1;
  while(x == 1) {
    var a = prompt('Would you like to play again?');
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
}

alert('Farewell, I hope you enjoy the site.');
