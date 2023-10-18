// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  for (let i = 0; i < numbers.length; i++) {
    if (
      numbers[i] < 0 ||
      numbers[i] > 9 ||
      numbers.filter((num) => num === numbers[i]).length >= 3
    ) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  const areaCode = numbers.slice(0, 2).join("");
  const firstPart = numbers.slice(2, 7).join("");
  const secondPart = numbers.slice(7, 11).join("");

  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(drinks) {
  const numbers = drinks.match(/\d+/g);
  if (numbers === null) {
    return "0 copos de água";
  }
  const total = numbers.reduce((acc, num) => acc + parseInt(num), 0);
  return `${total} copo${total > 1 ? "s" : ""} de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
