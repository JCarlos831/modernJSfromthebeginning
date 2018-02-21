// Threee types of variables var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var

// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// Variables can only start with letters, numbers, _, $
// Variables can not start with a number

// Multi word variables
// var firstName = 'John'; // Camel Case *recommended method
// var first_name = 'Sara' // Underscore
// var FirstName = 'Tom' // Pascal Case *we will use for constructors in javaScript
// var firstname;  // Not recommended

// LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
// const name = 'John';
// console.log(name);
// Can not reassign
// name = 'sara';
// Have to assign a value
// const greeting;

const person = {
    name : 'John',
    age : 30
};

person.name = 'Sara';
person.age = 32;
// console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);

