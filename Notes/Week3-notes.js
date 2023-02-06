// FUNCTIONS allow you to write code that you can recall without re-typing it.
//Functions essentially allow us to save a block of code (line 14-17) to a variable (line 13)
//In below example, you can recall code from line 14-17 to print "renting car..." by just changing the value of "age = x"
//age = 24;

//   if (age>= 25) {
//     console.log("Renting a car is more affordable.");
//   } else {
//     console.log("Renting a car is very expensive.");
//   }
//Prints: Renting a car is very expensive.

// function carAge(){
//   if (age>= 25) {
//     console.log("Renting a car is more affordable.");
//   } else {
//     console.log("Renting a car is very expensive.");
//   }
// }
//Above code prints the following
//carAge();
//Renting a car is very expensive.
//age = 25;
//carAge();
//Renting a car is more affordable.
// function declaration (function carAge(parameters goes in here){ the scope of the function is inside the curly braces})
//myFunction (example of function invocation or "calling" a function)
let sum = 0

function findSum(){
  sum =+ 1;
  console.log(`This is the sum: ${sum}`);
  return sum;
}

findSum();
