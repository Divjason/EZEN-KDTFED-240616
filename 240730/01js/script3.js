let arr = [];
for (i = 0; i < 3; i++) {
  const userNum = Number(prompt("숫자 입력요청!"));
  arr.push(userNum);
}

console.log(arr);

const [first, second, third] = arr;

console.log(typeof first);

const sum = first + second + third;
console.log(sum);

if (isNaN(sum) || sum === 0) {
  alert("잘못입력했습니다!");
} else if (sum < 10000) {
  alert("예산관리 잘하셨습니다!");
} else {
  alert("예산관리 잘하세요!");
}
