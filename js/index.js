document.getElementById('submit-button').addEventListener('click', function () {
    // get name input
    const nameInput = document.getElementById('name-input');
    const nameInputValue = nameInput.value;
    //get email input
    const passwordInput = document.getElementById('passwor-input');
    const passwordInputValue = passwordInput.value;
    if (nameInputValue == 'mdsani' && passwordInputValue == '12345') {
        window.location.href = 'bank.html'
    }
    nameInput.value = '';
    passwordInput.value = '';
})