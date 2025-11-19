function canCalculate(){
    let firstInp = Number(document.getElementById('inp1').value)
    let operators = document.getElementById('operator')
    let secondInp = Number(document.getElementById('inp2').value)
    let result = document.getElementById('result')
    let sum = firstInp + secondInp
    console.log(sum);
  
    if(operators.value == "+"){
        let sum = firstInp + secondInp
        result.value = sum
    }
    else if (operators.value == "-"){
        let sum = firstInp - secondInp
        result.value = sum
    }
     else if (operators.value == "x"){
        let sum = firstInp * secondInp
        result.value = sum
    }
    else if (operators.value == "/"){
        let sum = firstInp / secondInp
        result.value = sum
    }
    else{
        alert('invalid operator')
    }
    document.getElementById ('inp1').value = ""
    document.getElementById ('operator').value = ""
    document.getElementById ('inp2').value= ""


}