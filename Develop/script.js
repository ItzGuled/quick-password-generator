//Initialize an empty array 
let finalOutput = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");
// Write password to the #password input
function writePassword(finalString) {
  passwordText.value = finalString; 
}

// function clearValue() {
//   passwordText.value = '';
//   generatePassword();
// }

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
    chars += "abcdefghijklmnopqrstuvwxyz";
  }

  console.log(confirmUpperCase);
  if (confirmUpperCase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  console.log(confirmNumeric);
  if (confirmNumeric) {
    chars += "0123456789";
  }

  console.log(confirmSpecial);
  if (confirmSpecial) {
    chars += "!@#$%^&*_-+=";
  }

  console.log('line 85', chars);
  console.log('line 86', chars.split('')); 

  var arr = chars.split('');
  console.log('line 89', arr.length);

  for (var i = 0; i < passwordLength; i++) {

    var rnum = Math.floor(Math.random() * arr.length);
    finalOutput.push(arr[rnum]);
  }
  var finalString = finalOutput.join('')
  console.log('line 113', finalString);
  writePassword(finalString);
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
