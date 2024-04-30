function getFormvalue() {
    // Retrieve the value of the first name input field
    var firstName = document.getElementById('form1').elements['fname'].value;
    
    // Retrieve the value of the last name input field
    var lastName = document.getElementById('form1').elements['lname'].value;
    
    // Concatenate the first and last name
    var fullName = firstName + ' ' + lastName;
    
    // Display the full name in an alert
    alert(fullName);
}