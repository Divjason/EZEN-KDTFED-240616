let initialState = { contactList: [], keyword: "" };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    // return {
    //   ...state,
    //   contactList: [
    //     ...state.contactList,
    //     { name: payload.name, phoneNumber: payload.phoneNumber },
    //   ],
    // };
    case "SEARCH":
      state.keyword = payload.keyword;
      break;
    // return {
    //   ...state,
    //   keyword: payload.keyword,
    // };
    // default:
    //   return { ...state };
  }
  return { ...state };
};

export default reducer;

// const userList = [
//   {
//     name: "David",
//     number: "01012345678",
//   },
//   {
//     name: "Micheal",
//     number: "01012345678",
//   },
//   {
//     name: "Joran",
//     number: "01012345678",
//   },
// ];
