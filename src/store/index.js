import { configureStore, combineReducers } from "@reduxjs/toolkit";
import roleReducer from "./slice/roleSlice";
import usersReducer from "./slice/usersSlice";


const rootReducer = combineReducers({
    role: roleReducer,
    users: usersReducer
});

export default configureStore({
    reducer: rootReducer
})