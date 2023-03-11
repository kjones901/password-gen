var generateBtn = document.querySelector("#generate");
var specChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "`", "{", "|", "}","~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var combined = [];

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function passwordLength(numAmount) {
  var str = '';
  for(var i = 0; i <combined.length; i++){
    var arr = combined[i];
    var index = Math.floor(Math.random() * (arr.length-1));
    str += arr[index];
  }

  for(var i = 0; i < numAmount - combined.length; i++) {
    var index = Math.floor(Math.random() * (combined.length-1));
    var arr = combined[index];
    var value = Math.floor(Math.random() * (arr.length-1));
    str += arr[value];
  }

  return str;
}

function generatePassword(){
  var lengthP = prompt("How long would you like your password? (8 - 128 Characters)")

  var lowercaseP = confirm("Would you like lowercase characters?")

      if (lowercaseP == true) {
        combined.push(lowercase);
      } 
  
  var uppercaseP = confirm("Would you like UPPERCASE characters?")

      if (uppercaseP == true) {
        combined.push(uppercase);
      }

  var specCharsP = confirm("Would you like special characters?")

      if (specCharsP == true) {
        combined.push(specChars);
      }

  var numbersP = confirm("Would you like numeric characters?")

      if (numbersP == true) {
        combined.push(numbers);
      } 

      var answer = passwordLength(lengthP);
      console.log(answer);

  return answer
  }
 
generateBtn.addEventListener("click", writePassword);