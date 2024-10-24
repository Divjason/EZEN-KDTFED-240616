// TS 타입
// 기본제공타입
// number, string, boolean, object
// unknown, any, null, undefined, void, symbol, never etc....

// 점진적 타입시스템 => 타입추론 => 타입주석을 입력하지 않아도 타입정의!!
let num = 1;
num = 10;
// num = "10";

// 아래와 같이 타입주석!!!
let str: string = "Hello";
str = "World";

let bool: boolean = true;

let obj: object = {
  name: "David",
};

// 다양한 종류의 타입 가운데, 치트키의 역할!!
// any는 모든 타입을 수용할 수 있음!!
let sample: any = 0;
sample = "Hello";
console.log(sample);

// undefined
let sample01: undefined = undefined;
sample01 = undefined;

let sample02: unknown = 10;
sample02 = true;

// 배열타입!!!
const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["David", "Peter"];
const boolArr: Array<boolean> = [true, false, true];

// union타입!!!
const multiArr: (string | number | boolean)[] = [1, "hello", true];

// 중첩배열!!!
const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 길이 & 타입이 고정된 배열 = Tuple타입
let tup1: [number, number] = [1, 2];

const users: [string, number][] = [
  ["David", 1],
  ["Romeo", 2],
  ["Juliet", 2],
  ["Peter", 4],
  ["David", 1],
  ["Romeo", 2],
  ["Juliet", 2],
  ["Peter", 4],
  ["David", 1],
  ["Romeo", 2],
  ["Juliet", 2],
  ["Peter", 4],
];
