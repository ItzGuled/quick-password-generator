// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
var passwordLength = parseInt(prompt("How long will your password be? A length of at least 8 characters and no more than 128"));


if (!passwordLength) {
 alert("You need to provide a valid answer!");
 generatePassword();
} 
else if (passwordLength < 8 || passwordLength > 128) {
  alert("You need a password between 8 and 128 letters!");
  generatePassword();
} 
else {
  var confirmLowerCase = confirm("Do you want lowercase?");
  var confirmUpperCase = confirm("Do you want uppercase?");
  var confirmNumeric = confirm("Do you wany numbers?");
  var confirmSpecial = confirm("Do you want any special characters?");
}

if (!confirmLowerCase && !confirmUpperCase && !confirmNumeric && !confirmSpecial)
{
alert("You need to pick atleast one option!");
}



};

generatePassword()



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

