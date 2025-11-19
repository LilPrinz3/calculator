//console.log();
console.log('hello world');

//alert()
//alert('hello world')

//prompt
//prompt()

//return statement

//Varaibles---are containers for storing informations.
myName = "Dammy"
console.log(myName);
myAge = '20'
console.log(myAge);

//3ways of declaring varaibles
//1.using 'let' keyword--such varaiable can be redeclared and reassigned

let userName = "Pelumi"
console.log(userName);
userName = 'Ayomide'
console.log(userName);

//2.using 'const' keyword--such varaiable cannot be redeclared or reassigned

const userAge = "30"
console.log(userAge);
// userAge = '25'
// console.log(userAge);

//3. using 'var' keyword---it is a function scope

//Data types
//we have 2 categories of data types in js
//1. primitive data types;
//a. String--these are char or num wrapped in quotes;

let newUserName = 'Tunde'
console.log(newUserName);

//concatenation
let userDetails = 'my name is' + newUserName + "," + userAge + 'years old.'
console.log(userDetails);
userDetails = 'my name is' + ' ' + newUserName + ',' + ' ' + userAge + ' ' + 'years old.'
console.log(userDetails);
userDetails = newUserName + userAge
console.log(userDetails);

newUserName = "Tolu"
//Template literal---using backtick
userDetails = `my name is newUserName. And i'am userAge years old`
console.log(userDetails);
userDetails = `my name is ${newUserName}. And I'am ${userAge} years old`
console.log(userDetails);

//Numbers-- are digit, float, integer or decimals

let firstNum = 20;
let secondNum = '20';
let thirdNum = 30;

let sum = firstNum + secondNum
console.log(sum);

sum = sum + secondNum
console.log(sum);

sum = firstNum + thirdNum
console.log(sum);

sum = `this is ${sum}`
console.log(sum);
sum = 'this is' + sum
console.log(sum);

sum = `${sum} + ${firstNum} + ${thirdNum}`
console.log(sum);

//Boolean--returns true or false.
let sheCanDrive = true;
console.log(sheCanDrive);
console.log(typeof sheCanDrive);

//undefined--When a varaible is decleared without a value.
let myHeight;
console.log(myHeight);

//Null--empty or void
let myUserRange = null;
console.log(myUserRange);
myUserRange = 'tenor'
console.log(myUserRange);
myUserRange = ''; //clears the value of a variable
console.log(myUserRange);

//Non-primitive data types
//a. Object-- is a key-value pairs, collection of key-pair value

let userObj={
    name: 'John Thomas',
    age: '345',
    complexion: 'light skin',
    address: { // nested object
        city: 'igbotako',
        state: 'ondo',
        mainAddress: '123 main street'
    }
};
console.log(userObj);
console.log(typeof userObj);

//ways of getting obj infos;
//1. using dot notation
console.log(userObj.age);
console.log(userObj.name);
console.log(userObj.address);
console.log(userObj.address.city);

//2. using bracket notation
console.log(userObj['complexion']);
console.log(userObj['address']['city']);

console.log(userObj.address['mainAddress']);
console.log(userObj['address'].mainAddress);


//b.Array-- is a collection of values-- it is denoted with []
let carBrands = ['toyota', 'lexus', 'nord', 'honda', 'ferrari', 'GTB', 'Benz', 'Tesla', 'Hyundia', 'Kia', 
    {owner: 'Spence', model:'GLE63', year:'2024'}];
console.log(carBrands);
console.log(typeof carBrands);
console.log(carBrands[0]);
console.log(carBrands[11]);
console.log(carBrands[2][3]);
console.log(carBrands[10].owner);

//Data destrcturing


let myObj = {
    color1: 'green',
    color2: 'red',
    color3: 'yellow',
    color4: 'purple'
};
console.log(myObj.color1);
let {color1, color2, color3, color4} = myObj;
console.log(color2);

let fruits = ['apple', 'pawpaw', 'carrot', 'mango', 'pineapple'];
const [apple, pawpaw, mango, carrot, pineapple] = fruits;
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);


let x = 'jhon'
 x = 0
 console.log(x);
 































