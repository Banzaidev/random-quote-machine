import { configureStore } from "@reduxjs/toolkit";
import { quoteReducer } from "./reducers";


export const store = configureStore({reducer: quoteReducer})

