//assignment
//write function that checks for user performance in an exmanination such that when user scores 40 below, it retursns average, 30 below, returns fail, 70 above returns distinction.

const userPerfomance = ()=>{
    let studentScore = prompt('enter score')
    console.log(studentScore);

    if(studentScore >= 70){
        alert('Distinction')
        console.log('Distinction');
        
    }else if (studentScore >=40 && studentScore <= 69){
        alert('pass')
    }
    else if(studentScore >=30 && studentScore < 40){
        alert('average')
        console.log('average');
    }else if (studentScore >=5 && studentScore < 30){
        alert('fail')
        console.log('fail');
    }
    else{
        alert('school is not for you')
        console.log('school is not for you');
    }
}
userPerfomance();