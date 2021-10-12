/*EXERCISES:
6) Functions

a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya
decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que
todo siga funcionando igual.
*/

//SOLVING:
console.log("EXERCISE 6");

// 6) a)
var num1, num2;
function sum1(num1, num2) {
   return num1 + num2;
}
var ret1 = sum1(30,70);
console.log("6) a): ", ret1);

// 6) b)
function sum2(num1, num2) {
  if(typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return NaN;
  }
}
console.log("6) b): ", sum1(30,70));
console.log("6) b): ", sum1(1, "A"));

// 6) c)
function validateInteger(numberInteger) {
  if (typeof numberInteger === "number" && Number.isInteger(numberInteger)){
    return true;
  } else {
    return false;
  }
}
console.log("6) c): ", validateInteger("A"));
console.log("6) c): ", validateInteger(2.3));
console.log("6) c): ", validateInteger(1));


// 6) d)
function sum3(num1, num2) {
  if(typeof num1 === "number" && typeof num2 === "number") {
    if(validateInteger(num1) && validateInteger(num2)){
      return num1 + num2;
    } else if (!(validateInteger(num1))) {
      alert(num1 + "NOT AN INTEGER")
      return (Math.round(num1) + num2);
    } else {
      alert(num2 + "NOT AN INTEGER")
      return (Math.round(num2) + num1);
    }
  } else {
    return NaN;
  }
}

console.log("6) d): ", sum3(30,70));
console.log("6) d): ", sum3(29.7,70));

// 6) e)

function numberValidation(num){
  if(typeof num === "number") {
     return true;
  } else {
     return false;
  }
}

function sum4(num1, num2) {
  if(numberValidation(num1) && numberValidation(num2)) {
    if(numberValidation(num1) && numberValidation(num2)){
      return num1 + num2;
    } else if (!(validateInteger(num1))) {
      alert(num1 + "NOT AN INTEGER")
      return (Math.round(num1) + num2);
    } else {
      alert(num2 + "NOT AN INTEGER")
      return (Math.round(num2) + num1);
    }
  } else {
    return NaN;
  }
}

console.log("6) d): ", sum3(30,70));
console.log("6) d): ", sum3(29.7,70));