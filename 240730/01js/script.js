// // // // const boolean = false;

// // // // console.log(typeof boolean);

// // // const test01 = null;
// // // // 유효하지 않은 값

// // // const test02 = undefined;
// // // // undefined => 미정 값

// // // const name = "현빈";

// // // const classroom = 201;

// // // // console.log(name + "님 " + classroom + "호 강의실로 오세요!");

// // // console.log(`${name}님 ${classroom}호 강의실로 오세요!`);

// // // const jsBook = {
// // //   // 속성 : property
// // //   // key: value
// // //   title: "지옥에서온 깃허브",
// // //   pages: 330,
// // // };

// // // // 객체안에 담긴 값을 찾아올 수 있음
// // // // 온점 표기법
// // // const jsBookTitle = jsBook.title;
// // // console.log(jsBookTitle);

// // // // 대괄호 표기법
// // // const jsBookPages = jsBook["pages"];
// // // console.log(jsBookPages);

// // // jsBook.title = "천국에서온 깃허브";
// // // console.log(typeof jsBook);

// // // json => javascript object notation

// // // const arr = ["red", "green", "blue"];

// // // console.log(arr[arr.length - 1]);

// // let test01 = Symbol();
// // let test02 = Symbol();

// // console.log(test01 === test02);

// // let id = Symbol("userId");

// // const member = {
// //   name: "David",
// //   [id]: 12345,
// // };

// // console.log(member);

// // const fncTest = () => {
// //   console.log("click");
// // };

// let a = 10;
// let b = a;

// console.log(a, b);

// let obj1 = {
//   c: 10,
//   d: "ddd",
// };

// let obj2 = obj1;

// console.log(obj1, obj2);

// b = 15;
// obj2.c = 20;

// console.log(a, b);
// console.log(obj1, obj2);

// const fruits = ["apple", "banana", "cherry"];

// const favorite = [...fruits];

// favorite[1] = "grape";

// console.log(fruits);

// const one = "20";
// const two = 10;

// const sum = one + two;

// console.log(parseFloat("36.4"));

// const num = null;

// // console.log(typeof num.toString());

// console.log(typeof String(num));

// console.log(Boolean(0));

// const json = "test.json";

// if(json) {

// }
const number = prompt("자연수를 입력해주세요!");

console.log(number);
