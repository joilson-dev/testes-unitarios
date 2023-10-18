// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase, quantidade) {
  const palavras = frase.split(" ");
  return palavras.slice(0, quantidade);
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(vitorias, empates) {
  return vitorias * 3 + empates;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  const maiorNumero = Math.max(...arrayDeNumeros);
  return arrayDeNumeros.filter((numero) => numero === maiorNumero).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanciaCat1 = Math.abs(mouse - cat1);
  const distanciaCat2 = Math.abs(mouse - cat2);

  if (distanciaCat1 < distanciaCat2) {
    return "cat1";
  } else if (distanciaCat2 < distanciaCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}


// Desafio 8
function fizzBuzz(array) {
  return array.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return "fizzBuzz";
    } else if (number % 3 === 0) {
      return "fizz";
    } else if (number % 5 === 0) {
      return "buzz";
    } else {
      return "bug!";
    }
  });
}

// Desafio 9
function encode(frase) {
  const vogais = { a: "1", e: "2", i: "3", o: "4", u: "5" };
  return frase
    .split("")
    .map((char) => vogais[char] || char)
    .join("");
}

function decode(fraseCodificada) {
  const numeros = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };
  return fraseCodificada
    .split("")
    .map((char) => numeros[char] || char)
    .join("");
}

// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return "Vazio!";
  }
  const techObjects = array.sort().map((tech) => ({
    tech,
    name,
  }));
  return techObjects;
}


module.exports = {
  compareTrue,
  calcArea,
  splitSentence,
  concatName,
  footballPoints,
  highestCount,
  catAndMouse,
  fizzBuzz,
  encode,
  decode,
  techList,
};
