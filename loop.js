//forloop -- is used for iterating values, an array, a string or an object
// to use forloop you must start with a keyword for(), intialization, condition, increment/decrement

for(let index = 1; index <= 10; index++){
    console.log(index);
};

let arr = [1,2,3,4,5,6,7,8,9,10];
for(let jummie = 1; jummie <= arr.length; jummie++){
    console.log(jummie);
}

//Nested loop-- follows the iteration of the big loop
for(let i = 1; i <= 5; i++){
    
    for(let j = 1; j <= 12; j++){
        console.log(`${i} * ${j} = ${i * j}`);
        
    }
}

//for of--- loop through a string

let str = 'Zayin is a street boy!';

for(let value of str){
    console.log(value);
    
};

//for in-- to loop through an object

let obj = {
    name: 'kelvin',
    age: 10,
}

for(let key in obj){
    console.log(key);
    console.log(obj[key]);
    
    
}

