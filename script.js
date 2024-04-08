// function showRegistration() {
//     document.getElementById('signinSection').style.display = 'none';
//     document.getElementById('registrationSection').style.display = 'block';
// }

// function sendOTP() {
//     const phoneNumber = document.getElementById('phone').value;
//     // Simulate sending OTP via SMS (in a real app, use a backend to send OTP)
//     alert(`OTP sent to ${phoneNumber}. For demo purposes, enter any OTP to register.`);
// }

// function registerUser(event) {
//     event.preventDefault();

//     const formData = new FormData(document.getElementById('registrationForm'));
//     const name = formData.get('name');
//     const phone = formData.get('phone');
//     const password = formData.get('password');

//     alert(`Registration successful for ${name} with phone number ${phone}!`);
//     // Simulate redirection to the next page after successful registration
//     // Replace the following line with actual redirection logic
//     window.location.href = 'next-page.html';
// }

// function signIn(event) {
//     event.preventDefault();

//     const phoneSignIn = document.getElementById('phoneSignIn').value;
//     const passwordSignIn = document.getElementById('passwordSignIn').value;

//     // Simulate authentication (in a real app, validate credentials against a backend)
//     alert(`Sign In successful for phone number ${phoneSignIn}!`);
//     // Simulate redirection to the next page after successful sign in
//     // Replace the following line with actual redirection logic
//     window.location.href = 'next-page.html';
// }
function showRegistration() {
    document.getElementById('signinSection').style.display = 'none';
    document.getElementById('registrationSection').style.display = 'block';
}

function sendOTP() {
    const phoneNumber = document.getElementById('phone').value;
    // Simulate sending OTP via SMS (in a real app, use a backend to send OTP)
    alert(`OTP sent to ${phoneNumber}. For demo purposes, enter any OTP to register.`);
}

function registerUser(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('registrationForm'));
    const name = formData.get('name');
    const phone = formData.get('phone');
    const password = formData.get('password');

    alert(`Registration successful for ${name} with phone number ${phone}!`);
    // Simulate redirection to the next page after successful registration
    // Replace the following line with actual redirection logic
    window.location.href = 'inde.html';
}

function signIn(event) {
    event.preventDefault();

    const phoneSignIn = document.getElementById('phoneSignIn').value;
    const passwordSignIn = document.getElementById('passwordSignIn').value;

    // Simulate authentication (in a real app, validate credentials against a backend)
    alert(`Sign In successful for phone number ${phoneSignIn}!`);
    // Simulate redirection to the next page after successful sign in
    // Replace the following line with actual redirection logic
    window.location.href = 'inde.html';
}

