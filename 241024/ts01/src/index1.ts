// 외부 API 데이터를 찾아오게 되었을 때, 타입을 지정!!

// const loading = {
//   state: "LOADING",
// };

// const failed = {
//   state: "FAILED",
//   error: {
//     message: "오류발생...",
//   },
// };

// const success = {
//   state: "SUCCESS",
//   response: {
//     data: "movie...",
//   },
// };

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

const processResult = (task: AsyncTask) => {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중....");
      break;
    }
    case "FAILED": {
      console.log(`에러발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
};
