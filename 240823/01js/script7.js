// const displayHello = () => {
//   console.log("Hello");
// };

// displayHello();

// const displayHello = async () => {
//   console.log("Hello");
// };

// console.log(displayHello());

// const whatsYourFavorite = () => {
//   const fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// };

// const displaySubject = (subject) => {
//   return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
// };

// whatsYourFavorite().then(displaySubject).then(console.log);

// async => 함수형태
// await => 예약어 (*특정 요소의 실행을 기다렸다가 진행되도록 하게 해주는 예약어)
// await 예약어는 절대로 혼자서 독립적 사용 x
// async 함수 내부에서만 반드시 사용!!!

const whatsYourFavorite = async () => {
  const fav = "Javascript";
  return fav;
};

const displaySubject = async (subject) => {
  return `Hello, ${subject}`;
};

const init = async () => {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
};

init();
