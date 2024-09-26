import React, { useState, useEffect } from "react";
import NavForIngrediants from "./NavForIngrediants";
import { connect } from "react-redux";
import EditPortion from "./EditPortion";
import styles from "./pizzaedit.module.css";
import { useHistory, useLocation } from "react-router-dom";
import * as All from "../assets/images";
import Footer from "../global/Footer";
import Button from "../global/Button";
import { memo } from "react";
// import { addToCart } from "./Function/addToCart";
import { useParams } from "react-router-dom";
import * as Al from "../assets/images";

const PizzaEdit = (props) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [data, setdata] = useState({
    name: "Italian Pizza",
    ingredients: [
      ["Tomato", Al.Tomato],
      ["Brokoli", Al.Brokoli],
      ["Onion", Al.Onion],
      ["Olive", Al.Olive],
      ["Mozzarella", Al.Mozzarella],
    ],
    price: "300",
    id: "1",
    image: Al.italian,
    newprice: 0,
    count: 1,
  });

  const [cartitem, setcartitem] = useState(null);
  const [reg, setreg] = useState([]);
  var { id, login } = useParams();
  let history = useHistory();
  var location = useLocation();
  var pid = useParams().id;
  var ingredients = data.ingredients;
  var price = data.price;
  var name = data.name;
  var id = data.id;
  var image = data.image;

  console.log(cartitem);
  const handleChange = (event) => {
    console.log(checkedItems);

    if (event.target.checked) {
      setCheckedItems([
        ...checkedItems,
        [
          event.target.name,
          ingredients.filter((e) => {
            if (event.target.name == e[0]) {
              return e[1];
            }
          }),
        ],
      ]);
    } else {
      let name = event.target.getAttribute("name");

      setCheckedItems(checkedItems.filter((item) => item[0] !== name));
    }
  };

  var username = login;
  var reciepe = checkedItems;

  const delcart = (e) => {
    var f_id = e.uid;

    var cartitem = JSON.parse(localStorage.getItem("cartitem"));
    var find_item = cartitem.findIndex(({ uid }) => {
      return uid == f_id;
    });

    cartitem.splice(find_item, 1);
    localStorage.setItem("cartitem", JSON.stringify(cartitem));
    setcartitem(cartitem);
    props.dele(e);
  };

  const addtothecart = (data) => {
    if (login == null) {
      history.push("/login");
    } else {
      console.log(data);
      data.reciepe = reciepe;
      data.username = login;

      function create_UUID() {
        var dt = new Date().getTime();
        var uuid = "xxxxxxx".replace(/[xy]/g, function (c) {
          var r = (dt + Math.random() * 16) % 16 | 0;
          dt = Math.floor(dt / 16);
          return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        });
        return uuid;
      }

      data.uid = create_UUID();
      console.log(data.uid);

      // setdata({ ...data });
      if (props.user.length == 0) {
        var a = reg.find((e) => {
          console.log(login, e.username);
          if (e.username == login) {
            return e;
          }
        });
        console.log(a);

        console.log(cartitem);
        props.register(a);
        console.log(cartitem);

        cartitem.push(data);
        console.log(cartitem);

        setcartitem(cartitem);
        console.log(
          "🚀 ~ file: PizzaEdit.js ~ line 152 ~ addtothecart ~ cartitem",
          cartitem
        );

        localStorage.setItem("cartitem", JSON.stringify(cartitem));

        props.addcart(data);
      } else {
        console.log("asd");
        var check = props.user.find((e) => {
          if (e.username == login) {
            return true;
          } else {
            return false;
          }
        });
        if (check == false) {
          history.push(`/`);
        } else {
          console.log(
            "🚀 ~ file: PizzaEdit.js ~ line 169 ~ addtothecart ~ cartitem",
            cartitem
          );
          console.log(data, cartitem);
          cartitem.push(data);
          setcartitem(cartitem);
          localStorage.setItem("cartitem", JSON.stringify(cartitem));

          props.addcart(data);
        }
      }

      setdata({ ...data });
    }
  };
  // console.log(props.cartitem, cartitem);
  const gotocart = () => {
    setcartitem(null);
    history.push(`${location.pathname}/cart`);
    // history.push({
    //   pathname: `${location.pathname}/cart`,
    //   state: delcart,
    // });
  };
  useEffect((id) => {
    let pizaadata = JSON.parse(localStorage.getItem("pizzastore"))[0];

    let pizzaid = pizaadata.find((e) => {
      if (e.id == pid) {
        return e;
      }
    });
    console.log(pizzaid);
    setdata(pizzaid);
  }, []);

  useEffect(() => {
    let ct = JSON.parse(localStorage.getItem("cartitem"));
    if (ct == null || ct == undefined) {
      ct = [];
    }

    setcartitem(ct);
  }, []);
  useEffect(() => {
    let reg = JSON.parse(localStorage.getItem("reg"));
    setreg(reg);
  }, []);

  return (
    <>
      <div className={styles.flex}>
        <p className={styles.pizzatitle}>
          Let`s Crete Your Own Pizza
          <img
            src={All.icon}
            style={{
              width: "50px",
              height: "100%",
              float: "right",
              marginRight: "5px",
              backdropFilter: "bllur(10px)",
              backgroundColor: "#313131",
            }}
            onClick={gotocart}
          />
        </p>
        <div className={styles.pizzarelative}>
          <EditPortion reciepe={checkedItems} data={data} />
        </div>

        <NavForIngrediants
          reciepe={checkedItems}
          handleChange={handleChange}
          data={data}
        />

        <Button
          name={"Buy Now..."}
          className={styles.center}
          Handleclick={gotocart}
          delcart={delcart}
        />

        <Button
          name={"Add To Cart.."}
          className={styles.center}
          Handleclick={() => addtothecart(data)}
        />

        <Footer />
      </div>
    </>
  );
};

const mapstateToprops = (state) => {
  return {
    username: state.login.username,
    cartitem: state.addcart.cartitem,
    user: state.register.user,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    addcart: (payload) => {
      dispatch({
        type: "addcart",
        payload,
      });
    },
    register: (payload) => {
      dispatch({
        type: "Register",
        payload,
      });
    },
    dele: (payload) => {
      dispatch({
        type: "dele",
        payload,
      });
    },
  };
};

export default connect(mapstateToprops, mapDispatchToprops)(PizzaEdit);
