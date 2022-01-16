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
  var chars = "";

  if (confirmLowerCase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }

  if (confirmUpperCase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (confirmNumeric) {
    chars += "0123456789";
  }

  if (confirmSpecial) {
    chars += "!@#$%^&*_-+=";
  }

  var arr = chars.split("");

  for (var i = 0; i < passwordLength; i++) {
    var rnum = Math.floor(Math.random() * arr.length);
    finalOutput.push(arr[rnum]);
  }
  var finalString = finalOutput.join("");

  writePassword(finalString);
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
