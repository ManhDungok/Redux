import { combineReducers } from "redux";
import counterReducer from './counterReducer';
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    counter1: counterReducer,
    user: userReducer,
});

export default rootReducer;