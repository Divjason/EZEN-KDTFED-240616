// 함수 선언!!
// 함수 매개변수 반드시 꼭 필수x
// 함수를 호출할 때, 매개변수의 자리에 어떤 값을 전달하고자 한다면, 인수 혹은 인자값 삽입!!
// 인자 = 매개변수
//

// 일반함수 혹은 function함수
// function calcSum() {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// }

// calcSum();

// 익명함수
// const calcSum = function () {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// };

// calcSum();

// 화살표(=> : 화살표 모양이 function 키워드를 대체할 수 있도록)함수
// const calcSum = () => {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// };

// calcSum();

// function sum(a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result}`);
// }

// sum(1, 2);

// const num = Number(prompt("숫자를 입력하세요!"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// alert(`1부터 ${num}까지 더하면 ${calcSum(num)} 입니다!`);

// function add(x, y) {
//   console.log(x + y);
// }

// add(2, 5);

// function multiple(a, b, c = 10) {
//   console.log(a + b + c);
// }

// multiple(2, 4);

// 올리브영 프론트엔드 개발자
// 회원가입 => *이름, *나이, 피부타입

document.body.innerHTML += `<button id="btn">Click!</button>`;

const button = document.querySelector("#btn");

function display() {
  alert("클릭했습니다!");
}

button.addEventListener("click", display);
