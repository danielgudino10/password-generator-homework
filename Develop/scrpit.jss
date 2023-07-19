// Assignment code here


// Get references to the #generate element
document.addEventListener("DOMContentLoaded", function() {
  const generateBtn = document.querySelector("#generate");
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
  const lowercase = "abcdefghijklmnopqrstuvwxyz" ;
  const number = "0123456789" ;
  const symbol = "!@#$%^&*()_+~*><" ;

  const allchars = uppercase + lowercase + number + symbol ;

  function generatePassword() {
    console.log("you clicked the button!");
    let password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]
  }

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while(length > password.length) {
      password += allchars[Math.floor(Math.random() * allchars.length)]
    }

    passwordText.value = password;

    return "generated password";
  }

  generateBtn.addEventListener("click", writePassword);
});
