console.log('--EXERCISE 3: ARRAYS');
/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/
console.log('\n-Exercise 3.a:');
let months=['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre',
 'noviembre', 'diciembre'];
console.log(months[4], months[10]);
//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('\n-Exercise 3.b:'); 
console.log(months.sort());
//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('\n-Exercise 3.c:');
months.unshift('first');
months.push('last');
console.log(months);
//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('\n-Exercise 3.d:');
months.shift();
months.pop();
console.log(months);
//e. Invertir el orden del array (utilizar reverse).
console.log('\n-Exercise 3.e:');
console.log(months.reverse());
//f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('\n-Exercise 3.f:');
console.log(months.join(" - "));
//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('\n-Exercise 3.g:');
let months2=['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre',
 'noviembre', 'diciembre'];
let months3 = months2.slice(4, 11);
console.log(months3);