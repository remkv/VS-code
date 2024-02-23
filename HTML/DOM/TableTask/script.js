function submitForm() {
  var form = document.getElementById("myForm");
  var firstName = form.elements["firstname"].value;
  var lastName = form.elements["lastname"].value;
  var address = form.elements["address"].value;
  var pincode = form.elements["pincode"].value;
  var gender = form.elements["gender"].value;
  var foods = [];
  var foodSelect = form.elements["food"];
  for (var i = 0; i < foodSelect.options.length; i++) {
    if (foodSelect.options[i].selected) {
      foods.push(foodSelect.options[i].value);
    }
  }
  var state = form.elements["state"].value;
  var country = form.elements["country"].value;

  var tableBody = document.getElementById("tableBody");
  var newRow = tableBody.insertRow();
  newRow.insertCell().textContent = firstName;
  newRow.insertCell().textContent = lastName;
  newRow.insertCell().textContent = address;
  newRow.insertCell().textContent = pincode;
  newRow.insertCell().textContent = gender;
  newRow.insertCell().textContent = foods.join(", ");
  newRow.insertCell().textContent = state;
  newRow.insertCell().textContent = country;

  form.reset();
  return false;
}
