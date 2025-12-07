// to store data in localstorage: set a key and its value
//setItem-- This method is used to store data in the browser's local storage, which remains
//available even after the browser is closed and reopened

let userName = 'tayo';
localStorage.setItem('user1', userName)
localStorage.setItem('user2', 'Ibrahim')
localStorage.setItem('user3', 'Aishat')

//getItem--This method is used to retrieve data from the browser's local storage using a specfied
//key, if the key dosen't exist it returns null.

let user = localStorage.getItem('user1')
console.log(user);

display.innerHTML = user.toUpperCase()

//localstorage - key---This method is used to retrieve the key of a specific index in the broswer's
//local storage

let localKey = localStorage.key(2);
console.log(localKey);

//localstorage - length---This property is used to retrieve the number  of key-value pairs stored in the broswer's
//local storage

let localLength = localStorage.length;
console.log(localLength);

//using JSON to store objects in localstorage
//JSON.stringify() is used to convert a JavaScript object into a JSON string, which can
//then be stored in local storage.
//JSON(Javascript object notation) is a lightweight data interchange format that is easy for 
//humans to read and write and easy for machine to parse and generate. It is often used
//for transmitting data in web applications.
//Objects cannot be stored driectly in local storage, so we need to convert them to a string using JSON.stringify before storing them.

let userObj = {
    name: 'Dee',
    age: 20,
    email: 'dee@gmail.com',
    password: '1234567890'
};

localStorage.setItem('userObj', JSON.stringify(userObj));

//To retrieve an object from local storage, we need to use JSON.parse() to convert the string back into a
//javascript object

let retrieveDetails = JSON.parse(localStorage.getItem('userObj'))
console.log(retrieveDetails);
display.innerHTML = retrieveDetails.name

//localStorage -clear ---This method clears all data from the browsers local storage.

//localstorage.clear()


