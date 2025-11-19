//Function-- is a block scope of code that performs a specific task..

//1. Named/regular function
//can be written by using the function keyword, followed by function name, followed by(), and {}.

// function sayHello(){ //anonymous function
//     alert('Hello Techies')
// };

// sayHello(); //invoking of function

// //2. Arrow function-- is a shorthand or concise way of writing a function; denoted with:
// //()=>{}

// const greetUser = ()=>{
//     alert('Hello Ibrahim')
// }

// greetUser();

//3. Callback function
function getDetails (){
    console.log(`He's 6ft tall`);
}
//set interval
const myInterval = setInterval(()=>{
    getDetails()
    // console.log('I know');
    
}, 4000)
clearInterval(myInterval)

//setTimeout
const timeOut = setTimeout(()=>{
    getDetails()
}, 10000)

clearTimeout(timeOut)

//assignment
//write function that checks for user performance in an exmanination such that when user scores 40 below, it retursns average, 30 below, returns fail, 70 above returns distinction.



