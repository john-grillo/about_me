'use strict';
console.log('Hello from app2.js!');
//var NULL = null;
String.prototype.wordSearch = function(arg) {
  return this.toLowerCase().indexOf(arg);
};

//first question bloc
var firstQ = prompt("Do you like icecream? Type 'Y/N' or 'YES/NO' ").toUpperCase();
if (firstQ.toLowerCase() === 'yes' || 'y') {
  alert('Of course you do! Everyone loves ice cream.');
}
else if (firstQ.toLowerCase() === 'n' || 'no') {
  alert("Gordon Bennet! What's wrong with you if you don't like ice cream?");
}
else {
  alert("Oh my god, what is this, I don't even...");
}
console.log("John Grillo's favorite flavor is Chocolate Mudslide from the Tillamook Cheese factory");
console.log("User answered with: " + firstQ);

//2nd question block
var secondQ = prompt("But seriously, what is John Grillo's favorite Laika film?");
console.log("User answered with: " + secondQ);
if (secondQ.wordSearch("kubo") >= 0) {
  alert('Good, you paid attention.');
}
else if (secondQ == -1) {
  alert(secondQ + '; Good guess, but the answer was Kubo & The Two Strings');
}
else {
   alert("Gordon Bennet, that's not the right answer!");
}


//third question bloc
var thirdQ = prompt('So who another superhero that John Grillo likes?');
console.log("User answered with: " + thirdQ);
if (thirdQ.wordSearch('mr. miracle') >= 0) {
  alert('That is right! Mr. Miracle should get a movie.');
} else {
  alert('That is right! Mr. Miracle should get a movie.');
}

var fourthQ = prompt('What country in Africa has John Grillo been to?');
console.log("User answered with: " + fourthQ);
if (fourthQ.wordSearch('egypt') >= 0 ) {
  alert('Good catch! Not a lot of people think of Egypt as an African country.');
} else {
  alert('Buyao. It was Egypt.');
}

do {
  var fifthQ = prompt('BONUS: Guess a number between 1 and 10, inclusive');
  var doContinue = false;
  console.log("User answered with: " + fifthQ);

  if (fifthQ == 1) {
    alert('Good catch! The word "inclusive" throws people off.');
  } else {
    alert('Buyao! The answer is 1');
    doContinue = true;
  }
} while (doContinue == true);

var sixthQ = prompt("Does John duel with lightsabers? Type 'Y/N' or 'YES/NO' ").toUpperCase();
if (sixthQ.toLowerCase() === 'yes' || 'y') {
  alert('Yes. He makes videos with his friends, too.');
}
else if (sixthQ.toLowerCase() === 'n' || 'no') {
  alert("Actually, he does");
}
else {
  alert("Oh my god, what is this, I don't even...");
}
console.log("John Grillo does, but he does not own his own");
console.log("User answered with: " + sixthQ);

var sevenQ = prompt("Does John look fresh? Type 'Y/N' or 'YES/NO' ").toUpperCase();
if (sevenQ.toLowerCase() === 'yes' || 'y') {
  alert('Yes. Yes he does.');
}
else if (sevenQ.toLowerCase() === 'n' || 'no') {
  alert("You're a liar!");
}
else {
  alert("Oh my god, what is this, I don't even...");
}
console.log("John Grillo does, indeed, look fresh.");
console.log("User answered with: " + sevenQ);
