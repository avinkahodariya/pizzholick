import React from "react";
import { useLocation } from "react-router-dom";
import Info from "./Info";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./pizzaedit.module.css";
import Button from "../global/Button";
import Icon from "@material-ui/core/Icon";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const Cart = (props) => {
  const [user_cart, setusercart] = useState([]);
  const { login } = useParams();
  const location = useLocation();
  // const [count, setcount] = useState(0);
  var c;

  console.log("render", location);

  // useEffect(()=>{
  //   c=
  // })
  useEffect(() => {
    if (user_cart == undefined || user_cart == null || user_cart.length == 0) {
    }
  });
  useEffect(() => {
    var i = 0;
    console.log("asd");
    if (
      props.cartitem == null ||
      props.cartitem == undefined ||
      props.cartitem.length == 0
    ) {
      let cartitem = JSON.parse(localStorage.getItem("cartitem"));
      console.log(
        "🚀 ~ file: Cart.js ~ line 47 ~ useEffect ~ cartitem",
        cartitem
      );

      var find = cartitem.filter((e) => {
        console.log(e.username, login, e);
        if (e.username == login) {
          e.cid = i;
          i++;
          return e;
        }
      });
      console.log("🚀 ~ file: Cart.js ~ line 58 ~ find ~ find", find);

      if (find) {
        find.forEach((e) => {
          console.log("asder");
          props.addcart(e);
          console.log("asdadsfer");
        });
      }
      console.log(props.cartitem);
      let user_c = [];
      find.forEach((e) => {
        user_c.push(e);
      });
      setusercart(user_c);
    } else {
      let find = props.cartitem.filter((e) => {
        if (e.username == login) {
          return e;
        }
      });
      let user_c = [];
      if (find) {
        find.forEach((e) => {
          user_c.push(e);
        });
        setusercart(user_c);
      }
    }

    let cart;
  }, []);

  const countplus = (e) => {
    // console.log(e, e.count);
    var f_id = e.uid;

    var cartitem = JSON.parse(localStorage.getItem("cartitem"));
    var find_item = cartitem.find(({ uid }) => {
      return uid == f_id;
    });
    console.log(find_item);
    console.log(find_item.newprice);
    find_item.newprice =
      parseInt(find_item.newprice) + parseInt(find_item.price);
    find_item.count = parseInt(find_item.count) + 1;
    localStorage.setItem("cartitem", JSON.stringify(cartitem));
    props.updatecart(find_item);

    setusercart(cartitem);
  };

  const countminus = (e) => {
    // console.log(e, e.count);
    var f_id = e.uid;

    var cartitem = JSON.parse(localStorage.getItem("cartitem"));
    var find_item = cartitem.find(({ uid }) => {
      return uid == f_id;
    });
    // console.log(find_item.count, find_item.count !== 0);

    if (find_item.count !== 0) {
      console.log(find_item.count);
      find_item.count = parseInt(find_item.count) - "1";
      find_item.newprice =
        parseInt(find_item.newprice) - parseInt(find_item.price);
    }
    localStorage.setItem("cartitem", JSON.stringify(cartitem));
    props.updatecart(find_item);

    setusercart(cartitem);
  };

  const del = (e) => {
    var f_id = e.uid;

    var cartitem = JSON.parse(localStorage.getItem("cartitem"));
    var find_item = cartitem.findIndex(({ uid }) => {
      return uid == f_id;
    });

    cartitem.splice(find_item, 1);
    localStorage.setItem("cartitem", JSON.stringify(cartitem));
    setusercart(cartitem);
    props.dele(e);
  };
  console.log(user_cart);

  return (
    <div>
      {user_cart.map((e, i) => {
        // console.log(i);
        var rp = [];
        // console.log(e.reciepe);
        for (var i = 0; i < e.reciepe.length; i++) {
          rp.push(e.reciepe[i][0]);
        }

        return (
          <div className={styles.cartlist} id={i}>
            <img
              src={e.image}
              style={{
                borderRadius: "1em",
                width: "15%",
                height: "200px",
              }}
            />
            {}
            <div className={styles.cartinfo}>
              <Info ingrediants={rp} name={e.name} price={e.price} />
            </div>
            <div className={styles.plusminus}>
              {e.newprice}
              <IconButton
                id={e.uid}
                onClick={() => {
                  countplus(e);
                }}
                style={{ fontSize: 30, height: "25px", width: "25px" }}
              >
                +
              </IconButton>
              {e.count}
              <IconButton
                id={e.uid}
                onClick={() => {
                  countminus(e);
                }}
                style={{ fontSize: 30, height: "25px", width: "25px" }}
              >
                -
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => {
                  del(e);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapstateToprops = (state) => {
  return {
    username: state.login.username,
    cartitem: state.addcart.cartitem,
    count: state.addcart.count,
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
    updatecart: (payload) => {
      dispatch({
        type: "updatecart",
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

export default connect(mapstateToprops, mapDispatchToprops)(Cart);
