//DOM-- Document Object Model
//Node Tree--whch are head & body
//we can manipulate elements with js using the DOM;
//a. We can identify an element
//b. we can update an element
//c. we can style an element
//d. we can create an element
//e. we can append an element

let hello = document.getElementById('hello');
console.log(hello);
hello.innerHTML = `hello Javascript`
hello.innerText = 'hello python'
hello.style.color = 'green'
hello.style.backgroundColor = 'crimson'
hello.style.padding = '10px'
hello.style.width = '80%'
hello.style.margin = 'auto'
hello.style.textAlign = 'center'
hello.style.fontSize = '4em'

let secondHello = document.querySelector('.hello')
console.log(secondHello);

let list = document.querySelectorAll('.list')
console.log(list);

let btn = document.getElementById('btn')
btn.textContent = 'click'

let paraGrpah = document.createElement('p');
console.log(paraGrpah);

paraGrpah.innerHTML ='this is getting interesting'

let display = document.getElementById('display');
console.log(display);

display.style.border = 'thin solid red';
display.style.fontSize = '2em'

display.appendChild(paraGrpah);
console.log(display);








