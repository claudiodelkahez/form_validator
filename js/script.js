const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
//check email is valid

function isValidEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


//event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is requiered')
    } else {
        showSucces(username);
    }

    if (email.value === '') {
        showError(email, 'email is requiered')
    } else if (!isValidEmail(email.value)) {
        showError(email, 'email is not valid')
    } else {
        showSucces(email);
    }
    if (password.value === '') {
        showError(password, 'password requiered')
    } else {
        showSucces(password);
    }
    if (password2.value === '') {
        showError(password2, 'email is requiered')
    } else {
        showSucces(password2);
    }
});