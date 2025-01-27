document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const name = document.getElementById('name');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

    if (!email.includes("@")) {
        alert("@ is missing in the email");
        return;
    }
    if (!regex.test(password)) {
        alert("Password must be strong and alteast 8 character.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    alert('Signup successfull!');
    document.getElementById('signup-form').reset();
    window.location.href = 'Login.html'; 
});
