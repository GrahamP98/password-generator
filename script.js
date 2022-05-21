// Assignment code here.
var generateBtn = document.querySelector("#generate");
var lowercaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["<", ">", ".", "/", "?", "'", "[", "{", "]", "}", "|", "=", "+", "-", "_", ")", "(", "*", "&", "^", "%", "$", "#", "@", "!", "~", "`",];
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var numsverify;
var specialverify;
var uppercaselettersverify;
var passwordlength;

// Function for figuring out password size.
function passwordsize() {
    passwordlength = prompt("How many characters would you like in your password? (must be at least 8 characters but no more than 128.)");
    //restricts password length less than 8 characters.
    if (passwordlength < 8) {
        alert("Password must have between 8-128 characters.");
        passwordsize();
    }
    //restricts password length more than 128 characters.
    else if (passwordlength > 128) {
        alert("Password must have between 8-128 characters.");
        passwordsize();
    }
    // is Nan (is not a number) if user inputs something thats not a number they are alerted that is must be a number through 8 and 128.
    else if (isNaN(passwordlength)) {
        alert("must be a number through 8 and 128.");
        passwordsize();
    }
    else {
        alert("You will be asked what you want included in your password. \n `No` input for the next prompts will issue a lowercase letter password.");
    }
    return passwordlength;
}

// Function for figuring out if user wants number(s) in password.
function numsverification() {
    // prompt is what messages the user and allows for input.
    numsverify = prompt("Do you want to use numbers in your password? \n(Yes or No)");
    numsverify = numsverify.toLowerCase();
    // if the user doesnt type anything they are alerted to type `yes` or `no`.
    if (numsverify === null || numsverify === []) {
        alert("Answer Yes or No.");
        numsverification();
    }
    // if user types `yes` it tells the password generator -include numbers.
    else if (numsverify === "yes" || numsverify === "y") {
        numsverify = true;
        return numsverify;
    }
    // if user types `no` it tells the password generator -dont include numbers.
    else if (numsverify === "no" || numsverify === "n") {
        numsverify = false;
        return numsverify
    }
    // if user types anything other than `yes` or `no` they are alerted to type either `yes` or `no`.
    else {
        alert("Answer Yes or No.");
        numsverification();
    }
    return numsverify;
}

// Function for figuring out if user wants special character(s) in password.
function specialverification() {
    // prompt is what messages the user and allows for input.
    specialverify = prompt("Do you want to use special characters in your password? \n(Yes or No)");
    specialverify = specialverify.toLowerCase();
    // if the user doesnt type anything they are alerted to type `yes` or `no`.
    if (specialverify === null || specialverify === []) {
        alert("Answer Yes or No.");
        specialverification();
    }
    // if user types `yes` it tells the password generator -include special characters.
    else if (specialverify === "yes" || specialverify === "y") {
        specialverify = true;
        return specialverify;
    }
    // if user types `no` it tells the password generator -dont include special characters.
    else if (specialverify === "no" || specialverify === "n") {
        specialverify = false;
        return specialverify
    }
    // if user types anything other than `yes` or `no` they are alerted to type either `yes` or `no`.
    else {
        alert("Answer Yes or No.");
        specialverification();
    }
    return specialverify;
}

// Function for figuring out if user wants Uppercase Letter(s) in password.
function uppercaselettersverificaiton() {
    // prompt is what messages the user and allows for input.
    uppercaselettersverify = prompt("Do you want to use Uppercase Letters in your password? \n(Yes or No)");
    uppercaselettersverify = uppercaselettersverify.toLowerCase();
    // if the user doesnt type anything they are alerted to type `yes` or `no`.
    if (uppercaselettersverify === null || uppercaselettersverify === []) {
        alert("Answer Yes or No.");
        uppercaselettersverificaiton();
    }
    // if user types `yes` it tells the password generator -include Uppercase letters.
    else if (uppercaselettersverify === "yes" || uppercaselettersverify === "y") {
        uppercaselettersverify = true;
        return uppercaselettersverify;
    }
    // if user types `no` it tells the password generator -dont include Uppercase letters.
    else if (uppercaselettersverify === "no" || uppercaselettersverify === "n") {
        uppercaselettersverify = false;
        return uppercaselettersverify
    }
    // if user types anything other than `yes` or `no` they are alerted to type either `yes` or `no`.
    else {
        alert("Answer Yes or No.");
        uppercaselettersverificaiton();
    }
    return uppercaselettersverify;
}

// Generates password using criteria inputed by user.
function generatePassword() {
    passwordsize();
    console.log(passwordlength);
    uppercaselettersverificaiton();
    console.log(uppercaselettersverify);
    numsverification();
    console.log(numsverify);
    specialverification();
    console.log(specialverify);
    // determines which characters to use. based on selection from user.
    var characters = lowercaseletters;
    var password = "";
    if (numsverify && specialverify && uppercaselettersverify) {
        characters = characters.concat(nums, special, uppercaseletters);
    }
    else if (numsverify && specialverify) {
        characters = characters.concat(nums, special);
    }
    else if (specialverify && uppercaselettersverify) {
        characters = characters.concat(special, uppercaseletters);
    }
    else if (numsverify && uppercaselettersverify) {
        characters = characters.concat(nums, uppercaseletters);
    }
    else if (numsverify) {
        characters = characters.concat(nums);
    }
    else if (uppercaselettersverify) {
        characters = characters.concat(uppercaseletters);
    }
    else if (specialverify) {
        characters = characters.concat(special);
    }
    else {
        characters === lowercaseletters;
    }
    let finalPassword = ""
    for (let i = 0; i < passwordlength; i++) {
        let rng = [Math.floor(Math.random() * characters.length)];
        finalPassword = finalPassword + characters[rng];
    }
    return finalPassword;
};

// Write password to the #password input.
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);