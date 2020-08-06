var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
const inputArr = input.split('')
var shift = parseInt(readline.question('How many letters would you like to shift? '));

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n' , 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const caesarCipher = () => {
    let cipherArr = [];
    
    for(i = 0; i < inputArr.length; i++) {
        let abcIndex = alphabet.indexOf(inputArr[i]) + shift
        if(alphabet.indexOf(inputArr[i])=== -1) {
            cipherArr.push('')
        } else {
        cipherArr.push(alphabet[abcIndex])
        
        }
        if(cipherArr.length === inputArr.length) {
            
        console.log(cipherArr.join(''))
        }
    }
}
caesarCipher()
