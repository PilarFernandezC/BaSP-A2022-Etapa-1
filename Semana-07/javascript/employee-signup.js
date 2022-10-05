window.onload = function () {
    var inputName = document.getElementById('name');
    var inputSurname = document.getElementById('surname');
    var inputDni = document.getElementById('dni');
    var inputDateOfBirth = document.getElementById('date-of-birth');
    var inputTelephone = document.getElementById('telephone');
    var inputAddress = document.getElementById('address');
    var inputCity = document.getElementById('city');
    var inputPostalCode = document.getElementById('postal-code');
    var inputEmail = document.getElementById('email');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputPassword = document.getElementById('password');
    var inputConfirmPassword = document.getElementById('confirm-password');
    var submitButton = document.getElementById('btn');
    var nameError = document.createElement('p');
    var surnameError = document.createElement('p');
    var dniError = document.createElement('p');
    var dobError = document.createElement('p');
    var telephoneError = document.createElement('p');
    var addressError = document.createElement('p');
    var cityError = document.createElement('p');
    var postalCodeError = document.createElement('p');
    var emailError = document.createElement('p');
    var passwordError = document.createElement('p');
    var confirmPasswordError = document.createElement('p');

    function validateLetter (input1) {
        var end1 = input1.value.length - 1;
        for (i=0; i<=end1; i++){
            if (input1.value.charCodeAt(i) < 32 || (input1.value.charCodeAt(i) > 32 && input1.value.charCodeAt(i) < 65)
             || (input1.value.charCodeAt(i) > 90 && input1.value.charCodeAt(i) < 97) || 
            (input1.value.charCodeAt(i) > 122 && input1.value.charCodeAt(i) < 130) || 
            (input1.value.charCodeAt(i) > 130 && input1.value.charCodeAt(i) < 160) || 
            input1.value.charCodeAt(i) > 165) {
                return true;
            }
        }
    }

    function validateNumber (input2) {
        var end2 = input2.value.length - 1;
        for (i=0; i<=end2; i++){
            if (isNaN(input2.value)) {
                return true;
            } else {
                return false;
            }
        }
    }

    function validateAll (input3) {
        var end3 = input3.value.length -1;
        for (i=0; i<=end3; i++) {
            if (input3.value.charCodeAt(i) < 32 || (input3.value.charCodeAt(i) > 32 && input3.value.charCodeAt(i) < 48)
             || (input3.value.charCodeAt(i) > 57 && input3.value.charCodeAt(i) < 65) || 
             (input3.value.charCodeAt(i) > 90 && input3.value.charCodeAt(i) < 97) ||
            (input3.value.charCodeAt(i) > 122 && input3.value.charCodeAt(i) < 130) || 
            (input3.value.charCodeAt(i) > 130 && input3.value.charCodeAt(i) < 160) ||
            (input3.value.charCodeAt(i) > 165)) {
                return true;
            }
        }
    }

    function countSpaces (input4) {
        var contSpace = 0;
        var i = 0;
        while (contSpace == 0 && i <= input4.value.length) {
            if (input4.value.charCodeAt(i) == 32) {
                contSpace = contSpace + 1;
            }
            i = i + 1;
        }
        return contSpace;
    }

    function countNumbers (input5) {
        var contNumber = 0;
        var i1 = 0;
        while (contNumber == 0 && i1 <= input5.value.length) {
            if ((input5.value.charCodeAt(i1) > 47) && (input5.value.charCodeAt(i1) < 58)) {
                contNumber = contNumber + 1;
            }
            i1 = i1 + 1;
        }
        return contNumber;
    }

    // I make contLetter <= 3 so that it not only works for address but also for city
    function countLetters (input6) {
        var contLetter = 0;
        var i2 = 0;
        while (contLetter <= 3 && i2 <= input6.value.length) {
            if ((input6.value.charCodeAt(i2) > 64 && input6.value.charCodeAt(i2) < 91) || 
            (input6.value.charCodeAt(i2) > 96 && input6.value.charCodeAt(i2) < 123) || 
            (input6.value.charCodeAt(i2) > 129 && input6.value.charCodeAt(i2) < 131) || 
            (input6.value.charCodeAt(i2) > 159 && input6.value.charCodeAt(i2) < 166)) {
                contLetter = contLetter + 1;
            }
            i2 = i2 + 1;
        }
        return contLetter;
    }

    function validateName () {
        if (validateLetter(inputName) || inputName.value.length <= 3) {
            return true;
        } else {
            return false;
        }
    }

    inputName.onblur = function () {
        if (validateName()) {
            inputName.classList.add('red-border');
            nameError.classList.add('input-error');
            nameError.textContent = 'Must have only letters and more than 3 of them';
            inputName.insertAdjacentElement("afterend", nameError);
        } else {
            inputName.classList.add('green-border');
        }
    }

    inputName.onfocus = function () {
        inputName.classList.remove('red-border');
        inputName.classList.remove('green-border');
        nameError.remove();
    }

    function validateSurname () {
        if (validateLetter(inputSurname) || inputSurname.value.length <= 3) {
            return true;
        } else {
            return false;
        }
    }

    inputSurname.onblur = function () {
        if (validateSurname()) {
            inputSurname.classList.add('red-border');
            surnameError.classList.add('input-error');
            surnameError.textContent = 'Must have only letters and more than 3 of them';
            inputSurname.insertAdjacentElement("afterend", surnameError);
        } else {
            inputSurname.classList.add('green-border');
        }
    }

    inputSurname.onfocus = function () {
        inputSurname.classList.remove('red-border');
        inputSurname.classList.remove('green-border');
        surnameError.remove();
    }

    function validateDni () {
        if (validateNumber(inputDni) || inputDni.value.length <= 7) {
            return true;
        } else {
            return false;
        }
    }

    inputDni.onblur = function () {
        if (validateDni()) {
            inputDni.classList.add('red-border');
            dniError.classList.add('input-error');
            dniError.textContent = 'Must have only numbers and more than 7 of them';
            inputDni.insertAdjacentElement("afterend", dniError);
        } else {
            inputDni.classList.add('green-border');
        }
    }

    inputDni.onfocus = function () {
        inputDni.classList.remove('red-border');
        inputDni.classList.remove('green-border');
        dniError.remove();
    }

    function validateDateOfBirth () {
        if (inputDateOfBirth.value.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    inputDateOfBirth.onblur = function () {
        if (validateDateOfBirth()) {
            inputDateOfBirth.classList.add('red-border');
            dobError.classList.add('input-error');
            dobError.textContent = 'Please, insert a valid date of birth (dd/mm/aaaa)';
            inputDateOfBirth.insertAdjacentElement("afterend", dobError);
        } else {
            inputDateOfBirth.classList.add('green-border');
        }
    }

    inputDateOfBirth.onfocus = function () {
        inputDateOfBirth.classList.remove('red-border');
        inputDateOfBirth.classList.remove('green-border');
        dobError.remove();
    }

    function validateTelephone () {
        if (validateNumber(inputTelephone) || inputTelephone.value.length !== 10) {
            return true;
        } else {
            return false;
        }
    }

    inputTelephone.onblur = function () {
        if (validateTelephone()) {
            inputTelephone.classList.add('red-border');
            telephoneError.classList.add('input-error');
            telephoneError.textContent = 'Must have only numbers and just 10 of them';
            inputTelephone.insertAdjacentElement("afterend", telephoneError);
        } else {
            inputTelephone.classList.add('green-border');
        }
    }

    inputTelephone.onfocus = function () {
        inputTelephone.classList.remove('red-border');
        inputTelephone.classList.remove('green-border');
        telephoneError.remove();
    }

    function validateAddress () {
        if (inputAddress.value.length <= 4 || validateAll(inputAddress) || countSpaces(inputAddress) == 0 || 
        countNumbers(inputAddress) == 0 || countLetters(inputAddress) == 0 || inputAddress.value.indexOf(' ') == 0 || 
        (inputAddress.value.indexOf(' ') == (inputAddress.value.length - 1))) {
            return true;
        } else {
            return false;
        }
    }

    inputAddress.onblur = function () {
        if (validateAddress()) {
            inputAddress.classList.add('red-border');
            addressError.classList.add('input-error');
            addressError.textContent = 'Must have at least 5 characters with letters, numbers and a space in between';
            inputAddress.insertAdjacentElement("afterend", addressError);
        } else {
            inputAddress.classList.add('green-border');
        }
    }

    inputAddress.onfocus = function () {
        inputAddress.classList.remove('red-border');
        inputAddress.classList.remove('green-border');
        addressError.remove();
    }

    function validateCity () {
        if (validateAll(inputCity) || countLetters(inputCity) <= 3) {
            return true;
        } else {
            return false;
        }
    }

    inputCity.onblur = function () {
        if (validateCity()) {
            inputCity.classList.add('red-border');
            cityError.classList.add('input-error');
            cityError.textContent = 'Must have at least 3 letters (alphanumeric text)';
            inputCity.insertAdjacentElement("afterend", cityError);
        } else {
            inputCity.classList.add('green-border');
        }
    }

    inputCity.onfocus = function () {
        inputCity.classList.remove('red-border');
        inputCity.classList.remove('green-border');
        cityError.remove();
    }

    function validatePostalCode () {
        if (validateNumber(inputPostalCode) || inputPostalCode.value.length < 4 || inputPostalCode.value.length > 5) {
            return true;
        } else {
            return false;
        }
    }

    inputPostalCode.onblur = function () {
        if (validatePostalCode()) {
            inputPostalCode.classList.add('red-border');
            postalCodeError.classList.add('input-error');
            postalCodeError.textContent = 'Must have only numbers and between 4 and 5 of them';
            inputPostalCode.insertAdjacentElement("afterend", postalCodeError);
        } else {
            inputPostalCode.classList.add('green-border');
        }
    }

    inputPostalCode.onfocus = function () {
        inputPostalCode.classList.remove('red-border');
        inputPostalCode.classList.remove('green-border');
        postalCodeError.remove();
    }

    function validateEmail() {
        return emailExpression.test(inputEmail.value);
    }

    inputEmail.onblur = function () {
        if (!validateEmail()) {
            inputEmail.classList.add('red-border');
            emailError.classList.add('input-error');
            emailError.textContent = 'Please, write a valid email';
            inputEmail.insertAdjacentElement("afterend", emailError);
        } else {
            inputEmail.classList.add('green-border');
        }
    }

    inputEmail.onfocus = function () {
        inputEmail.classList.remove('red-border');
        inputEmail.classList.remove('green-border');
        emailError.remove();
    }

    function validatePassword() {
        if (inputPassword.value.length < 8 || validateAll(inputPassword) || countSpaces(inputPassword) !== 0 || 
        countLetters(inputPassword) == 0 || countNumbers(inputPassword) == 0) {
            return true;
        } else {
            return false;
        }
    }

    inputPassword.onblur = function () {
        if (validatePassword()) {
            inputPassword.classList.add('red-border');
            passwordError.classList.add('input-error');
            passwordError.textContent = 'Must have at least 8 letters and numbers';
            inputPassword.insertAdjacentElement("afterend", passwordError);
        } else {
            inputPassword.classList.add('green-border');
        }
    }

    inputPassword.onfocus = function () {
        inputPassword.classList.remove('red-border');
        inputPassword.classList.remove('green-border');
        passwordError.remove();
    }

    function validateConfirmPassword() {
        if (inputConfirmPassword.value.length < 8 || validateAll(inputConfirmPassword) || 
        countSpaces(inputConfirmPassword) !== 0 || countLetters(inputConfirmPassword) == 0 || 
        countNumbers(inputConfirmPassword) == 0) {
            return true;
        } else {
            return false;
        }
    }

    inputConfirmPassword.onblur = function () {
        if (validateConfirmPassword()) {
            inputConfirmPassword.classList.add('red-border');
            confirmPasswordError.classList.add('input-error');
            confirmPasswordError.textContent = 'Must have at least 8 letters and numbers';
            inputConfirmPassword.insertAdjacentElement("afterend", confirmPasswordError);
        } else {
            inputConfirmPassword.classList.add('green-border');
        }
    }

    inputConfirmPassword.onfocus = function () {
        inputConfirmPassword.classList.remove('red-border');
        inputConfirmPassword.classList.remove('green-border');
        confirmPasswordError.remove();
    }

    function changeDob(date) {
        var dateArray = date.split('-');
        return dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0];
    }

    function localSetItem(data) {
        localStorage.setItem('name', data.data.name);
        localStorage.setItem('lastName', data.data.lastName);
        localStorage.setItem('dni', data.data.dni);
        localStorage.setItem('dob', data.data.dob);
        localStorage.setItem('phone', data.data.phone);
        localStorage.setItem('address', data.data.address);
        localStorage.setItem('city', data.data.city);
        localStorage.setItem('zip', data.data.zip);
        localStorage.setItem('email', data.data.email);
        localStorage.setItem('password', data.data.password);
    }

    function changeDob1(date) {
        var dateArray = date.split('/');
        return dateArray[2] + '-' + dateArray[0] + '-' + dateArray[1];
    }

    function localGetItem() {
        inputName.value = localStorage.getItem('name');
        inputSurname.value = localStorage.getItem('lastName');
        inputDni.value = localStorage.getItem('dni');
        inputDateOfBirth.value = changeDob1(localStorage.getItem('dob'));        
        inputTelephone.value = localStorage.getItem('phone');
        inputAddress.value = localStorage.getItem('address');
        inputCity.value = localStorage.getItem('city');
        inputPostalCode.value = localStorage.getItem('zip');
        inputEmail.value = localStorage.getItem('email');
        inputPassword.value = localStorage.getItem('password');
    }

    function fetchSignup () {
        fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' + inputName.value + '&lastName=' + 
        inputSurname.value + '&dni=' + inputDni.value + '&dob=' + changeDob(inputDateOfBirth.value) + '&phone=' + 
        inputTelephone.value + '&address=' + inputAddress.value + '&city=' + inputCity.value + '&zip=' + 
        inputPostalCode.value + '&email=' + inputEmail.value + '&password=' + inputPassword.value)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            if (data.success) {
                alert('SUCCESSFUL REQUEST \nSignup success: ' + data.success + '\nMessage: ' + data.msg);
                localSetItem(data);
            } else {
                throw new Error (data);
            }
        })
        .catch(function (error) {
            alert('FAIL REQUEST \nSignup success: ' + error.success + '\nMessage: ' + error.msg);
        })
    }

    if (localStorage.length != 0) {
        localGetItem();
    }

    submitButton.onclick = function(e) {
        e.preventDefault();

        var errorMessage = [];

        if (validateName ()) {
          errorMessage.push('name');
        }

        if (validateSurname()) {
            errorMessage.push('surname');
        }

        if (validateDni()) {
            errorMessage.push('dni');
        }

        if (validateDateOfBirth()) {
            errorMessage.push('date of birth');
        }

        if (validateTelephone()) {
            errorMessage.push('telephone');
        }

        if (validateAddress()) {
            errorMessage.push('address');
        }

        if (validateCity()) {
            errorMessage.push('city');
        }

        if (validatePostalCode()) {
            errorMessage.push('postal code');
        }

        if (!validateEmail()) {
            errorMessage.push('email')
        }

        if (validatePassword()) {
            errorMessage.push('password');
        }

        if(validateConfirmPassword()) {
            errorMessage.push('confirm password');
        }

        if (errorMessage.length !== 0) {
            alert('Input error:\n' + errorMessage.join('\n'));
        } else {
            fetchSignup();
        }
    }
}