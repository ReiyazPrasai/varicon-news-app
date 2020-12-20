import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";

const rootReducer = combineReducers({

});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export default store;
