// The assignment is to create a Password generator that, based on criteria the user chooses, generate a password containing 8 to 128 characters.
// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// declaring variables 
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// declaring global variables
var lengthConf = "";
var specialCharConf;
var numCharConf;
var upperCharConf;
var lowerCharConf;

// Prompt to confirm numebr of characters user wants
function makePassword() {
  var lengthConf = (prompt("How many characters should it contain?"));

  // In case answers are invalid 
  while(lengthConf <= 7 || lengthConf >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var lengthConf = (prompt("How many characters should it contain?"));
      } 

    // Determine parameters of password 
    var specialCharConf = confirm("Do you want it to contain special characters OK=Yes Cancel=No");
    var numCharConf = confirm("Do you want it to contain numbers OK=Yes Cancel=No");    
    var lowerCharConf = confirm("Do you want it to contain lowercase alphabet OK=Yes Cancel=No");
    var upperCharConf = confirm("Do you want it to contain uppercase alphabet OK=Yes Cancel=No");

      // In case answers are invalid 
      while(upperCharConf === false && lowerCharConf === false && specialCharConf === false && numCharConf === false) {
        alert("You must choose at least one parameter");
        var specialCharConf = confirm("Do you want it to contain special characters OK=Yes Cancel=No");
        var numCharConf = confirm("Do you want it to contain numbers OK=Yes Cancel=No");    
        var lowerCharConf = confirm("Do you want it to contain lowercase alphabet OK=Yes Cancel=No");
        var upperCharConf = confirm("Do you want it to contain uppercase alphabet OK=Yes Cancel=No");
      }

      // what password parameters do 
      var charactersUsed = []
      
    if (specialCharConf) {
      charactersUsed = charactersUsed.concat(specialChar)
    }

    if (numCharConf) {
      charactersUsed = charactersUsed.concat(number)
    }
      
    if (lowerCharConf) {
      charactersUsed = charactersUsed.concat(lowerChar)
    }

    if (upperCharConf) {
      charactersUsed = charactersUsed.concat(upperChar)
    }

      // the loop that is selecting random characters into a string
      var passwordFinale = ""
      
      for (var i = 0; i < lengthConf; i++) {
        passwordFinale = passwordFinale + charactersUsed[Math.floor(Math.random() * charactersUsed.length)];
      }
      return passwordFinale;
}

// Write final password
function writePassword() {
  var password = makePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


