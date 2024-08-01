// 현재 보고 있는 웹 브라우저 문서 내 버튼을 하나 만들어주세요!!!

// 그리고, 해당 버튼을 클릭할 때마다 웹 브라우저 문서 의 바탕화면 배경색상이 변경되도록 해주세요.

// 변경되어야 하는 색상은 white, yellow, aqua, purple 색상이며, 마지막 purple 색상 다음번 색상은 첫번째 색상인 white 색상으로 변경되면 됩니다. (*무한 반복으로 색상이 변경되어 돌아가면 됩니다.)

// 함수!!!
// 각각의 컬러를 배열 자료구조를 사용
// 배열 내 각각의 아이템은 index값을 가지고 있다.
// 0부터 시작 하는 인덱스값이 1개씩증가해야한다.
// 증감연산자가 필요하다.
// 이벤트 (*클릭했을 때, click)

const color = ["white", "yellow", "aqua", "purple"];
const button = document.querySelector("button");

let i = 0;
button.addEventListener("click", () => {
  i++;
  if (i >= color.length) i = 0;
  const bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = color[i];
});
