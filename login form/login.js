document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;


    if (!email.includes("@")) {
        alert("@ is missing in the email");
        return;
    }
     if (!regex.test(password)) {
        alert("Password must be strong and alteast 8 character.");
        return;
    }

    alert('Login successful!');
    document.getElementById('login-form').reset();
});
