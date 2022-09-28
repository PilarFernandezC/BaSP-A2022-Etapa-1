window.onload = function () {

    var inputEmail = document.getElementById('email');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputPassword = document.getElementById('password');

    function countNumbers (input) {
        var contNumber = 0;
        var i = 0;
        while (contNumber == 0 && i <= input.value.length) {
            if ((input.value.charCodeAt(i) > 47) && (input.value.charCodeAt(i) < 58)) {
                contNumber = contNumber + 1;
            }
            i = i + 1;
        }
        return contNumber;
    }

    function countLetters (input2) {
        var contLetter = 0;
        var i2 = 0;
        while (contLetter <= 3 && i2 <= input2.value.length) {
            if ((input2.value.charCodeAt(i2) > 64 && input2.value.charCodeAt(i2) < 91) || 
            (input2.value.charCodeAt(i2) > 96 && input2.value.charCodeAt(i2) < 123) || 
            (input2.value.charCodeAt(i2) > 129 && input2.value.charCodeAt(i2) < 131) || (input2.value.charCodeAt(i2) > 159 && input2.value.charCodeAt(i2) < 166)) {
                contLetter = contLetter + 1;
            }
            i2 = i2 + 1;
        }
        return contLetter;
    }

    function validateAll (input3) {
        var end3 = input3.value.length -1;
        for (i3=0; i3<=end3; i3++) {
            if (input3.value.charCodeAt(i3) < 32 || (input3.value.charCodeAt(i3) > 32 && input3.value.charCodeAt(i3) < 48)
             || (input3.value.charCodeAt(i3) > 57 && input3.value.charCodeAt(i3) < 65) || 
             (input3.value.charCodeAt(i3) > 90 && input3.value.charCodeAt(i3) < 97) ||
            (input3.value.charCodeAt(i3) > 122 && input3.value.charCodeAt(i3) < 130) || 
            (input3.value.charCodeAt(i3) > 130 && input3.value.charCodeAt(i3) < 160) ||
            (input3.value.charCodeAt(i3) > 165)) {
                return true;
            }
        }
    }

    function countSpaces (input4) {
        var contSpace = 0;
        var i4 = 0;
        while (contSpace == 0 && i4 <= input4.value.length) {
            if (input4.value.charCodeAt(i4) == 32) {
                contSpace = contSpace + 1;
            }
            i4 = i4 + 1;
        }
        return contSpace;
    }

    function validateEmail() {
        return emailExpression.test(inputEmail.value);
    }

    inputEmail.onblur = function () {
        if (!validateEmail()) {
            inputEmail.classList.add('red-border');
        } else {
            inputEmail.classList.add('green-border');
        }
    }

    inputEmail.onfocus = function () {
        inputEmail.classList.remove('red-border');
        inputEmail.classList.remove('green-border');
    }

    function validatePassword() {
        if (inputPassword.value.length < 8 || validateAll(inputPassword) || countSpaces(inputPassword) !== 0 || countLetters(inputPassword) == 0 || countNumbers(inputPassword) == 0) {
            return true;
        } else {
            return false;
        }
    }

    inputPassword.onblur = function () {
        if (validatePassword()) {
            inputPassword.classList.add('red-border');
        } else {
            inputPassword.classList.add('green-border');
        }
    }

    inputPassword.onfocus = function () {
        inputPassword.classList.remove('red-border');
        inputPassword.classList.remove('green-border');
    }

    var submitButton = document.getElementById('btn');
    submitButton.onclick = function(e) {
        e.preventDefault();
        var errorMessage = [];
        var confirmMessage = [];

        if (!validateEmail()) {
            errorMessage.push('email')
            inputEmail.classList.add('red-border');
        } else {
            confirmMessage.push('Email: ' + inputEmail.value);
        }

        if (validatePassword()) {
            errorMessage.push('password');
            inputPassword.classList.add('red-border');
        } else {
            confirmMessage.push('Password: ' + inputPassword.value);
        }

        if (errorMessage.length !== 0) {
            alert('Input error:\n' + errorMessage.join('\n'));
        } else {
            alert('The form was successfully completed with this information:\n' + confirmMessage.join('\n'));
        }
    }
}