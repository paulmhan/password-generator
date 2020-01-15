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
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let numChar;


// prompt user to choose length of password, between 8-128 characters once generate button is clicked
document.getElementById("generate").addEventListener("click", confirmProperties);
document.getElementById("generate").addEventListener("click", generatePassword);



function confirmProperties() {
    numChar = prompt("How many characters would you like your password to be? Must be between 8-128 characters.");
    charLength = parseInt(numChar,10);
    if (charLength < 8 || charLength > 128){
        alert("The password length must be between 8-128 characters.");
        return confirmProperties();
    }
    let numericCharacters = confirm("Would you like to numeric characters in your password?");
    let lowerCaseCharacters = confirm("Would you like lowercase characters in your password?");
    let upperCaseCharacters = confirm("Would you like uppercase characters in your password?");
    if (numericCharacters == false && lowerCaseCharacters == false && upperCaseCharacters == false){
        alert("You must select as least one character type!");
        return confirmProperties();

    }
}



function generatePassword(){
    for(i = 0; i <= charLength; i++){
        if()
    }
}










//there are nine different outcomes that are possible






//prompt user if they want numbers, lowercase characters, and/or uppercase characters
//at least one of these must be chosen, if not, alert at least one must be chosen

//after all of the prompts, random password with all chosen propertie must be displayed in text box



