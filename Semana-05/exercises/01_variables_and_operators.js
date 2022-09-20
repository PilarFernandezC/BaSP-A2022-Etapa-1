console.log('--EXERCISE 1: VARIABLES AND OPERATORS');
//a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
console.log('\n-Exercise 1.a:');
var num1=5, num2=10, sum=num1+num2;
console.log(sum);
//b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
console.log('\n-Exercise 1.b:');
var string1='hello', string2='world', string=(string1+' '+ string2);
console.log(string);
/*c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado de la suma en una 3er variable (utilizar length).*/
console.log('\n-Exercise 1.c:');
var word1='hello', word2='world', sumstring=word1.length+word2.length;
console.log(sumstring);