import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { Reducer } from "./reducer";

const rootreducer=combineReducers({product:Reducer});
const Store=configureStore({reducer:rootreducer})
export default Store;