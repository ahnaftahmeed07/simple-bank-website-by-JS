// Step-1: add click handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // Step-2: get the email address inside the email input field
    // Always remember to use .value to get text from an input field
     const emailField = document.getElementById('user-email');
     const email = emailField.value;
    //  Step-3: get the password
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    // Danger: Do not verify email and password on the client side
    // Step-4: Verify email and password 
    if(email === 'ahnaf123@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Please enter the valid email and password');
    }
})