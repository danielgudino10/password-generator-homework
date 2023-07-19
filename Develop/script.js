var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!@#$%^&*()_+~*><";

function generatePassword() {
  var password = "";
  var length = parseInt(prompt("Enter the length of the password (min 8, max 128):"));

  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Invalid length. Please enter a number between 8 and 128:"));
  }

 var useUppercase = confirm("Do you want to include uppercase letters?");
 var useLowercase = confirm("Do you want to include lowercase letters?");
 var useNumbers = confirm("Do you want to include numbers?");
 var useSymbols = confirm("Do you want to include symbols?");

  var chars = "";
  if (useUppercase) chars += uppercase;
  if (useLowercase) chars += lowercase;
  if (useNumbers) chars += number;
  if (useSymbols) chars += symbol;

  if (chars === "") {
    alert("You must select at least one character type.");
    return "";
  }

  for (var i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  return password;
}

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", function() {
 var password = generatePassword();
  passwordText.value = password;
});
.
