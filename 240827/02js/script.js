const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.strokeStyle = "rgb(0, 0, 0)";

ctx.fillRect(10, 10, 200, 100);
// ctx.strokeRect(10, 20, 200, 100);

ctx.fillStyle = "rgb(0, 0, 200)";
ctx.fillRect(50, 50, 120, 100);

ctx.clearRect(70, 80, 80, 45);

// ctx.fillStyle = "rgb(200, 0, 0)";
// ctx.fillRect(10, 10, 50, 100);

// console.log(ctx);

// canvas API

// 각도를 계산하는 방법

// 1.60분법 : 인간의 편의 => 원 360도 // 몇 도

// 2.호도법 : 자연의 법칙
// 부채꼴 => 밑변(*반지름) = 호의 둘레와 같다면, 무조건 해당 부채꼴 내각은 57.296도 = 1래디언
// 3.14 = 180도 = 파이
// 3래디언 = 171.888
// 8.112

// 사각형을 만들고자 할 때 사용할 수 있는 메서드 함수

// fillRect(x, y, width, height) : 사각형 요소의 색상을 채워줄 수 있도록 하는 함수

// strokeRect(x, y, width, height) : 사각형 아웃라인 선을 그려주도록하는 함수

// clearRect(x, y, width, height) : 사각형 형태의 특정 요소만큼을 지우고자할 때 사용하는 함수

// 사각형을 만들고자 할 때 사용할 수 있는 속성

// fillStyle = "색상" : 해당 도형의 색상을 채울 때 사용할 수 있는 속성

// strokeStyle = "색상" : 해당 도형의 외곽선의 색상을 지정하고자 할 때 사용할 수 있는 속성
