import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./components/Redux/Reducers";

const store = createStore(rootReducer, composeWithDevTools())

export default store;