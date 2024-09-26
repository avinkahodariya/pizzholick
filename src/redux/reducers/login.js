// import store from "../store";

const int = {
  username: null,
  password: null,
  item: [],
};

const login = (state = int, action) => {
  switch (action.type) {
    case "login": {
      console.log("user", action.payload);
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };
    }
    default:
      return state;
  }
};
export default login;
