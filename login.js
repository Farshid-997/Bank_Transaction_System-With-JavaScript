document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.Value;

    //get user password

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail != '' && userPassword != '') {

        // window.location.assign('banking.html');

        window.location.href = 'banking.html'
    }
});

