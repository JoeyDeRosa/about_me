var userName = prompt('what is your name?');
alert('Welcome, ' + userName + '!');
console.log('The user\'s name is ' + userName + '.');
var userBand = prompt('what is your favorite band?');
alert('Wow ' + userName + ' , I don\'t think i am familiar with ' + userBand + '.');
console.log(userName + '\'s favorite band is ' + userBand + '.');
var bandMusic = prompt('what kind of music does ' + userBand + ' play?');
alert('Well a ' + bandMusic + ' concert featuring ' + userBand + ' sounds like something you, ' + userName + ', should go to.');
console.log(userName + '\'s favorite band is ' + userBand + ' and they play ' + bandMusic);
var bandSong = prompt(userName + ', what is your favorite song by ' + userBand + '.');
alert('Cool ' + userName + ' I bet the ' + bandMusic + ' track ' + bandSong + ' by ' + userBand + ' is a great song.');
console.log(userName + '\'s favorite band is ' + userBand + ' and they play ' + bandMusic + ' with the hit song ' + bandSong + '.');
