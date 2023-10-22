import { combineReducers } from "redux";
import UserReducer from './user';
import PostReducer from "./post";
import HomeReducer from "./home";
import AboutusReducer from "./aboutus";

export default combineReducers({
    UserReducer,
    PostReducer,
    HomeReducer,
    AboutusReducer
})