function showText(value){
    document.getElementById('display').value += value;
}

function clearAll(){
    document.getElementById('inp1').value = '';
    document.getElementById('display').value = '';
}

function clearPart(){
    document.getElementById('display').value = '';
}

let secondInp;
let oper = '';
function operator(operators){
    secondInp = display.value
    oper = operators;

    inp1.value += secondInp + oper;
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1)
    // inp1.value = inp1.value.slice(0, -1)
}

function showAnswer(){
    if(oper == '+'){
        inp1.value = secondInp + '+' + display.value + '=';
        display.value = Number(secondInp) + Number(display.value)
    }
    else if(oper == '-'){
        inp1.value = secondInp + '-' + display.value + '=';
        display.value = Number(secondInp) - Number(display.value)
    }
    else if(oper == 'x'){
        inp1.value = secondInp + 'x' + display.value + '=';
        display.value = Number(secondInp) * Number(display.value)
    }
    else if(oper == '÷'){
        inp1.value = secondInp + '÷' + display.value + '=';
        display.value = Number(secondInp) / Number(display.value)
    }
    else if(oper == '%'){
       inp1.value = secondInp + '%' + display.value + '=';
        display.value = Number(secondInp) % Number(display.value) 
    }
    else if(oper == '✓'){
       inp1.value = secondInp + '✓' + display.value + '=';
        display.value = Math.sqrt(display.value) 
    }
    else if(oper == '^'){
       inp1.value = secondInp + '^' + display.value + '=';
        display.value = Number(secondInp) ** Number(display.value) 
    }
    else if(oper == '1/'){
       inp1.value = secondInp + '1/' + display.value + '=';
        display.value =1/zNumber(display.value) 
    }
}
