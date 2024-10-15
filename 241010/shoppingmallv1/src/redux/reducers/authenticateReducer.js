let initialState = {
  id: "",
  pw: "",
  authenticate: false,
};

const authenticateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      console.log("login success reducer");
      return {
        ...state,
        id: payload.id,
        pw: payload.pw,
        authenticate: true,
      };
    default:
      return { ...state };
  }
};

export default authenticateReducer;
