let isShow = false
console.log(isShow);

function log(){
    let bar = document.getElementById('bar')
    let list = document.getElementById('list')
    let press = document.getElementById('press')
    let mark = document.getElementById('mark')
    if (isShow) {
        //hide menu
        bar.style.display = 'block'
        list.style.display = "none"
        press.style.display = 'none'
        mark.style.display = 'none'
    } else {
        //show menu
        bar.style.display = 'none'
        list.style.display = "block"
        press.style.display = 'block'
        mark.style.display = 'block'
    }
    
    isShow = !isShow
}




function showText() {
    let input = document.getElementById('input').value;
    document.getElementById('output').innerHTML = input;
}


//the .value is property is used to retrieve or set the current value of an HTML input element.
// returns the text currently entered by the user or the value of currently selected option
//Setting Values: You can also assign a new value to the .value property to programmatically change the content of an input field.

//    document.getElementById('input').value = 'New text here';