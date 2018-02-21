//TYPE CONVERSION

let val;

// Number to string
val = String(555);
val = String(4+4);
// Boolean to a string
val = String(true);
// Date to a string
val = String(new Date());
// Array to a string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to Number
val = Number('5');
// Boolean to Number
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number('hello'); // NaN (Not a Number)
val = Number([1,2,3]);  // Nan (Not a Number)

val = parseInt('100.30');
val = parseFloat('100.30');


// Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

//Type Coersion

const val1 = String('5');
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);