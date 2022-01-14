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
  var passwordLength = parseInt(
    prompt(
      "How long will your password be? A length of at least 8 characters and no more than 128"
    )
  );

  if (!passwordLength) {
    alert("You need to provide a valid answer!");
    generatePassword();
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("You need a password between 8 and 128 letters!");
    generatePassword();
  } else {
    var confirmLowerCase = confirm("Do you want lowercase?");
    var confirmUpperCase = confirm("Do you want uppercase?");
    var confirmNumeric = confirm("Do you want numbers?");
    var confirmSpecial = confirm("Do you want any special characters?");
  }

  if (
    !confirmLowerCase &&
    !confirmUpperCase &&
    !confirmNumeric &&
    !confirmSpecial
  ) {
    alert("You need to pick atleast one option!");
  }
  randomPassword(
    passwordLength,
    confirmLowerCase,
    confirmUpperCase,
    confirmNumeric,
    confirmSpecial
  );
}

function randomPassword(
  passwordLength,
  confirmLowerCase,
  confirmUpperCase,
  confirmNumeric,
  confirmSpecial
) {
  // know password length
  console.log("passwordLength", passwordLength);
  //need to know if they say yes to lower case
  //make variables that are lower case make character choice
  // confirmLowerCase
  var chars = "";

  console.log(confirmLowerCase);
  if (confirmLowerCase) {
    chars += "abcdefghijklmnopqrstuvwxy";
  }

  console.log(confirmUpperCase);
  if (confirmUpperCase) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  console.log(confirmNumeric);
  if (confirmNumeric) {
    var chars = "0123456789";
  }

  console.log(confirmSpecial);
  if (confirmSpecial) {
    var chars = "!@#$%^&*_-+=9";
  }

  //var length = parseInt(
  //prompt('How many characters would you like your password to contain?')
  //var hasSpecialCharacters = confirm(
  // 'Click OK to confirm including special characters.'
  // );
  //concat string together
  //loop
  //math.random
  //selecing the random string from the possibleCharacter
  //1. you should have an array for all of the options available for the password.
  //The arrays are strings that contains either the capital letter options, the lowercase options etc.
  //like this var upperCaseLetters = [“A”, “B”, “C”]
  //Then what you want to do is have confirm boxes to ask the user “if they want to include uppercase letters in the password?

  for (var i = 0; i < string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
