import authReducer from "../features/authSlice";
import { combineReducers } from "redux";
import { authApi } from "../features/api/authApi";


const rootReducer = combineReducers({
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
})

export default rootReducer