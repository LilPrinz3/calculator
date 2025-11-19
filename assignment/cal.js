let currentValue = 0

function solveMaths(){
    let firstInp = Number(document.getElementById('inp1').value)
    let select = document.getElementById('operators')
    let secondInp = Number(document.getElementById('inp2').value)
    let result = document.getElementById('result')
    let answer = document.getElementById('answer')
    let sum;

    if(select.value == "+"){
         sum = firstInp + secondInp
    }
    else if(select.value == "-"){
        sum = firstInp - secondInp
    }
    else if(select.value == '/'){
        sum = firstInp / secondInp
    }
    else if(select.value == 'x'){
        sum = firstInp * secondInp
    }
    else{
        alert('invalid operator')
    }
    currentValue += sum;

    result.value = sum

    answer.innerHTML = "currentValue=" + currentValue
    
}