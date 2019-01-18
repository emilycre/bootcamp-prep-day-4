// eslint-disable-next-line
function greet() {
    
    // get the names input by ID
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    
    // get values out of the inputs
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    
    // make greeting
    var greeting = 'Hello, ' + firstName +  lastName + '!';
    console.log(greeting);

    // display greeting


    // remove prompt

}

// TODO: validate name inputs
// TODO: clear inputs after greet?