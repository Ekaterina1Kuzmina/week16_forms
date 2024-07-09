const form = document.forms.registrationForm;
const firstName = form.elements.firstName;
const email = form.elements.email;
const age = form.elements.age;
const profession = form.elements.select;
const password = form.elements.password;
const agree = form.elements.checkbox;

const errorName = document.getElementById('nameError');
const errorEmail = document.getElementById('emailError');
const errorAge = document.getElementById('numberError');
const errorProfession = document.getElementById('professionError');
const errorPassword = document.getElementById('passwordError');
const errorAgree = document.getElementById('agreeError');


form.addEventListener('submit', function(evt) {
evt.preventDefault();

if (firstName.value === '') {
    errorName.textContent = '! Введите свое имя (не менее 2 символов и не более 20)';
}  else if (firstName.value.length < 2) {
    errorName.textContent = '! Введите свое имя (не менее 2 символов)';}
    else if (firstName.value.length > 20) {
        errorName.textContent = '! Введите свое имя (не более 20 символов)';}
        else {
    errorName.textContent = '';
}

if (validateEmail(email.value) === false) {
    errorEmail.textContent = '! Введите корректный email';
} else {
    errorEmail.textContent = '';
}

if (age.value === '') {
    errorAge.textContent = '! Введите свой возраст';
} else {
    errorAge.textContent = '';
}

if (profession.options.selectedIndex === 0) {
errorProfession.textContent = '! Выберите свою профессию';
} else {
errorProfession.textContent = '';
}

if (validatePassword(password.value) === false) {
errorPassword.textContent = '! Введите пароль согласно правилам всплывающей подсказки';
} else {
errorPassword.textContent = '';
}

if (agree.checked === false) {
errorAgree.textContent = '! Вы должны согласиться c пользовательским соглашением';
} else {
errorAgree.textContent = '';
}
})

function validatePassword(password) {
let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/;
return regex.test(password);
} 

function validateEmail(email) {
let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;
return regex.test(email);
}

document.querySelectorAll('input[type="text"], input[type="email"], select, input[type="password"]').forEach(input => {
input.addEventListener('focus', function() {
    this.style.backgroundColor = '#EBF1D2';
    this.style.color = '#1b4d39';
});

input.addEventListener('blur', function() {
    this.style.backgroundColor = '#487C13'
    this.style.color = '#FFFAFA';
});
});