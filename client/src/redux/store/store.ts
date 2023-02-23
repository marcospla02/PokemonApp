import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/reducer";

// para poder usar devtools
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//, composeEnhancer(applyMiddleware(thunk))

const store = createStore(rootReducer);

export default store;
