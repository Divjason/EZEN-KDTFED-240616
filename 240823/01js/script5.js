// const step1 = (callback) => {
//   setTimeout(() => {
//     console.log("피자 도우 준비");
//     callback();
//   }, 2000);
// };

// const step2 = (callback) => {
//   setTimeout(() => {
//     console.log("토핑 완료");
//     callback();
//   }, 2000);
// };

// const step3 = (callback) => {
//   setTimeout(() => {
//     console.log("굽기 완료");
//     callback();
//   }, 2000);
// };

// console.log("피자를 주문합니다!");

// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("피자가 준비되었습니다!");
//     });
//   });
// });

const pizza = () => {
  return new Promise((resolve, resject) => {
    resolve("피자를 주문합니다!");
  });
};

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 도우 준비");
    }, 3000);
  });
};

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("토핑완료");
    }, 3000);
  });
};

const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("굽기 완료");
    }, 3000);
  });
};

// pizza()
//   .then((reult) => step1(reult))
//   .then((result) => step2(result))
//   .then((result) => step3(result))
//   .then((result) => console.log(result))
//   .then(() => console.log("피자가 준비되었습니다"));

pizza()
  .then(step1)
  .then(step2)
  .then(step3)
  .then(console.log)
  .then(() => console.log("피자가 준비되었습니다"));
