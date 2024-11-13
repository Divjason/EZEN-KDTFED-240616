// const factorial = (number) => {
//   if (number === 1 || number === 0) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// };

// console.log(factorial(5));

const factorial01 = (number) => {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }
  return sum;
};

console.log(factorial01(5));
