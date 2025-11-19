//Event-- are action or occurance that happens in the browser and are carried by the program.
//Eventhandler--handles the action the element is going to perform in the browser

function changeUI(){
    let body = document.getElementById('body');
    let btn = document.getElementById('btn');
    let word = document.getElementById('word')

    if (body.style.backgroundColor === 'black'){
        body.style.backgroundColor = 'white'
        word.style.color = 'black'
    }else{
        body.style.backgroundColor = 'black'
        word.style.color = 'white'
    }
    btn.style.padding = '10px 20px';
    btn.style.backgroundColor = 'green';
    btn.style.borderRadius = '5px';
    btn.style.border = 'none'
    btn.style.color = '#fff'
    btn.style.fontSize = '2em';
}

// let text = "12345";
// let min = Math.min (...text)
// let max = Math.max (...text)
// console.log(min);
// console.log(max);

