// String Methods & Concatenation

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// CONCATENATION

val = firstName + " " + lastName;

// APPEND

val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// ESCAPING

val = 'That\'s awesome, I can\'t wait';

// LENGTH

val = firstName.length;

// CONCAT   

val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toUpperCase(firstName);
val = firstName.toLowerCase(firstName);

val = firstName[0];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt(2);

// Get last character
val = firstName.charAt(firstName.length -1);

// Get substring
val = firstName.substring(0, 4);

// slice() *mostly used for Arrays
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('foo');

console.log(val);