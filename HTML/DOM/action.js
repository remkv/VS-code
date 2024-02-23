function changeColor(){
  document.getElementById('color').style.color = 'yellow';
}

let userPrompt = prompt("Please enter a name");
document.getElementById('userprompt').innerHTML = userPrompt;




function countCharacters(textarea) {
  const textLength = textarea.value.length;
  document.getElementById('characterCount').textContent = 'Character count: ' + textLength;
}

function showCoordinates(event) {
  const x = event.clientX;
  const y = event.clientY;
  document.getElementById("coordinates").innerText = "X: " + x + ", Y: " + y;
}

function bintoDecimal(){
  let decimalNumber = 1;
let num = decimalNumber.toString(2);
console.log("Binary number:", num);
}

function hexatoDecimal (){
  let decimalNumber = 2;
let num = decimalNumber.toString(16);
console.log("Hexadecimal number:", num);

function checkKey(event) {
  // Get the keycode of the pressed key
  var keyCode = event.keyCode || event.which;

  // Check if the pressed key is the spacebar (keycode 32)
  if (keyCode === 32) {
    alert("Thank You..!!");
    window.close(); // Close the current window
  } else {
    alert("Invalid Key Pressed");
  }
}

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Check if name field is empty
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  // Check if email field is empty
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }

  // Check if email is valid
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    return false;
  }

  // Form is valid
  return true;
}
}