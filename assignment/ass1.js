 //ASSIGNMENT---
//WRITE A CONDITIONAL STATEMENT TO CHECK CHARACTER TYPE.
//USING PROMPT, INPUT A CHARACTER AND CHECK IF IT'S A VOWEL, CONSONANT, DIGIT, OR SPECIAL CHARACTER.
//Make sure the values are checked either it is upperCase or lowerCase...
 
 
 
 //solution
// let char = prompt('Input a single character:');
// let lowerChar = char.toLocaleLowerCase();

// if (char.length < 1){
//     console.log('please enter any character');  
// }

// else if (lowerChar >= 'a' && lowerChar <='z'){
//     if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u'){
//         console.log(char + 'is a VOWEL.');
//     } else {
//         console.log(char + 'is a CONSONANT');
//     }
// }
// else if (char >= '0') {
//     console.log(char + 'is a DIGIT.');
// }
// else {
//     console.log(char + 'is a SPECIAL CHARACTER.');  
// }

//perfect solution
let character = prompt('enter any value').toLocaleLowerCase();
console.log(character);

if ((character >= 'a' && character <= 'z' )){
    if ('aeiou'.includes(character)){
        console.log(`It is a vowel`);
    }else{
        console.log(`It is a consonant`);
    }
}else if((character >= 0 && character <= 9)){
    console.log(`It is a digit`);   
}
else{
    console.log(`It is a special character`);
    
}

