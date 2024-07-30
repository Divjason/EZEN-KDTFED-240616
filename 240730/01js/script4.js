// 사용자로부터 3개의 값을 받으세요!!!
// 교통비, 식대, 음료비
// 위 3개의 값이 10,000원을 초과한다면 "예산관리 잘해주세요!"
// 위 3개의 값이 10,000원 이하라면 "예산관리 잘하셨어요!"

// const traffic = Number(prompt("교통비 입력!!"));
// const food = Number(prompt("식대 입력!"));
// const drink = Number(prompt("음료비!"));

let arr = [];
for (let i = 0; i < 3; i++) {
  const userNum = Number(prompt("교통비, 식대, 음료비 순으로 입력!"));
  arr.push(userNum);
}

const [traffic, food, drink] = arr;
const sum = traffic + food + drink;

if (isNaN(sum) || sum === 0) {
  alert("잘못입력했습니다!");
} else if (sum <= 10000) {
  alert("예산관리 잘하셨습니다!");
} else {
  alert("예산관리 잘하세요!");
}
