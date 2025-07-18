import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import { authApi } from "../features/api/authApi";
import { courseApi } from "../features/api/courseApi";




export const appStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(authApi.middleware, courseApi.middleware)
})

const initializeApp = async () => {
    try {
        await appStore.dispatch(authApi.endpoints.loadUser.initiate({}, {forceRefetch: true}));
    } catch (error) {
        console.log(error);
    }
}

initializeApp();