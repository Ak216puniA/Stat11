import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import sideBarReducer from '../features/sideBar/sideBarSlice'
import matchReducer from '../features/match/matchSlice'
import teamReducer from '../features/team/teamSlice'
import playerReducer from '../features/player/playerSlice'
import pieChartReducer from "../features/analytics/pieChartSlice";
import analyticsCardReducer from "../features/analytics/analyticsCardSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    sideBar: sideBarReducer,
    match: matchReducer,
    team: teamReducer,
    player: playerReducer,
    pieChart: pieChartReducer,
    analyticsCard: analyticsCardReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});
