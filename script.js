// // Assignment Code
// let generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER

//MY CODE STARTS HERE ------------------------------------------------------------------------------------------------



//establish variables
const numbers = [0, 1, 2, 3, 4, 5, 6, 7 ,8 ,9]
const lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// prompt user to choose length of password, between 8-128 characters once generate button is clicked

document.getElementById("generate").addEventListener("click", generatePassword);

//write function here

function generatePassword() {
numChar = prompt("How many characters would you like your password to be? Must be between 8-128 characters.");
    charLength = parseInt(numChar,10);
    if (charLength < 8 || charLength > 128){
        alert("The password length must be between 8-128 characters.");
        return generatePassword();
    }
    let numericCharacters = confirm("Would you like to numeric characters in your password?");
    let lowerCaseCharacters = confirm("Would you like lowercase characters in your password?");
    let upperCaseCharacters = confirm("Would you like uppercase characters in your password?");
    if (numericCharacters === false && lowerCaseCharacters === false && upperCaseCharacters === false){
        alert("You must select as least one character type!");
        return generatePassword();
    }
    for(i = 0; i <= charLength; i++){
        if (numericCharacters === true && lowerCaseCharacters === true && upperCaseCharacters === true){
            // then randomly generate from all three
        }
        if (numericCharacters === true && lowerCaseCharacters === true && upperCaseCharacters === false){
            // then only from those two
        }
        if (numericCharacters === true && lowerCaseCharacters === false && upperCaseCharacters === false){
            //only one
        }
        if (numericCharacters === false && lowerCaseCharacters === true && upperCaseCharacters === true){
            // those two
        }
        if (numericCharacters === false && lowerCaseCharacters === false && upperCaseCharacters === true){
            // only one
        }
        if (numericCharacters === false && lowerCaseCharacters === true && upperCaseCharacters === false){
            // only one
        }
        if(numericCharacters === true && lowerCaseCharacters === false && upperCaseCharacters === true){
            //only two
        }


    }
    
}












