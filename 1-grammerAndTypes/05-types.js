//Types

//Booleans, true or false
var bool = true;
console.log(typeof bool);

let noBool = false;
console.log(typeof noBool);

//Null not zero the abcance of a value

var empty = null;
console.log(typeof empty);

//Undefined
let grass;
console.log(grass); 


//Numbers

var degrees = 90;
console.log(`It is currently ${degrees} degrees.`);

var precise = 9999999999999;
console.log(precise);

var rounded = 99999999999999;
console.log(rounded);


var notQuite = 0.2 + 0.1;
console.log(notQuite);


//Strings , any value within quotes.

let stringOne = "double quotes"
let stringTwo = 'single quotes'
console.log(stringOne, stringTwo);

//Numbers vs. Strings
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

let third = 1050 + '100';

console.log(third);
console.log(typeof third);


//Challenge:

let firstname = 'Sasan';
let lastname = 'Kayyod';
let houseNumber = 650;
let street = 'PineDrive';
let city = 'Indianapolis';
let state = 'IN';
let zip = 46260;

console.log (firstname, lastname);
console.log(houseNumber + ' ' + street);
console.log(city + ', ' + state, zip);


// objects, are containters that can hold multiple data types.

let burritoNow = {
    size: "large",
    quantity: 4,
    now: true
};

console.log( burritoNow);
console.log(typeof burritoNow);


//Arrays

var burritos = ['large', 4, true];

console.log(burritos);
console.log(typeof burritos);











