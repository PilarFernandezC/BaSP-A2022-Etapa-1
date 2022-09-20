console.log('--EXERCISE 2: STRINGS');
/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase).*/
console.log('\n-Exercise 2.a:');
var string='psicologist';
console.log(string.toUpperCase());
/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('\n-Exercise 2.b:');
var string='psicologist', string1=string.substring(0, 5);
console.log(string1);
/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('\n-Exercise 2.c:');
var string='psicologist', string1=string.substring(string.length-3, string.length);
console.log(string1);
/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +).*/
console.log('\n-Exercise 2.d:');
var string='pSiCoLoGiSt', string1=(string.substring(0, 1).toUpperCase()+string.substring(1, string.length)
.toLowerCase());
console.log(string1);
/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
console.log('\n-Exercise 2.e:');
var string='goodbye world';
var pos=string.indexOf(' ');
console.log(pos);
/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase
y el operador +).*/
console.log('\n-Exercise 2.f:');
var string='gOoDbYe pSiCoLoGiSt', string1=(string.substring(0, 1).toUpperCase()+
string.substring(1, string.indexOf(' ')).toLowerCase()+string.substring((string.indexOf(' ')), (string.indexOf(' ')+1))
+(string.substring(string.indexOf(' ')+1, string.indexOf(' ')+2)).toUpperCase()+string.substring(string.indexOf(' ')+2,
 string.length).toLowerCase());
console.log(string1);