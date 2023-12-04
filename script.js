function generatePassword() {
  var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '~', '`', '|', '}', '{', '[', ']', ':', ';', '?', '>', '<', ',', '.', '/', '-', '='];

  var includeLowerCase = prompt("Include lowercase letters? (yes/no)");
  var includeUpperCase = prompt("Include uppercase letters? (yes/no)");
  var includeNumeric = prompt("Include numbers? (yes/no)");
  var includeSpecialChars = prompt("Include special characters? (yes/no)");
  var isValidChoice = (includeLowerCase === 'yes' || includeUpperCase === 'yes' || includeNumeric === 'yes' || includeSpecialChars === 'yes');

  if (!isValidChoice) {
    alert("You must select at least one character type.");
    return "Invalid selection. Please try again.";
  }
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
