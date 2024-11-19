// 피보나치 수열은 무조건 1, 1 시작
// 1, 1, 2, 3, 5

const fibonacci = (n) => {
  if (n === 0 || n === 1) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
};

const fibonacci2 = (n, memo) => {
  if (n === 0 || n === 1) return n;

  if (memo[n] == null) {
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
  }

  return memo[n];
};

// const fibonacci = (5) => {
//   if (n === 0 || n === 1) return n;
//   return fibonacci(5 - 2) + fibonacci(5 - 1);
// };

// const fibonacci = (3) => {
//   if (n === 0 || n === 1) return n;
//   return fibonacci(3 - 2) + fibonacci(3 - 1);
// };

// //실행불가
// const fibonacci = (1) => {
//   if (n === 0 || n === 1) return n;
//   return fibonacci(5 - 2) + fibonacci(5 - 1);
// };

// const fibonacci = (2) => {
//   if (n === 0 || n === 1) return n;
//   return fibonacci(2 - 2) + fibonacci(2 - 1);
// };

// const fibonacci = (4) => {
//   if (n === 0 || n === 1) return n;
//   return fibonacci(4 - 2) + fibonacci(4 - 1);
// };

// const fibonacci = (2) => {
//   if (n === 0 || n === 1) return n;
//   return fibonacci(2 - 2) + fibonacci(2 - 1);
// };

// const fibonacci = (3) => {
//   if (n === 0 || n === 1) return n;
//   return fibonacci(3 - 2) + fibonacci(3 - 1);
// };

// const fibonacci = (2) => {
//   if (n === 0 || n === 1) return n;
//   return fibonacci(2 - 2) + fibonacci(2 - 1);
// };

let start = new Date();
console.log(fibonacci(40));
let end = new Date();
console.log(`fibonacci 함수 실행시간: ${end - start}ms`);

start = new Date();
console.log(fibonacci2(40, []));
end = new Date();
console.log(`fibonacci 함수 실행시간: ${end - start}ms`);
