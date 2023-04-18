import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import sideBarReducer from "../features/sideBar/sideBarSlice";
import matchReducer from "../features/match/matchSlice";
import pieChartReducer from "../features/analytics/pieChartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    sideBar: sideBarReducer,
    match: matchReducer,
    pieChart: pieChartReducer,
  },
});
