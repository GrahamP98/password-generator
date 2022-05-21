// Assignment code here.
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "<>,./?'[{]}|=+-_)(*&^%$#@!~`";
var nums = "0123456789";
var numsverify;
var specialverify;
var uppercaselettersverify;
var passwordlength;


// Get references to the #generate element.
var generateBtn = document.querySelector("#generate");

// Function for figuring out password size.
function passwordsize() {
    passwordlength = prompt("How many characters would you like in your password? (must be at least 8 characters but no more than 128.)");

    if (passwordlength < 8){
        alert("Password must have between 8-128 characters.");
        passwordsize();
    }
    else if (passwordlength > 128){
        alert("Password must have between 8-128 characters.");
        passwordsize();
    }
    else {
        alert("You will be asked what you want included in your password. \n `No` input for the next prompts will issue a lowercase letter password.");
    }
    return passwordlength;
}
// Function for figuring out if user wants number(s) in password.
function numsverification(){
    numsverify = prompt("Do you want to use numbers in your password? \n(Yes or No)");
    numsverify = numsverify.toLowerCase();
    


    return numsverify;
}
// Generates password using criteria inputed by user. !showing as "undefined"!
function generatePassword(){
    passwordsize();
    console.log(passwordsize);
    numsverification();
    console.log(numsverify);

    var characters = lowercaseletters;
    var password = "";
    if (numsverify && specialverify && uppercaselettersverify){
        characters += nums + special + uppercaseletters;
    }
    else if (numsverify && specialverify){
        characters += nums + special;
    }
    else if (specialverify && uppercaselettersverify){
        characters += special + uppercaseletters;
    }
    else if (numsverify && uppercaselettersverify){
        characters += nums + uppercaseletters;
    }
    else if (numsverify){
        characters += nums;
    }
    else if (uppercaselettersverify){
        characters += uppercaseletters;
    }
    else if (specialverify){
        characters += special;
    }
    else{
        characters === lowercaseletters;
    }
    return password;
}

// Write password to the #password input.
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);