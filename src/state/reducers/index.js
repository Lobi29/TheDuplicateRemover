import { combineReducers } from "redux";
import characterReducer from "./characterReducer";
import stringReducer from "./stringReducer";
import indexReducer from "./indexReducer";

const reducers = combineReducers({
    char: characterReducer,
    str: stringReducer,
    index: indexReducer
})

export default reducers;