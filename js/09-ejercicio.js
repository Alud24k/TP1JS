let palabra = prompt("Ingrese una palabra");
let vocales = "";

for (let index = 0; index < palabra.length; index++) {
  const caracter = palabra.charAt(index).toLowerCase();
  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u"
  ) {
    vocales += caracter;
  }
}
alert(`Las vocales son: ${vocales}`);
