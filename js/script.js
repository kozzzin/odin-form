document.addEventListener("DOMContentLoaded", function() {
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#confirm_pass');
    document.querySelector('button').addEventListener('click',function(e) {
        e.preventDefault();
    });
    passwordConfirm.addEventListener('keyup',function(event){
        const errorDiv = document.querySelector('.error');
        if (password.value != passwordConfirm.value) {
            errorDiv.style.opacity = 1;
            passwordConfirm.setCustomValidity("Passwords do not match.");
        } else {
            errorDiv.style.opacity = 0;
            passwordConfirm.setCustomValidity("");
        }
    });
});