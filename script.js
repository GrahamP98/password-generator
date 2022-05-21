// Assignment code here
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "<>,./?'[{]}|=+-_)(*&^%$#@!~`"
var nums = "0123456789"
var numscheck;
var specialcheck;
var uppercaseletterscheck;
var password length;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);