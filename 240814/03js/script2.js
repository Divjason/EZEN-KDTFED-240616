// const Book = function (title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;

//   this.finish = function () {
//     let str = "";
//     this.done === false ? (str = "읽는 중") : (str = "완독");
//     return str;
//   };
// };

// const book1 = new Book("자바스크립트", 648, false);

// // console.log(book1.title);
// console.log(book1.__proto__);
// // 인스턴스 객체의 프로토타입을 확인!!! 속성

// console.log(Book.prototype);
// // 인스턴스 객체의 조상이 되는 프로토타입 객체를 생성해준 생성자 함수가 가지고 있는 속성 및 메서드 함수를 확인!!!

// // function Book() {

// // }

// 상속에 대한 개념을 설명하기 전, 인스턴스 객체의 기원!!
// 찾은 해당 기원의 속성을 확인, prototype
// 객체 선언!!!

// 키 접근 : 온점 // 대괄호

// function Newbook(title, pages, done = false) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
// }

// Newbook.prototype.finish = function () {
//   let str = "";
//   this.done === false ? (str = "읽는 중") : (str = "완독");
//   return str;
// };

// const nbook1 = new Newbook("타입스크립트", 648, false);
// console.log(nbook1.finish());

function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
};

const book1 = new Book("뽀로로", 10000);

book1.buy();

function TextBook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}

TextBook.prototype.buyTextBook = function () {
  console.log(`${this.major} 전공 서적, ${this.title}을 구매하였습니다!`);
};

Object.setPrototypeOf(TextBook.prototype, Book.prototype);

const book2 = new TextBook("잘될거야!", 20000, "인생");

book2.buyTextBook();
book2.buy();

console.log(TextBook);
