//Operators
//1. Arithmetic operators = +, -, *, /, **

//i. addition
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum);

let num = undefined;
console.log(sum);

sum = num1 + num;
console.log(sum);

//ii. subtraction
sum = num2 - num1;
console.log(sum);

//iii. multiplication
sum = num1 * num2;
console.log(sum);

//iv. division
sum = num2 / num1
console.log(sum);

//v. exponential
sum = num1 ** 2;
console.log(sum);

//vi. modulus
sum = num1 % 3
console.log(sum);

//2. assignment operator, addition & subtraction assignment operator
num = '30';
console.log(num);

//3. pre and post increament, pre & post decrement

let count = 0
console.log(count);
console.log(count++);
console.log(count);

let numberOfApple = 1;
let newAppleValue = numberOfApple++; //post increment
console.log(newAppleValue);
console.log(numberOfApple);

let newValue = ++numberOfApple; //pre increment
console.log(newValue);
newValue = newAppleValue++
console.log(newValue);

let a = 1;
let b = a++; //post
console.log(b);
console.log(a);
let c = b++;
console.log(c);
console.log(b);
let d = a++;
console.log(d);
console.log(a);

let yemoja = 1;
let newYemoja = yemoja++; //post
console.log(newYemoja);
console.log(yemoja);

console.log(newYemoja);
newYemoja = ++yemoja; //pre
console.log(newYemoja);

newYemoja = yemoja--; //post decrement
console.log(newYemoja);
console.log(yemoja);

newYemoja = --yemoja
console.log(newYemoja);


//addition assignment and subtraction assignment operator.
let firstDigit = 20;
let secondDigit = 40;
let sumOfDigit = firstDigit + secondDigit
console.log(sumOfDigit);

// sumOfDigit = sumOfDigit + firstDigit
// console.log(sumOfDigit);

sumOfDigit += firstDigit
console.log(sumOfDigit);
sumOfDigit -= sumOfDigit
console.log(sum);

sumOfDigit += firstDigit++
console.log(sumOfDigit);
console.log(firstDigit);


//4.Comparison operators---are used to compare two values
//They return a boolean value (true or false) based on the comparison
//Examples of comparison operators include:
//- Equal to (==) --checks for similar value.
//- Not equal to (!=)
//- Strict equal to (===) --checks for similar value and data types
//- Strict not equal to (!==)
//- Greater than (>)
//- Less than (<)
//- Greater than or equal to (>=)
//- Less than or equal to (<=)

let firstVal = 20;
let secondVal = '20';
let thirdVal = 30;
console.log(firstVal > thirdVal);
console.log(firstVal > secondVal);
console.log(thirdVal <= 30);
console.log(firstVal == secondVal);
console.log(firstVal === secondVal);
console.log(firstVal != secondVal);
console.log(firstVal !== secondVal);


//5.logical operators---are used to combine multiple conditions
//They also return a boolean value (true or false)
//Examples of logical operators include:
//- Logical AND (&&)-- both sides must be true before you can get a return of true.
//- Logical OR (||)--when either side is true, it returns true.

console.log(true && false);
console.log(false && true);
console.log(true && true);
console.log(false && false);
console.log(true || false);
console.log(!true || !false);
console.log(true || 1);
console.log(true || false && false && true || false || true && 1);
console.log(1 && false || true || true && false || true && false);


//6.Ternary operator---is a shorthand way of writing an if-else statement
//It takes three operands
//The syntax is: condition ? expressionIfTrue : expressionIfFalse

let isAlive = true;
let status = isAlive = false? 'Yes his alive' : 'no, his dead';
console.log(status);

let age = 18;
let isOldEnough
isOldEnough = age >= 18 ? 'yes she is old enough' : 'no she is a minor';
console.log(isOldEnough);


//7.conditional statements---are used to perform different actions based on different conditions
//They include if statements, switch statements, and more
//if block, else if block and else block.
let colors = 'green';
if (colors == 'red' && colors == 'red' || 'green'){
    console.log(colors);
    console.log('yes am green');
}else if (colors >= 'Green'){
    console.log(`i know`);  
}
else{
    console.log('no i am a different color');
}
let carColor = 'black';

if(car = 'lexus' && true && false || carColor > 1){
    console.log('i am lexus');   
}else if (1 < carColor && "black"){
    console.log('i am nexus');    
}
else if (carColor == "black" && false > 1){
    console.log('i am fake nexus');
}else{
    console.log('i am everything');
}


//nested if--means placing one or more if statements inside another if statement.
//it's used when you need to test multiple related conditions
//when one condition depends on another.

let username = "Ibrahim";
let password = '12345';
if(username == 'Ibrahim'){
    if(password == '12345'){
        console.log('login successful');  
    }
    else{
        console.log(`invalid details`);  
    }
}else{
    console.log('who the hell are you?');
}

if (username == 'ibrahim' || password == '12345'){
    console.log('login successful');
}
else{
    console.log('invalid details');
}


//spread operator(...) -is a special syntax used to expand(or unpack) elements of an array, object or iterable into individual items.
 let user1 = {
    name1: 'Afolabi',
    age1: 345,
    address1: 'igbajo'
 }
 let user2 = {
    name: 'Ayomide',
    age: 1702,
    address: 'bodija'
 };
 let mergedObj = {...user1, ...user2}
 console.log(mergedObj);

 let arr = [1,2,3,4,5];
 console.log(arr);
 let newArr = [...arr,6,7,8,9]
 console.log(newArr);

 let questions = [
    {question: 'who is the president of nigeria?', options:['a. Tinubu', 'b. Ibrahim'],
        selectedAnswer: 'a. Tinubu', choose: ''},
    {question: 'who is the president of javascript?', options:['a. Tinubu', 'b. Ibrahim'],
        selectedAnswer: 'a. Tinubu', choose: ''},   
 ]
 console.log(questions);
 console.log(questions[0].question);

 //ASSIGNMENT---
//WRITE A CONDITIONAL STATEMENT TO CHECK CHARACTER TYPE.
//USING PROMPT, INPUT A CHARACTER AND CHECK IF IT'S A VOWEL, CONSONANT, DIGIT, OR SPECIAL CHARACTER.
//Make sure the values are checked either it is upperCase or lowerCase...



 
 
 
 
 
    








































