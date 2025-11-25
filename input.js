let detailsArr = [];
let user
let input;
function show(){
    input = '';
    input = document.getElementById('input').value;  
}

function add(){
    input = document.getElementById('input')
    let value = input.value;
    
    input.value ='';
console.log(value);

 user = {
    value: value
};
detailsArr.push(user)
updateUI()
}

function updateUI(){
    let output = document.getElementById('output')
    output.innerHTML = '';
    detailsArr.forEach((items, index)=>{
        output.innerHTML +=`
        <p>
            ${index + 1}
            ${items.value}
            <button class="delt" onclick='dele(${index})'>Delete</button>
        </p>
        
        
        
        `
})
}

function dele(minus){
    detailsArr.splice(minus, 1)
    updateUI();

}