const login = (id, pw) => {
  return (dispatch) => {
    console.log("login success action");
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, pw } });
  };
};

export const authenticateAction = { login };
