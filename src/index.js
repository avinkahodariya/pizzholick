import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./login/Login";
import Signin from "./login/Signin";
import PizzaEdit from "./PizzaEditFolder/PizzaEdit";
import styles from "./css/login.module.css";
import Cart from "./PizzaEditFolder/Cart";
import Select from "./compo/Select";
import TableMain from "./Table/TableMain";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
  <>
    <Provider store={store}>
      {/* <Router>
        <Switch>
          {" "}
          <Route path="/" exact>
            {" "}
            <div className={styles.main}>
              <Login />

              <Link to="/signin" style={{ textDecoration: "none" }}>
                {" "}
                <button>SIGN-IN</button>
              </Link>
            </div>
          </Route>


        
          <Route path="//:login" exact>
            <div className={styles.main}>
              <Login />

              <Link to="/signin" style={{ textDecoration: "none" }}>
                {" "}
                <button>SIGN-IN</button>
              </Link>
            </div>
          </Route>
          <Route path="/signin" exact>
            <div className={styles.main}>
              <Signin />

              <Link to="/" style={{ textDecoration: "none" }}>
                <button>LOG-IN</button>
              </Link>
            </div>
          </Route>
          <Route path="/:login/pizza" exact>
            <App />
          </Route>
          <Route path="/:login/pizza/pizzaedit" exact>
            <PizzaEdit />
          </Route>
          <Route path="/:login/pizza/pizzaedit/:id" exact>
            <PizzaEdit />
          </Route>
          <Route path="/:login/pizza/pizzaedit/:id/cart" exact>
            <Cart />
          </Route>
        </Switch>
      </Router> */}

      <Router>
        <Switch>
          <Route path="/login" exact>
            {/* <div className={styles.main}> */}
            <Login />

            {/* <Link to="/signin" style={{ textDecoration: "none" }}>
                {" "}
                <button>SIGN-IN</button>
              </Link>
            </div> */}
          </Route>

          <Route path="//:login" exact>
            {/* <div className={styles.main}> */}
            <Login />

            {/* <Link to="/signin" style={{ textDecoration: "none" }}>
                {" "}
                <button>SIGN-IN</button>
              </Link> */}
            {/* </div> */}
          </Route>
          <Route path="/signin" exact>
            {/* <div className={styles.main}> */}
            <Signin />

            {/* <Link to="/login" style={{ textDecoration: "none" }}>
                <button>LOG-IN</button>
              </Link> */}
            {/* </div> */}
          </Route>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/Table" exact>
            <TableMain />
          </Route>
          <Route path="/:login" exact>
            <App />
          </Route>
          <Route path="/:login/pizzaedit" exact>
            <PizzaEdit />
          </Route>
          <Route path="/pizzaedit" exact>
            <PizzaEdit />
          </Route>
          <Route path="/pizzaedit/:id" exact>
            <PizzaEdit />
          </Route>
          <Route path="/:login/pizzaedit/:id" exact>
            <PizzaEdit />
          </Route>
          {/* <Route path="/select" exact>
            <Select />
          </Route> */}
          <Route path="/:login/pizzaedit/:id/cart" exact>
            <Cart />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </>,
  document.getElementById("root")
);
