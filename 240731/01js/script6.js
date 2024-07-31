var sum = 0;
const calcSum = (n) => {
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`1부터 ${n}까지 더하면 ${sum} 입니다.`);
};

calcSum(10);
