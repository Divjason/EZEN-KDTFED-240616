// JS ES6 => 혼종!!
// Map & Set
// 배열 & 객체
// 배열 : 인덱스 // 개수 // 넣고, 빼고
// 객체 : 프로퍼티 형태 (*어떤 자료가 무슨 의미지인지)
// 배열 + 객체 => 울버린 => Map
// Map => 배열의 형태를 띄고 있는 이터러블한 객체의 자료구조들의 공통적인 약점!!!
// 중복되는 값을 제어x

// const bag = new Map();
// bag.set("color", "red").set("type", "mini");

// console.log(bag);

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

console.log(myCup);

myCup.set("type", "mini");

console.log(myCup);
