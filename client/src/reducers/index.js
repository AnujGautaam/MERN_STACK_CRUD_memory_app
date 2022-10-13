import { combineReducers } from "redux";
import posts from "./posts"

const reducers = combineReducers({
    coasts: posts

})

export default reducers;