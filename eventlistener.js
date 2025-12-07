//addEventListener is a function that allows you to attach an event to a HTML elemet
//without overwriting other events
//It takes 3 parameters;
//i. eventType-- a string describing the event
//ii. callbackfunction-- i.e the function that should run when the event fires.
//iii. condition-- can be any data type but this is only based on the type of activity or logic you want.


//document.addEventListener('DOMContentLoaded', ()=> {})
let playBtn = document.getElementById('playBtn')
let audio = new Audio("./audio/BNXN-fka-Buju-PRAY-(JustNaija.com).mp3")
playBtn.addEventListener('click', ()=>{
    audio.play()
})


let pauseBtn = document.getElementById('pauseBtn')
pauseBtn.addEventListener('click', ()=>{
    audio.pause()
})

let pausePlayBtn = document.getElementById('pausePlayBtn')
pausePlayBtn.addEventListener('click', ()=>{
    audio.paused ? audio.play() : audio.pause()

})


let today = new Date();
console.log(today);
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.getFullYear());
// console.log(today.getMonth() + 1);
// console.log(today.setMinutes(40));

let updateYear = document.getElementById('updateYear');
updateYear.innerHTML += `${today.getFullYear()} Your Company Name. All rights reserved`





