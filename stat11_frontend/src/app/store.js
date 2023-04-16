import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import sideBarReducer from "../features/sideBar/sideBarSlice";
import headerReducer from "../features/header/headerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    sideBar: sideBarReducer,
    header: headerReducer,
  },
});
