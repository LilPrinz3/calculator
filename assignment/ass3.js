//ASSIGNMENT
//1. CREATE A FUNCTION COUNTER() THAT
//i. Uses a local scope inside the function to track how many times the function has been called.
//ii. Return the count each time it is called.

//soln.
function counter(){
    let count = 0;
    return function(){
    count++
    
    return count;
}
}
const counting = counter();
console.log(counting());


//2. CREATE A FUCTION MULTIPIER() THAT
//i. Takes a number x
//ii. Returns another function that multiplies x with a new number y

//soln.
//2.
// function multiplier(x){
//     return function (y){
//          return x * y;
//     };
    
// };

// const times = multiplier(2)
// console.log(times (6));

//OR

// function multiplier(){
//     const nextNumber = ()=>{
//         let x = 3;
//         let y = 5
//         let product = x * y
//         console.log(product);   
//     };

//     nextNumber();
// }
// multiplier();

//OR
function multiplier(){ //same as the prevous, just that this asks for user input
    const x = prompt('Enter the value of X')
    const y = prompt('Enter the value of y')
    const nextNumber = ()=>{
        const product =  x * y
        console.log(`The product of ${x} and ${y} is ${product}`);
        alert(`The product of ${x} and ${y} is ${product}`);
        
    };
    nextNumber();
}

multiplier();

//3. Write a function that returns the modulus of a number

//soln
function modulus(){
    let sum = prompt('enter any value') % prompt('enter any value')
    console.log(sum);
}

modulus();

