import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import redicer from "./redicer";

export const store = createStore(redicer, {}, applyMiddleware(thunk))