let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

if (numero1 > numero2) {
  alert("El " + numero1 + " es el número más grande.");
} else if (numero2 > numero1) {
  alert("El " + numero2 + " es el número más grande.");
} else {
  alert("Los números son iguales.");
}
