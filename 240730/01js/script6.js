// 사용자에게 숫자 1개를 받습니다!!
// 해당 숫자가 짝수인지 홀수인지 확인하여, 짝수라면 알림창에 "짝수" 출력!!! 만약 홀수라면 알림창에 "홀수" 출력!!
// 짝수는 반드시 2로 나누어 떨어집니다.
// 홀수는 2로 나눴을 때 반드시 나머지가 존재합니다!!!
// 단, 사용자가 취소 버튼을 클릭할 수 있다는 것을 감안하여 예외조항 처리를 반드시 해주세요!!!
// 반드시 삼항조건 연산자로 하세요!!!!

let userNumber = prompt("숫자를 입력하세요!");

if (userNumber !== null && userNumber !== "") {
  userNumber = parseInt(userNumber);
  if (!isNaN(userNumber)) {
    userNumber % 2 === 0
      ? alert(`${userNumber} : 짝수`)
      : alert(`${userNumber} : 홀수`);
  } else {
    alert("올바른 숫자를 입력하세요!");
  }
} else {
  alert("올바른 숫자를 입력하세요!");
}

console.log(userNumber);
