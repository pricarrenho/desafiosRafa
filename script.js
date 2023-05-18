//Dado um array de números, selecionar os 3 maiores e menores deles e tirar sua média
const numbers = [15, 8, 4, 7, 1, 22, 10, 6, 20];
const numbersTwo = [16, 9, 5, 8, 2, 23];
const numbersThree = [1, 2];
const numbersFour = [2];

const averageNumbers = (item) => {
  if (!Array.isArray(item))
    return "Parâmetro inválido, aceito apenas array de números";

  let soma = 0;

  if (item.length < 6) {
    item.forEach((item) => {
      soma = soma + item;
    });

    return soma / item.length;
  }

  const numbersInAscendingOrder = item.sort((a, b) => a - b);

  const firstThreeNumbers = numbersInAscendingOrder.slice(0, 3);
  const lastThreeNumbers = numbersInAscendingOrder.slice(-3);

  const newArray = firstThreeNumbers.concat(lastThreeNumbers);

  newArray.forEach((item) => {
    soma = soma + item;
  });

  return soma / 6;
};

// console.log(averageNumbers(numbersThree));

/////////////////////////////////////////////////////////////////////
//Ordenar um array de objetos pela propriedade nome
const arrayNames = [
  { nome: "Priscilla" },
  { nome: "antonio" },
  { nome: "Rafael" },
  { nome: "Maria" },
  { nome: "Antonio" },
];

const compareNames = (a, b) => {
  if (a.nome.toLowerCase() < b.nome.toLowerCase()) return -1;
  if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1;
  return 0;
};

const orderNames = (item) => {
  return item.sort(compareNames);
};

// console.log(orderNames(arrayNames));

/////////////////////////////////////////////////////////////////////
/* Quero um novo array desse byLetter, porem que não seja separado por letra, seja todos unificados */
const insurancesMock = {
  top: [{ id: 1, name: "Bradesco" }],
  byLetter: {
    a: [
      { id: 1, name: "A + SAUDE" },
      { id: 2, name: "ABAS" },
      { id: 3, name: "ABMED" },
      { id: 4, name: "AANY" },
      { id: 5, name: "AANYTWO" },
    ],
    u: [{ id: 6, name: "Unimed" }],
    b: [{ id: 10 }, { id: 8 }],
  },
};

const newArray = (item) => {
  return Object.values(item.byLetter).reduce((prev, current) => [
    ...prev,
    ...current,
  ]);

  // return Object.values(item.byLetter).reduce((prev, current) => {
  //   console.log({ prev, current });
  //   return prev.concat(current);
  // });
};

// console.log(newArray(insurancesMock));

/////////////////////////////////////////////////////////////////////
//Função que faça uma capitalize de string. Letras iniciais maiúsculas, se tiver só duas letras tudo minusculo.

const phrase = "quinta   do morgado";

const capitalizingTheFirstLetter = (item) => {
  const testArray = item.split(" ");

  return testArray
    .map((palavra) => {
      if (!palavra) return;
      if (palavra.length === 2) {
        return palavra;
      }

      return palavra[0].toUpperCase() + palavra.substring(1).toLowerCase();
    })
    .filter((value) => !!value)
    .join(" ");
};

// console.log(capitalizingTheFirstLetter(phrase));

/////////////////////////////////////////////////////////////////////
// quero fazer capitalize no insurancesMockTwo - top

const insurancesMockTwo = {
  top: [
    { id: 1, name: "bradesco saude" },
    { id: 1, name: " saude" },
  ],
  byLetter: {
    a: [
      { id: 1, name: "A + SAUDE" },
      { id: 2, name: "ABAS" },
      { id: 3, name: "ABMED" },
      { id: 4, name: "AANY" },
      { id: 5, name: "AANYTWO" },
    ],
    u: [{ id: 6, name: "Unimed" }],
    b: [{ id: 10 }, { id: 8 }],
  },
};

const capitalizeSimpleArray = (item) => {
  const newArray = item.map((value) => {
    if (!value.name) return value;
    return { ...value, name: capitalizingTheFirstLetter(value.name) };
  });

  return newArray;
};

// console.log(capitalizeSimpleArray(insurancesMockTwo.top));

/////////////////////////////////////////////////////////////////////
// quero fazer capitalize no insurancesMockThree - byLetter
const insurancesMockThree = {
  top: [
    { id: 1, name: "bradesco saude" },
    { id: 1, name: " saude" },
  ],
  byLetter: {
    a: [
      { id: 1, name: "A + SAUDE" },
      { id: 2, name: "ABAS" },
      { id: 3, name: "ABMED" },
      { id: 4, name: "AANY" },
      { id: 5, name: "AANYTWO" },
    ],
    u: [{ id: 6, name: "unimed" }],
    b: [{ id: 10 }, { id: 8 }],
  },
};

const capitalizeByLetterArray = (item) => {
  let result = {};

  const test = Object.entries(item);

  test.forEach((value) => {
    result[value[0]] = capitalizeSimpleArray(value[1]);
  });

  return result;
};

// console.log(capitalizeByLetterArray(insurancesMockThree.byLetter));

// const capitalizeByLetterArray = (item) => {
//   const test = Object.values(item.byLetter).reduce((prev, current) => [
//     ...prev,
//     ...current,
//   ]);

//   const newArray = test.map((value) => {
//     if (!value.name) return value;
//     return { ...value, name: capitalizingTheFirstLetter(value.name) };
//     //   });
//   });

//   return newArray;
// };

// console.log(capitalizeByLetterArray(insurancesMockThree));
