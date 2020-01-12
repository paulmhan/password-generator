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


// prompt user to choose length of password, between 8-128 characters once generate button is clicked
document.getElementById("generate").addEventListener("click", promptProperties)

function promptProperties() {
    let numericCharacters = confirm("Would you like to numeric characters in your password?");
    let lowerCaseCharacters = confirm("Would you like lowercase characters in your password?");
    let upperCaseCharacters = confirm("Would you like uppercase characters in your password?")
}

//






//prompt user if they want numbers, lowercase characters, and/or uppercase characters
//at least one of these must be chosen, if not, alert at least one must be chosen

//after all of the prompts, random password with all chosen propertie must be displayed in text box



