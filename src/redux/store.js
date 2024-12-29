import { combineReducers } from "redux";
// const redux = require("redux");
import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";

const combinedReducers = combineReducers({
    todoReducer,
    noteReducer
})

export const store = redux.createStore(combinedReducers);


