import { combineReducers } from "redux";
import characterReducer from "./characterReducer";
import stringReducer from "./stringReducer";

const reducers = combineReducers({
    char: characterReducer,
    str: stringReducer
})

export default reducers;