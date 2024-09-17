// import React from "react";
// import styles from "../css/login.module.css";
// import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from "react-router-dom";
// import Input from "../global/Input";
// import Button from "../global/Button";
// import { useState } from "react";
// import setState from "./function/setstate";
// import { useEffect } from "react";

// const Login = (props) => {
//   const [username, setusername] = useState("");
//   const [password, setpassword] = useState("");
//   const [reg_array, setreg] = useState([]);
//   let history = useHistory();
//   console.log("login render");
//   const data = {
//     username,
//     password,
//   };

//   const login = (data) => {
//     if (reg_array == null || reg_array == undefined) {
//       history.push("/signin");
//     }
//     //  setre reg_array = data;
//     else {
//       props.register(reg_array);
//       var find = reg_array.find((e) => {
//         if (e.username == data.username && e.password == data.password) {
//           props.loginreducer(e.username);
//           return true;
//         } else {
//           return false;
//         }
//       });
//       if (find !== undefined) {
//         props.loginreducer(data);
//         history.push(`//${data.username}`);
//       }
//     }
//   };
//   useEffect(() => {
//     let reg = JSON.parse(localStorage.getItem("reg"));
//     setreg(reg);
//   }, []);
//   return (
//     <>
//       <Switch>
//         <div className={styles.login}>
//           <Route path="/login" exact>
//             <div className={styles.title}> Login </div>
//             <p>USERNAME</p>
//             <Input
//               type="text"
//               name="Username"
//               value={username}
//               onChange={(event) => {
//                 setState(username, setusername, event.target.value);
//               }}
//             />
//             <p>PASSWORD</p>
//             <Input
//               type="password"
//               name="Password"
//               value={password}
//               onChange={(event) => {
//                 setState(password, setpassword, event.target.value);
//               }}
//             />
//             <Button name="Log-in" Handleclick={() => login(data)} />
//             {/* {correct == false ? (
//                 <h4>Please enter correct username or password</h4>
//               ) : (
//                 ""
//               )} */}
//           </Route>
//         </div>
//       </Switch>
//     </>
//   );
// };

// const mapstateToprops = (state) => {
//   return {
//     user: state.register.user,
//     username: state.login.username,
//   };
// };

// const mapDispatchToprops = (dispatch) => {
//   return {
//     loginreducer: (payload) => {
//       dispatch({
//         type: "login",
//         payload,
//       });
//     },
//     register: (payload) => {
//       dispatch({
//         type: "register",
//         payload,
//       });
//     },
//   };
// };

// export default connect(mapstateToprops, mapDispatchToprops)(Login);

import React from "react";
import { useState } from "react";
// import { useState } from "react";
import { Input } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { flexbox } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./css.module.css";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { Redirect } from "react-router";
import { useHistory } from "react-router";
// import { login } from "./Auth";
import { login } from "./config";
import { connect } from "react-redux";
import { db } from "./config";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Login = (props) => {
  const history = useHistory();
  const location = useLocation();

  const [Email, setEmail] = useState(null);

  const [Password, setPassword] = useState(null);
  // const handleSubmit = () => {
  //   var a = login({ Email, Password });
  //   console.log(a);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let a = await login(Email, Password);

    // console.log(a);

    if (a !== undefined) {
      await db
        .collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            props.User_data(doc.data());
            // history.push(`/${location.pathname}/`);
            history.push({
              pathname: `/${doc.data().uid}`,
              search: `${doc.data().uid}`,
            });
            // console.log("asdfgh");
          });
        });

      // history.push("//${}");
    }
  };

  const gotosignin = () => {
    // console.log("rege");
    history.push("/signin");
  };

  return (
    <>
      <Container maxWidth="l">
        <Box
          display="flex"
          flexDirection="column"
          width="40%"
          margin="0 auto"
          className={styles.root}
        >
          <EmailIcon></EmailIcon>{" "}
          <TextField
            required
            id="standard-required"
            label="Email"
            type="email"
            label="Email"
            variant="outlined"
            className={styles.MuiTextField}
            onChange={(e) => {
              console.log("df", e.target.value);
              setEmail(e.target.value);
            }}
          />
          <LockIcon />{" "}
          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            className={styles.MuiTextField}
            onChange={(e) => {
              console.log("df", e.target.value);
              setPassword(e.target.value);
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            onClick={handleSubmit}
          >
            Login{" "}
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            onClick={gotosignin}
          >
            signin{" "}
          </Button>
        </Box>
      </Container>
    </>
  );
};

const mapDispatchToprops = (dispatch) => {
  return {
    User_data: (payload) => {
      dispatch({
        type: "User_data",
        payload,
      });
    },
  };
};

export default connect(null, mapDispatchToprops)(Login);
