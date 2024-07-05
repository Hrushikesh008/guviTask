document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let email = document.getElementById('email').value;
        let address = document.getElementById('address').value;
        let pincode = document.getElementById('pincode').value;
        let gender = document.querySelector('input[name="gender"]:checked').value;

        let foods = [];
        document.querySelectorAll('input[name="food"]:checked').forEach(function(food) {
            foods.push(food.value);
        });

        if (foods.length < 2) {
            alert("Please select at least two food items.");
            return;
        }

        let state = document.getElementById('state').value;
        let country = document.getElementById('country').value;

        let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        let newRow = table.insertRow();

        newRow.insertCell(0).innerText = firstName;
        newRow.insertCell(1).innerText = lastName;
        newRow.insertCell(2).innerText = email;
        newRow.insertCell(3).innerText = address;
        newRow.insertCell(4).innerText = pincode;
        newRow.insertCell(5).innerText = gender;
        newRow.insertCell(6).innerText = foods.join(', ');
        newRow.insertCell(7).innerText = state;
        newRow.insertCell(8).innerText = country;

        document.getElementById('registrationForm').reset();
    });
});
