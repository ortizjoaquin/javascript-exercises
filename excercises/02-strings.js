/*EXCERCISES:
2) Strings

a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase).

b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
caracteres guardando el resultado en una nueva variable (utilizar substring).

c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
caracteres guardando el resultado en una nueva variable (utilizar substring).

d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera 
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).

e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la 
posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de 
ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, 
toLowerCase y el operador +).
*/

//SOLVING:
console.log("EXCERCISE 2")

// 2) a)

var firstString = "worcestershire"
var firstStringUpperCase = firstString.toUpperCase()
console.log ("2) a):", firstStringUpperCase)

// 2) b)

var secondString = "panopticon"
var secondStringSubstring = secondString.substring(0,5)
console.log ("2) b):", secondStringSubstring)

// 2) c)

var thirdString = "highwayman"
var thirdStringSubstringLength  = thirdString.substring(thirdString.length - 3)
console.log ("2) c):", thirdStringSubstringLength)

// 2) d)

var fourthString = "hypothetically"
var fourthStringUpperCase = fourthString.toUpperCase()
var fourthStringFirstLetter = fourthStringUpperCase.substring(0,1)
var fourthStringRemainingLetters = fourthStringUpperCase.substring(1)
var fourthStringRemainingLettersLowerCase = fourthStringRemainingLetters.toLowerCase()
var fourthStringCompleted = fourthStringFirstLetter + fourthStringRemainingLettersLowerCase
console.log ("2) d):", fourthStringCompleted)

// 2) e)

var fifthString =  "led zeppelin"
var indexSpace = fifthString.indexOf (" ")
console.log ("2) e):", indexSpace+1)

// 2) f)

var sixthString = "consanguineous attachment"
var spaceBetween = sixthString.indexOf (" ")
var firstWord = sixthString.substring(0,spaceBetween)
var secondWord = sixthString.substring(spaceBetween+1)
var firstWordFirstLetter = firstWord.substring(0,1).toUpperCase()
var secondWordFirstLetter = secondWord.substring(0,1).toUpperCase()
var firstWordRemaining = firstWord.substring(1)
var secondWordRemaining = secondWord.substring(1)
console.log ("2) f):", firstWordFirstLetter + firstWordRemaining + " " + secondWordFirstLetter +
secondWordRemaining)
