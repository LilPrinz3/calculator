//Methods---are functions use to manipulate data types.

//string methods
let str = 'Anjola is a lazy boy'
console.log(str);

//1. length
console.log(str.length);

//2. toUpperCase
console.log(str.toUpperCase());

//3. toLowercase
console.log(str.toLowerCase());

//charAt()
console.log(str.charAt(2));

//at()
console.log(str.at(3));

//trim()
let greet ='   hello'
console.log(greet);
console.log(greet.trim());

//includes()
console.log(str.includes('is a'));

// replace
console.log(str.replace('boy', 'girl'));

//Number Methods
//1. converting strings to numbers
let num = '20.5677'
console.log(num);

//i. parseFloat()
console.log(parseFloat(num));
//ii. parseInt
console.log(parseInt(num));
///iii. Number
console.log(Number(num));
//iv. additonal operator
console.log(+num);


//conerting from numbers to srtings
num = 40.5
console.log(num)

//1. tostring();
console.log(num.toString());

//ii. toFixed()
console.log(num.toFixed());

//iii. toPrecision()
console.log(num.toPrecision());

//iv. toExponetial()
console.log(num.toExponential());








