const inputNumber = parseFloat(prompt(`Ingrese un número`));
const divisible = [];

if (inputNumber % 2 === 0) {
  divisible.push(2);
}
if (inputNumber % 3 === 0) {
  divisible.push(3);
}
if (inputNumber % 5 === 0) {
  divisible.push(5);
}
if (inputNumber % 7 === 0) {
  divisible.push(7);
}
if (divisible.length > 0) {
  alert(`El numero es divisible por: ${divisible.join(", ")}`);
} else {
  alert(`El numero no es divisible por 2, 3, 5 ni 7`);
}
