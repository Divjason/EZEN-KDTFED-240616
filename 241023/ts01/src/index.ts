// // const numArr: number[] = [1, 2, 3];
// // const strArr: string[] = ["hello", "world"];
// // const boolArr: Array<boolean> = [true, false, true];

// // let multiArr: (number | string)[] = [1, "hello"];

// // let doubleArr: number[][] = [
// //   [1, 2, 3],
// //   [4, 5],
// // ];

// // let tup1: [number, number] = [1, 2];
// // // tup1 = [1, 2, 3];

// // tup1.push(5);

// // TS
// // 객체 & 함수 타입 정의

// const user: {
//   id?: number;
//   name: string;
// } = {
//   name: "David",
// };

// // const result = user.id;
// // 구조적 타입시스템을 적용!!!
// // 점진적 타입시스템
// // 선택적 타입적용

// let config: {
//   readonly apikey: string;
// } = {
//   apikey: "321546846354",
// };

// // config.apikey = "Hacked";

// type User = {
//   id: number;
//   name: string;
//   location: string;
// };

// let user1: User = {
//   id: 1,
//   name: "David",
//   location: "Seoul",
// };

// let user2: User = {
//   id: 2,
//   name: "Peter",
//   location: "Incheon",
// };

// const fnc = () => {
//   type User = {};
// };

// // 인덱스 시그니처
// // > 타입별칭으로 어떤 타입을 정의 => 하위 요소의 모든 타입의 형태가 동일한 경우!!

// type CountryCodes = {
//   [key: string]: string;
// };

// const countryCodes: CountryCodes = {
//   Korea: "ko",
//   UnitedState: "us",
//   UnitedKingdom: "uk",
// };

// // 최우선의 방법 추천x
// // 객체의 타입 : interface 타입

// interface User01 {
//   id: number;
// }

// // implements // extends

// interface Person {
//   name: string;
//   age: number;
//   etc?: boolean;
// }

// const person01: Person = {
//   name: "Peter",
//   age: 20,
// };

// const person02: Person = {
//   name: "Peter",
//   age: 20,
//   etc: true,
// };

// class Person1 {
//   name: string;
//   age: number;
// }

// const person03: Person1 = new Person1();
// person03.name = "peter";
// person03.age = 20;

// console.log(person03);

// // class Person2 {
// //   name: string;
// //   age: number;

// //   constructor(name: string, age: number) {
// //     this.name = name;
// //     this.age = age;
// //   }
// // }

// class Person2 {
//   constructor(public name: string, public age?: number) {}
// }

// const person04 = new Person2("Romeo");
// console.log(person04);

// interface Person5 {
//   name: string;
//   age: number;
// }

// class Person6 implements Person5 {
//   constructor(public name: string, public age: number) {}
// }

// const person05 = new Person6("Juliet", 20);
// console.log(person05);

/* 추상클래스 */
/* 추상화 */
/* 형태가 없는 비정형화된 사물을 표현하는 것! */
/* 어떤 클래스를 정의하기 위해서 추상적인 개념을 만들어놓고, 해당 추상적인 개념을 모티브로 클래스를 선언 & 생성 */

// abstract class Person7 {
//   constructor(public name: string, public age: number) {}
// }

// class Person8 extends Person7 {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
// }

// const person06 = new Person8("Bruce", 20);
// console.log(person06);

// // static 속성!!
// class TestA {
//   static initialValue = 1;
// }

// const test01A = TestA.initialValue;

// console.log(test01A);

// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// const user1 = {
//   name: "David",
//   role: Role.ADMIN,
// };
// const user2 = {
//   name: "David",
//   role: Role.USER,
// };
// const user3 = {
//   name: "David",
//   role: Role.GUEST,
// };

// console.log(user1, user2, user3);

// let test01: any = 10;
// test01 = "Hello";

// let test02: unknown;

// test02 = "World";
// test02 = 1;
// test02 = () => {};

// let test03 = test01;

// let test04: number = 20;

// // 타입 제한 적용
// if (typeof test02 === "number") {
//   test04 = test02;
// }

const func1 = (): string => {
  return "hello";
};

const func2 = (): void => {
  console.log("World");
};

let test05: void;

// test05 = 1;
// test05 = "Hello";
// test05 = true;

test05 = undefined;

let test06: never;

// test06 = 1;
// test06 = "Hello";
// test06 = true;
// test06 = undefined;
// test06 = any;
// test06 = null;

// const func3 = (): never => {
//   while (true) {}
// };

// let obj: object = {
//   name: "David",
// };

// interface Nameable {
//   name: string;
// }

// // 타입단언
// let name1 = (<Nameable>obj).name;
// let name2 = (obj as Nameable).name;

// console.log(name1, name2);

const add = (a: number, b: number): number => {
  return a + b;
};

// 타입별칭
type PrintMeFnc = (name: string, age: number) => void;

// 함수 시그니처
const printMe: PrintMeFnc = (name, age) => {
  console.log(`name: ${name}, age: ${age}`);
};

interface Nameable02 {
  name: string;
}

/* 타입 가드를 설정 */
const getName = (o: Nameable02) => {
  return o !== undefined ? o.name : "Loading...";
};

// const dataResult = getName(undefined);

// console.log(dataResult);
// console.log(getName({ name: "David" }));

// const getName = (o: Nameable02 | undefined) => {
//   return o !== undefined ? o.name : "Loading...";
// };
