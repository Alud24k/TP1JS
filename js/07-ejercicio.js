let numero1 = parseFloat(prompt("Ingrese el primer numero"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero"));
let numero3 = parseFloat(prompt("Ingrese el tercer numero"));

if (numero1 > numero2 && numero1 > numero3) {
  alert("El " + numero1 + " es mayor");
} else if (numero2 > numero1 && numero2 > numero3) {
  alert("El " + numero2 + " es mayor");
} else {
  alert("El " + numero3 + " es mayor");
}
