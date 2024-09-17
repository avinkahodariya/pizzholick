const intialstate = {
  user: [],
  found: false,
};

const register = (state = intialstate, action) => {
  switch (action.type) {
    case "Register": {
      if (state.user.length !== 0) {
        var a = state.user.find((e) => {
          if (
            e.username == action.payload.username ||
            e.email == action.payload.email
          ) {
            return true;
          } else {
            return false;
          }
        });
        // console.log("a is:", a);
        if (a) {
          // console.log("a is found");
          return { ...state, found: true };
        } else {
          console.log("a is not fo");
          let reg = JSON.parse(localStorage.getItem("reg"));
          if (reg == null || reg == undefined) {
            reg = [];
            reg.push(action.payload);
            localStorage.setItem("reg", JSON.stringify(reg));
          }
          state.user.push(action.payload);

          return {
            ...state,
            user: state.user,
            found: false,
          };
        }
      } else {
        // console.log(action.payload);
        state.user.push(action.payload);
        // console.log(
        //   "🚀 ~ file: register.js ~ line 55 ~ register ~  state.user",
        //   state.user
        // );

        let reg = JSON.parse(localStorage.getItem("reg"));
        if (reg == null || reg == undefined) {
          reg = [];
          reg.push(action.payload);
          localStorage.setItem("reg", JSON.stringify(reg));
        } else {
          var a = reg.find((e) => {
            if (e.username == action.payload.username) {
              return true;
            } else {
              return false;
            }
          });

          if (a == false) {
            localStorage.setItem("reg", JSON.stringify(reg));
          }

          reg.push(action.payload);
        }

        return { ...state, user: state.user, found: false };
      }
    }

    default:
      return state;
  }
};
export default register;
