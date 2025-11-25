//ARRAY--- is a collection of values.

//we have  different array methods

let carBrands = ['toyota', 'nissan', 'honda', 'lexus', 'ferrari', 'tesla', 'benz', true, false, {}, {name: 'jayjay', country: 'canada', bio: 'player'}];
console.log(carBrands);

//length...
console.log(carBrands.length);

//push()--- is used to add an item to the end of an array
let userName = 'Austin';
console.log(carBrands.push(userName));
console.log(carBrands);

//pop()--- to remove the last item in an array
console.log(carBrands.pop());
console.log(carBrands);

//shift()--- to remove the first item in an array
console.log(carBrands.shift());
console.log(carBrands);

//unshift()--- to add an item to the begining of an array
console.log(carBrands.unshift('toyota'));
console.log(carBrands);

//includes()--- checks if an item thus exist in an array
console.log(carBrands.includes('nissan'));

//concat()-- is used to merge two or more array into a new array
let fruits = ['pawpaw', 'loud', 'banana', 'mango', 'orange']
let mergeArray = carBrands.concat(fruits)
console.log(mergeArray);

//sort--- is used to sort array items in place
let alpahabets = ['b', 'z', 'j', 'oblee', 'u', 'i', 'p', 'o','i', 't', 'a', 'f', 'c', 'e'];
console.log(alpahabets);
console.log(alpahabets.sort());

//slice--- is used to remove an item or items from an array
console.log(fruits);
console.log(fruits.slice(1, 4));

//splice--- is used to add or remove array
console.log(fruits);
console.log(fruits.splice(0, 2, 'apple'));
console.log(fruits);

//find---is used to check if an item thus exist in an array
let colors = ['green', 'blue', 'red', 'yellow', 'white', 'crimson'];
console.log(colors);
let myCheck = colors.find((color)=> color == 'Green');
console.log(myCheck);

//findIndex()
myCheck = colors.findIndex((color)=> color == 'rebeccapurple')
console.log(myCheck);

//filter()
myCheck = colors.filter((items)=> items == 'fire')
console.log(myCheck);

//forEach()--- to iterate or loop through an array




















