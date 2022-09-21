console.log('--EXERCISE 6: FUNCTIONS');
/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
console.log('\n-Exercise 6.a:');
function suma (a, b) {
    return a+b;
}
var result=suma(6, 9);
console.log(result);
/*b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros
no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene
error y retornar el valor NaN como resultado.*/
console.log('\n-Exercise 6.b:');
function validate (num) {
    return typeof num==='number';
}
function suma1 (a, b) {
    if (!validate(a) || !validate(b)) {
        alert('one of the parameters is not a number');
        console.log('NaN');
    }
    else {
        console.log(a+b);
    }
}
suma1('p', 9);
suma1(9, 9);
suma1(9, 'p');
/*c. Aparte, crear una función validate Integer que reciba un número como parámetro
y devuelva verdadero si es un número entero.*/
console.log('\n-Exercise 6.c:');
function validateInteger (num) {
    return Number.isInteger(num);
}
console.log(validateInteger(9.26));
console.log(validateInteger(9));
/*d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido
a entero (redondeado).*/
console.log('\n-Exercise 6.d:');
function suma1 (a, b) {
    if (!validate(a) || !validate(b)) {
        alert('one of the parameters is not a number');
        console.log('NaN');
    }
    else {
        if (!validateInteger(a)) {
            alert('one number is not an integer');
            console.log(Math.round(a));
        }
        else {
            if (!validateInteger(b)) {
                alert('one number is not an integer');
                console.log(Math.round(b));
            }
            else {
                console.log(a+b);
            }
        }
    }
}
suma1('p', 9);
suma1(9, 9);
suma1(9.23, 2);
suma1(3, 5.58);
/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
que todo siga funcionando igual.*/
console.log('\n-Exercise 6.e:');
function validateAll(a, b) {
    if (!validate(a) || !validate(b)) {
        alert('one of the parameters is not a number');
        console.log('NaN');
    }
    else {
        if (!validateInteger(a)) {
            alert('one number is not an integer');
            console.log(Math.round(a));
        }
        else {
            if (!validateInteger(b)) {
                alert('one number is not an integer');
                console.log(Math.round(b));
            }
            else {
                console.log(a+b);
            }
        }
    }
}
function suma2(a, b) {
    validateAll(a,b);
}
suma2(9.5, 5);
suma2(7, 8);
suma2('i', 9);
suma2(9, 'i');