document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const contact = document.getElementById('Contact');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const successMessage = document.getElementById('success-message');
    const closeButton = document.getElementById('close-button');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateInputs()) {
            window.location.href = 'success.html';
        }
    });

    closeButton.addEventListener('click', () => {
        successMessage.style.display = 'none';
    });

    // validation event listeners
    username.addEventListener('input', () => validateUsername());
    email.addEventListener('input', () => validateEmail());
    contact.addEventListener('input', () => validateContact());
    password.addEventListener('input', () => validatePassword());
    password2.addEventListener('input', () => validatePassword2());

    function validateInputs() {
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isContactValid = validateContact();
        const isPasswordValid = validatePassword();
        const isPassword2Valid = validatePassword2();

        return isUsernameValid && isEmailValid && isContactValid && isPasswordValid && isPassword2Valid;
    }

    function validateUsername() {
        if (username.value.trim() === '') {
            setError(username, 'Username cannot be blank');
            return false;
        } else if (username.value.trim().length <= 3) {
            setError(username, 'Username must be greater than 3 characters');
            return false;
        } else {
            setSuccess(username);
            return true;
        }
    }

    function validateEmail() {
        if (email.value.trim() === '') {
            setError(email, 'Email cannot be blank');
            return false;
        } else if (!isValidEmail(email.value.trim())) {
            setError(email, 'Email is not valid');
            return false;
        } else {
            setSuccess(email);
            return true;
        }
    }

    function validateContact() {
        if (contact.value.trim() === '') {
            setError(contact, 'Contact cannot be blank');
            return false;
        } else if (!isValidPhone(contact.value.trim())) {
            setError(contact, 'Contact must be a valid 10-digit number');
            return false;
        } else {
            setSuccess(contact);
            return true;
        }
    }

    function validatePassword() {
        if (password.value.trim() === '') {
            setError(password, 'Password cannot be blank');
            return false;
        } else {
            setSuccess(password);
            return true;
        }
    }

    function validatePassword2() {
        if (password2.value.trim() === '') {
            setError(password2, 'Confirm Password cannot be blank');
            return false;
        } else if (password.value.trim() !== password2.value.trim()) {
            setError(password2, 'Passwords do not match');
            return false;
        } else {
            setSuccess(password2);
            return true;
        }
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
        small.style.visibility = 'visible';
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
        const small = formControl.querySelector('small');
        small.style.visibility = 'hidden';
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        // A basic validation for phone number: must be exactly 10 digits long
        return /^\d{10}$/.test(phone);
    }
});
