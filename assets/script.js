// Variables containing arrays of character Types

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



// Functions that pull one character from each array type selected by user. And then continues to randomly fill to the length designated by user.
function passwordLength(numAmount) {
  var str = '';
  for(var i = 0; i < combined.length; i++){
    var arr = combined[i];
    var index = Math.floor(Math.random() * (arr.length));
    str += arr[index];
  }

  for(var i = 0; i < numAmount - combined.length; i++) {
    var index = Math.floor(Math.random() * (combined.length));
    var arr = combined[index];
    var value = Math.floor(Math.random() * (arr.length));
    str += arr[value];
  }

  return str;
}



function generatePassword(){
// Clears the array if an array is already present and redirects the user to input a number value if they input something else and to set a length between 8 and 128. 

  combined = [];
  console.log(combined);
  var lengthP = prompt("How long would you like your password? (8 - 128 Characters)")
    if(lengthP < 8 || lengthP > 128 || isNaN(lengthP) ) {
      alert("Password must be between 8-128 Characters")
      return "Try Again"
    }

  //Goes through each character type pushing the arrays of selected character types into a larger array to draw characters from.
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
