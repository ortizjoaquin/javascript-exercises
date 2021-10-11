/*EXERCISES:
3) Arrays

a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

c) Agregar un elemento al principio y al final del array (utilizar unshift y push).

d) Quitar un elemento del principio y del final del array (utilizar shift y pop).

e) Invertir el orden del array (utilizar reverse).

f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

*/

//SOLVING:
console.log("EXERCISE 3")

// 3) a)
var monthList=
[
"Enero",
"Febrero",
"Marzo",
"Abril",
"Mayo",
"Junio",
"Julio",
"Agosto",
"Septiembre",
"Octubre",
"Noviembre",
"Diciembre"]

var monthListCopy = Object.assign([], monthList);
console.log ("3) a):", monthList[5], monthList[11])

// as the list starts counting on 0, the showed months are not May and November (months 5 and 11),
// but June and December (months 6 and 12)

// 3) b)
var monthListAlphabetical = monthList.sort()
console.log ("3) b):", monthListAlphabetical)

// 3) c)
monthList.unshift("Start")
monthList.push("Finish")
console.log("3) c):", monthList)

// 3) d)
monthList.shift()
monthList.pop()
console.log("3) d):", monthList)

// 3) e)
monthList.reverse()
console.log("3) e)", monthList)

//3) f)
monthListString = monthList.join("-")
console.log("3) f)", monthListString)

//4) g)
monthListCopySlice = monthListCopy.slice(4, 11)
console.log("3) g)", monthListCopySlice)