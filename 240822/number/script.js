// 자료형!!
// 문자열, 숫자, 객체, 배열, 심볼, 함수

// 다른 형태의 어떤 자료형을 인자값으로 전달받아서 "숫자"의 형태로 변환시켜주는 함수!!
// Number()
// parseInt()
// parseFloat()

// 정수(*소주점이 없는 숫자), 실수(*소수점)

document
  .querySelector('input[type="submit"]')
  .addEventListener("click", (e) => {
    e.preventDefault();
    const value = Number(document.querySelector('input[type="text"]').value);
    console.log(typeof value);
    console.log(value);
  });

// 자동 형변환
// 1) form 태그 > input
// 2) 데이터를 저장하는 공간 (*서버 외 이와 비슷한 공간) => 문자열
