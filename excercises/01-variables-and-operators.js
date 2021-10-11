/*EXCERCISES:
1) Variables y Operadores

a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una
 3er variable.

b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el 
resultado de la suma en una 3er variable (utilizar length).
*/

//SOLVING:
console.log("EXCERCISE 1")

// 1) a)

var num1 = 2
var num2 = 3
var sum = num1 + num2
console.log ("1)a):", sum)

// 1) b)

var word1 = "hola"
var word2 = "mundo"
var wordsConc = word1 + " " + word2
console.log ("1)b):", wordsConc)

// 1) c)

var wordsConcLength  = wordsConc.length
console.log ("1)c):", wordsConcLength)