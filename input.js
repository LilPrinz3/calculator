let detailsArr = [];
let user
let input;
function show() {
    input = '';
    input = document.getElementById('input').value;
}

function add() {
    input = document.getElementById('input')
    let value = input.value;
    let check = detailsArr.find((item)=> item.value.toLowerCase() === value.toLowerCase())
    if(check){
        error.innerHTML = `already used`
    }
    else{
       input.value = '';
   console.log(value);
   
    user = {
        value: value
    };

    detailsArr.push(user);
    error.innerHTML = ''
    updateUI()
    }
   
}

function updateUI() {
    let output = document.getElementById('output')
    output.innerHTML = '';
    detailsArr.forEach((items, index) => {
        output.innerHTML += `
        <p class = 'tet'>
            ${index + 1} 
            ${items.value}
            <button class="delt" onclick='dele(${index})'>Delete</button>
        </p>
        
        
        
        `
    })
}

function dele(minus) {
    detailsArr.splice(minus, 1)
    updateUI();

}

