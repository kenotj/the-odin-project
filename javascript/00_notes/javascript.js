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


// function creation
/** TO NOTE: Unlike C++, Javascript is a dynamic-typed language.
It does not require explicity type declarations. The same way as c++

in c++:
  int Sum(int value1, int value2)
  {
    return value1 + value2;
  }

or (for multiple types):
  template<typename T>
  T Sum(const T& value1, const T& value2)
  {
    return value1 + value2;
  }
 */
function FavouriteAnimal(animal)
{
  return animal + " is my favourite animal!"
}
console.log(FavouriteAnimal("Dog"))
alert(FavouriteAnimal("Puggo"));

/**
 * Adds value1 and value2 together and returns the result
 * @param {number} value1
 * @param {number} value2
 * @returns value1+value2
 */
function Sum(value1, value2)
{
  return value1 + value2;
}

/** TO NOTE: What we can do instead is to do runtime type checking if required.
 */
function BetterSum(val1, val2)
{
  if(typeof val1 !== 'number' || typeof val2 !== 'number')
  {
    console.error("Invalid type parameter");
    return "invalid type parameter";
  }
  output(val1, val2);
  return val1 + val2;
}
alert(BetterSum(1, "2"));

/** TO NOTE: Or we can just use typescript lol. */


// Function Expressions
function HelloFunc()
{
  alert("Hello!");
}
let runFunc = HelloFunc; // functor
runFunc();

/** TO NOTE: In strict mode, function expressions are created only when
execution reaches them. (Within block scope) */
let Multiply = function (a, b) { return a * b; } // function expression
alert(`The multiplication of is 4 and 8 is ${Multiply(4, 8)}`);

// Arrow functions
//  We can also do this to dynamically create a function (similar to function expressions)
let FourSum = (a, b, c, d) => a + b + c + d;
alert(FourSum(1, 2, 3, 4));

let age = prompt("What is your age? ", 18); // 18 is the default value for prompt()
let welcome = (age >= 18)
            ? ()=> alert("Hello!")
            : ()=> alert("Unaccessible.");
welcome();

// Function exercise //
// 1. Write a function called add7 that takes one number and returns that number + 7.
function add7(val) { return val + 7; }
alert(`add7(3) called, ${add7(3)}`);

// 2. Write a function called multiply that takes 2 numbers and returns their product.
function multiply(val1, val2) { return val1 * val2; }
alert(`mulitply(2, 4) called, ${multiply(2, 4)}`);

// 3. Write a function called capitalize that takes a string and returns that
//    string with only the first letter capitalized. Make sure that it can
//    take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(str)
{
  if(typeof str != 'string')
  {
    console.error("Error: captialize() - not of type str passed in!");
    return;
  }

  if(str.length == 0)
    return "";

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  // str.at(-1) - supports negative indexing (returns last character)
}
alert(capitalize("this is A TEST OF capitalize()"));

// 4. Write a function called lastLetter that takes a string and returns the very last letter of that string:
//     - lastLetter("abcd") should return "d"
function lastLetter(str)
{
  if(typeof str !== 'string')
  {
    console.error("Error: lastLetter() - not of type str passed in!");
    return "";
  }

  if(str.length === 0)
  {
    console.error("Error: lastLetter() - str is empty!");
    return "";
  }
  return str.at(-1);
}
alert(lastLetter("abcd"));


/** NOTE: SCOPING RULES (var vs let)
      The main difference is scoping rules. Variables declared by var keyword
      are scoped to the immediate function body (hence the function scope)
      while let variables are scoped to the immediate enclosing block
      denoted by { } (hence the block scope).

      for example:
        function run() {
        var foo = "Foo";
        let bar = "Bar";

        console.log(foo, bar); // Foo Bar

        {
          var moo = "Mooo"
          let baz = "Bazz";
          console.log(moo, baz); // Mooo Bazz
        }

        console.log(moo); // Mooo
        console.log(baz); // ReferenceError
      }
      run();
 */

// function exercies: Fizz Buzz
/** Players generally sit in a circle. The player designated to go first says
    the number "one", and the players then count upwards in turn.
    A player who hesitates or makes a mistake is eliminated.

    For example, a typical round of fizz buzz would start as follows:
    1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14,
    Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz,
    28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
 */
function FizzBuzz()
{
  let sResult = "";
  for (let nIndex = 0; nIndex < arguments.length; ++nIndex)
  {
    let value = arguments[nIndex];

    // Error: value is NaN
    if (typeof value !== 'number')
    {
      console.error("Error: Fizzbuzz() - value is not a number");
      return "";
    }

    if ((value % 3) === 0)
    { // Case 1: value is a multiple of 3
      sResult += "Fizz";
    }
    else if ((value % 5) === 0)
    {
      // Case 2: value is a multiple of 5
      sResult += "Buzz";
    }
    else
    { // Case 3: not a multiple of 3 or 5
      sResult += value.toString();
    }

    // Formatting
    if (nIndex != (arguments.length - 1))
    {
      sResult += ", ";
    }
  }
  return sResult;
}
alert(FizzBuzz(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20));