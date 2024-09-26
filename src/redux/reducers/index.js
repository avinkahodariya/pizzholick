import register from "./register";
import submit from "./submit";
import addcart from "./addcart";
import login from "./login";
import { combineReducers } from "redux";
const rootReducer = combineReducers({ register, login, addcart });

export default rootReducer;
