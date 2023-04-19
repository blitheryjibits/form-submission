let password = document.querySelector('#password');
let password2 = document.querySelector('#confirm-password');
let phone = document.querySelector('#phone-number');

password.addEventListener('keyup', () => {
    if(!password.value.match('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')) {
        password.nextElementSibling.classList.add('visible');
    } else {
        password.nextElementSibling.classList.remove('visible');
    }
});

password2.addEventListener('keyup', () => {
    if (password.value !== password2.value && password2.value.length > 0) {
        password2.nextElementSibling.classList.add('visible');
    } else {
        password2.nextElementSibling.classList.remove('visible');
    }
});

// phone.addEventListener('keyup', () => {
    
// });