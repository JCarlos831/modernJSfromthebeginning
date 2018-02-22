//SECTION 2 LECTURE 15 - IF STATEMENTS & COMPARISON OPERATORS

// if(something){
//     do something;
// } else {
//     do something else;
// }

const id = 100;

// // Equal to

// if (id == 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // Note equal to

// if (id != 101) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // Equal to value and type

// if (id === 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // Not equal to value and type

// if (id !== 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }


// // Test if undefined
// if(typeof id !== 'undefined') {
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }

// Greater or less than

// if (id >= 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// IF ELSE

const color = 'yellow';

// if(color === 'red') {
//     console.log('Color is red');
// } else if (color === 'blue') {
//     console.log('Color is blue');
// } else {
//     console.log('Color is not red or blue');
// }

// Logical Operators

const name = 'Steve';
const age = 25;

// And &&

if(age > 0 && age <= 12){
    console.log(`${name} is a child`)
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// Or ||

if (age < 16 || age > 65) {
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// Tenary Operator
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// Without Braces

if(id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');