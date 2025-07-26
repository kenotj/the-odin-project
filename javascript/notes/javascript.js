// strings basics
const string = "tThe revolution will not be televised.";
console.log(string);
const badString = string;
console.log(badString);

// types of strings
const single = 'single quotes';
const double = "double quotes";
const backtick = `Backtick`;
console.log(single);
console.log(double);
console.log(backtick);

// simple template literal - 1
const name = "Chris";
const greeting = `Hello ${name}`;
console.log(greeting);

// simple template literal - 2
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined);

// simple button listeners
const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}
button.addEventListener("click", greet);

// string concatenation using '+'
const cGreeting = "Hello";
const cName = "Chris";
console.log(cGreeting + ", " + name);

// template literal
const tGreeting = "Hello";
const tName = "Chris";
console.log(`${tGreeting}, ${tName}`);

// include expression in strings
const song = "Fight the youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I give it a score of ${(score/highestScore)*100}%.`;
console.log(output);

// Multi line strings
const multiline = `one day you will finally know
what you had to do.`
console.log(multiline);

// new line strings
const newLine = "one day you will finally know\nwhat you have to do."
console.log(newLine);

// numbers vs strings
const sFront = "Front ";
const sNum = 242;
console.log(sFront, sNum);

// number to string
const sNumber = "123";
const nNumber = Number(sNumber);
console.log(typeof nNumber);

// javascript charCodeAt()
// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
// console.log(char);

// javascript codePointAt()
// let text = "HELLO WORLD";
// let code = text.codePointAt(0);
// console.log(code);

// switch case
let x = "value1";
switch(x)
{
case "value1":
break

case "value2":
break;

default:
break;
};


// if-else
let year = 2025;
if(year == 2025)
{
  alert("we are in the correct year!");
}
else
{
  alert("we are in the wrong year :(");
}

// ternary operator
let result = year == 2025? true : false;
if(result) alert("yay!");