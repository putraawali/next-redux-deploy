import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counter";
import { createWrapper } from "next-redux-wrapper";

const reducer = combineReducers({
    counter: counterReducer,
});

const makeStore = () =>
    configureStore({
        reducer: reducer,
    });

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== "production" ? true : false,
});
