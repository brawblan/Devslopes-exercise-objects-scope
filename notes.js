// JavaScript Objects

var person = {
  firstName: 'Brandon',
  lastName: 'Blankenstein',
  age: 26,
  hobbies: ['lifting', 'drumming'],
  face: {
    eyeColor: 'blue',
    glasses: false,
  },
  greeting: function() {
    return `My name is ${this.firstName} and I'm ${this.age} years old.`
  }
}

// console.log(person.firstName);
// console.log(person);
// console.log(person.greeting());

var person2 = new Object();

person2.name = 'Mary';
person2.age = 23;
person2.greeting = function() {
  return `My name is ${this.name} and I'm ${this.age} years old.`
}




var person3 = {};

person3.name = 'John';
person3.age = 28;
person3.greeting = function() {
  return `My name is ${this.name} and I'm ${this.age} years old.`
}

// console.log(person2);
// console.log(person3);


function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greeting = function() {
    return `My name is ${this.name} and I'm ${this.age} years old.`
  }
}

var humans = [];

humans.push(new Person('Jimmy', 19));
humans.push(new Person('Julie', 24));
humans.push(new Person('Jaxon', 99));
humans.push(new Person('Jared', 56));


for (let i in humans) {
  var human = humans[i];
  // console.log(human.greeting());
}

// console.log(humans);

///////////////////////////////////////////////////////////
// JavaScript Scope

/* Scope determines the accessibility (visibility) of variables. */


// Global - A global variable has global scope:
// All scripts and functions on a web page can access it. 

// var name = 'Henry';
var user1 = {
  name: 'Bobby',
  age: 28,
  data: 'all the important things',
}

if (true) {
  var name = 'Andrew';
}
console.log(name);


// Local - Variables declared within a function,
// become LOCAL to the function.

function userBDay(age) {
  var newAge = age + 1;
  user1 = newAge;
  console.log(`Happy Birthday ${user1.name}, you are ${newAge} years old.`)
}

userBDay(user1.age);
console.log(user1);




/* ES2015 / ES6 */
// Introduced 'let' & 'const':
// These two keywords provide Block Scope variables (and constants) in JavaScript

// Variables declared inside a block {} CANNOT be
// accessed from outside the block.

var x = 10;
if (true) {
  var x = 2;
}

//let

let x = 10;
if (true) {
  x = 2;
  if (true) {
    x = 'hello';
    for (let i = 0; i < 4; i++) {
      x = i;
    }
  }
}

console.log(x);
console.log(i);


//const

const animal = 'Racoon';
// animal = 'cat';

const user2 = {
  name: 'Rambo',
  age: 73,
}

function userBDay(age) {
  var newAge = age + 1;
  user2.age = newAge;
  console.log(`Happy Birthday ${user2.name}. You are ${user2.age} years old!`)
}

userBDay(user2.age);
console.log(user2);