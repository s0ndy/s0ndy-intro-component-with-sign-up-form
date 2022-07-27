const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('.button');
const warningFirstName = document.querySelector('.warning-first-name');
const warningLastName = document.querySelector('.warning-last-name');
const warningEmail = document.querySelector('.warning-email');
const warningPassword = document.querySelector('.warning-password');
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const checkFirstName = () => {
    if(firstName.value == '') {
        warningFirstName.style.display = 'inline';
        firstName.style.border = '2px solid hsl(0, 100%, 74%)';

    } else {
        warningFirstName.style.display = 'none';
        firstName.style.border = '1px solid hsl(248, 32%, 49%)';
    }
}

const checkLastName = () => {
    if(lastName.value == '') {
        warningLastName.style.display = 'inline';
        lastName.style.border = '2px solid hsl(0, 100%, 74%)';
    } else {
        warningLastName.style.display = 'none';
        lastName.style.border = '1px solid hsl(248, 32%, 49%)';
    }
}

const checkMail = () => {
    if(!email.value.match(mailFormat)) {
        warningEmail.style.display = 'inline';
        email.style.border = '2px solid hsl(0, 100%, 74%)';
    } else {
        warningEmail.style.display = 'none';
        email.style.border = '1px solid hsl(248, 32%, 49%)';
    }
}

const checkPassword = () => {
    if(password.value == '') {
        warningPassword.style.display = 'inline';
        password.style.border = '2px solid hsl(0, 100%, 74%)';
    } else {
        warningPassword.style.display = 'none';
        password.style.border = '1px solid hsl(248, 32%, 49%)';
    }
}

button.addEventListener('click', () => {checkFirstName(), checkLastName(), checkPassword(), checkMail()})

