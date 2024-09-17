import { CompareArrowsOutlined } from "@material-ui/icons";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCWLO0UyRlfzxjnIyrUa8_uoq9a-OC9a4",
  authDomain: "fir-react-e457b.firebaseapp.com",
  projectId: "fir-react-e457b",
  storageBucket: "fir-react-e457b.appspot.com",
  messagingSenderId: "580035907925",
  appId: "1:580035907925:web:dd97f289fce72539041fdc",
  measurementId: "G-53SR9TEZGV",
};

const app = firebase.initializeApp(firebaseConfig);
var auth = app.auth();
const db = app.firestore();

const register = async (name, email, password, mobile) => {
  let resp;

  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    // console.log(res);
    const user = res.user;
    // console.log(user);

    let data = await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      mobile,
    });
    // console.log(data);

    resp = [true];
    return resp;
  } catch (err) {
    // console.error(err);
    alert(err.message);
    resp = [false, err, err.message];
    return resp;
  }
};

const login = async (email, password) => {
  console.log("adsfghjkhgfd");
  let resp;
  try {
    await auth.signInWithEmailAndPassword(email, password).then((res) => {
      console.log(res);
    });
    resp = [true];

    return resp;
  } catch (err) {
    console.error(err);
    alert(err.message);
    resp = [false, err, err.message];
  }
};

export { auth, db, register, login };
