// Keyof 연산자 : 객체 타입으로부터 모든 속성의 key의 타입을 유니온 형식으로 추출해주는 연산자

// interface Person {
//   name: string;
//   age: number;
//   location: string;
// }

type Person = typeof person;

const person = {
  name: "David",
  age: 20,
  location: "seoul",
};

// const getProperty = (person: Person, key: "name" | "age" | "location") => {
//   return person[key];
// };

const getProperty = (person: Person, key: keyof typeof person) => {
  return person[key];
};
