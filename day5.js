//scope --- is the behaviour of a variable in relation to its position
//1. global scope variable
//2. local scope variable

let userName = 'Tunji'; //global scope
function getUserName(){
    userName = 'Tayo';
    console.log(userName); //tayo
    
    let newUser = 'Femi';
    console.log(userName); //local scope
    
    userName = newUser;
    console.log(userName);
    
};
console.log(userName);
getUserName();

//Argument and parameters
function getSum(num1, num2 = 10){
    let sum = num1 + num2;
    console.log(sum);  
}

getSum(10);

function getName(name){
    console.log(`Hello ${name}`);
    
}
getName('shola')
getName('femi')
getName('gbenga')

//ASSIGNMENT
//1. CREATE A FUNCTION COUNTER() THAT
//i. Uses a local scope inside the function to track how many times the function has been called.
//ii. Return the count each time it is called.

//2. CREATE A FUCTION MULTIPIER() THAT
//i. Takes a number x
//ii. Returns a nother function that multiplies x with a new number y

//3. Write a function that returns the modulus of a nubmer




