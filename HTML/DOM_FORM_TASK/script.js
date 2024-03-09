document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var address = document.getElementById('address').value;
  var pincode = document.getElementById('pincode').value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var selectedFoods = document.querySelectorAll('input[name="food"]:checked');
  
  // Check if at least two food options are selected
  if (selectedFoods.length < 2) {
    alert("Please select at least two food options.");
    return;
  }
  
  var foods = [];
  selectedFoods.forEach(function(food) {
    foods.push(food.value);
  });
  var state = document.getElementById('state').value;
  var country = document.getElementById('country').value;
  
  var newRow = '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + address + '</td><td>' + pincode + '</td><td>' + gender + '</td><td>' + foods.join(', ') + '</td><td>' + state + '</td><td>' + country + '</td></tr>';
  
  document.querySelector('#myTable tbody').insertAdjacentHTML('beforeend', newRow);
  
  document.getElementById('myForm').reset();
});