let inputNumber = parseFloat(prompt("Ingrese un número"));

if (
  inputNumber % 2 === 0 ||
  inputNumber % 3 === 0 ||
  inputNumber % 5 === 0 ||
  inputNumber % 7 === 0
) {
  alert("Es divisible por 2, 3, 5 o 7");
} else {
  alert("El numero no es divisible por 2, 3, 5 ni 7");
}
