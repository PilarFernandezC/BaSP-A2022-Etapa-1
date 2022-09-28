window.onload = function () {
    var inputName = document.getElementById('name');
    var inputSurname = document.getElementById('surname');
    var inputDni = document.getElementById('dni');
    var inputDateOfBirth = document.getElementById('date-of-birth');

    function validateLetter (input1) {
        var end1 = input1.value.length - 1;
        for (i=0; i<=end1; i++){
            if (input1.value.charCodeAt(i) < 32 || (input1.value.charCodeAt(i) > 32 && input1.value.charCodeAt(i) < 65) || (input1.value.charCodeAt(i) > 90 && input1.value.charCodeAt(i) < 97) || 
            (input1.value.charCodeAt(i) > 122 && input1.value.charCodeAt(i) < 130) || 
            (input1.value.charCodeAt(i) > 130 && input1.value.charCodeAt(i) < 160) || input1.value.charCodeAt(i) > 165) {
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
        } else {
            inputName.classList.add('green-border');
        }
    }

    inputName.onfocus = function () {
        inputName.classList.remove('red-border');
        inputName.classList.remove('green-border');
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
        } else {
            inputSurname.classList.add('green-border');
        }
    }

    inputSurname.onfocus = function () {
        inputSurname.classList.remove('red-border');
        inputSurname.classList.remove('green-border');
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
        } else {
            inputDni.classList.add('green-border');
        }
    }

    inputDni.onfocus = function () {
        inputDni.classList.remove('red-border');
        inputDni.classList.remove('green-border');
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
        } else {
            inputDateOfBirth.classList.add('green-border');
        }
    }

    inputDateOfBirth.onfocus = function () {
        inputDateOfBirth.classList.remove('red-border');
        inputDateOfBirth.classList.remove('green-border');
    }

    var submitButton = document.getElementById('btn');
    submitButton.onclick = function(e) {
        e.preventDefault();

        var errorMessage = [];
        var confirmMessage = [];

        if (validateName ()) {
          errorMessage.push('name');
        } else {
            confirmMessage.push('Name: ' + inputName.value);
        }

        if (validateSurname()) {
            errorMessage.push('surname');
        } else {
            confirmMessage.push('Surname: ' + inputSurname.value);
        }

        if (validateDni()) {
            errorMessage.push('dni');
        } else {
            confirmMessage.push('DNI: ' + inputDni.value);
        }

        if (validateDateOfBirth()) {
            errorMessage.push('date of birth');
        } else {
            confirmMessage.push('Date of birth: ' + inputDateOfBirth.value)
        }

        if (errorMessage.length !== 0) {
            alert('Input error:\n' + errorMessage.join('\n'));
        } else {
            alert('The form was successfully completed with this information:\n' + confirmMessage.join('\n'));
        }
    }
}