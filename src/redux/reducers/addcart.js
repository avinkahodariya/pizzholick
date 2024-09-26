const intialstate = {
  cartitem: [],
};

const addcart = (state = intialstate, action) => {
  switch (action.type) {
    case "addcart": {
      console.log(action.payload.reciepe);
      if (state.cartitem == undefined) {
        state.cartitem = [];
      }
      console.log(
        "🚀 ~ file: addcart.js ~ line 20 ~ addcart ~   state.cartitem.",
        state.cartitem
      );
      state.cartitem.push(action.payload);

      console.log(
        "🚀 ~ file: addcart.js ~ line 20 ~ addcart ~   state.cartitem.",
        state.cartitem
      );
      // localStorage.setItem("cartitem", JSON.stringify(state.cartitem));
      return {
        ...state.cartitem,
        cartitem: state.cartitem,
      };
    }

    case "updatecart": {
      var newcartitem = state.cartitem.findIndex((e) => {
        return e.uid == action.payload.uid;
      });

      state.cartitem[newcartitem] = action.payload;
      console.log(state.cartitem);

      return {
        cartitem: state.cartitem,
      };
    }

    case "dele": {
      var newcartitem = state.cartitem.findIndex((e) => {
        return e.uid == action.payload.uid;
      });
      state.cartitem.splice(newcartitem, 1);
      return {
        cartitem: state.cartitem,
      };
    }
    default:
      return state;
  }
};
export default addcart;
