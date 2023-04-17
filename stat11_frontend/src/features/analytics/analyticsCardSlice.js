import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import {
  matchTeamsBackendUrl,
  matchBackendUrl,
  teamBackendUrl,
  teamUrl,
} from "../../urls";

const initialState = {
  loading: false,
  error: "",
  message: "",
  playerinfo: [],
  teaminfo: [],
};
const matchId = 1;

export const teamData = createAsyncThunk("header/teamData", () => {
  return BackendClient.get(teamBackendUrl()).then((res) => res.data);
});

export const playerData = createAsyncThunk("header/playerData", () => {
  return BackendClient.get(teamUrl()).then((res) => res.data);
});

export const matchteamData = createAsyncThunk("header/matchteamData", () => {
  return BackendClient.get(matchTeamsBackendUrl(matchId)).then((res) => res.data);
});

const analyticsCardSlice = createSlice({
  name: "analyticsCard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(matchteamData.pending, (state) => {
        state.loading = true;
      })
      .addCase(matchteamData.fulfilled, (state, action) => {
        alert("Got team fulfill");
        state.loading = false;
        state.error = false;
        state.message = "";
        console.log(action.payload);
        state.teaminfo = action.payload;
      })
      .addCase(matchteamData.rejected, (state, action) => {
        //alert("Got team reject");
        state.loading = false;
        state.error = true;
        state.message = action.error.message;
        state.teaminfo = [];
      })
      .addCase(playerData.pending, (state) => {
        state.loading = true;
      })
      .addCase(playerData.fulfilled, (state, action) => {
        //alert("Got team fulfill");
        state.loading = false;
        state.error = false;
        state.message = "";
        //console.log(action.payload);
        state.playerinfo = action.payload;
      })
      .addCase(playerData.rejected, (state, action) => {
        alert("Got team reject");
        state.loading = false;
        state.error = true;
        state.message = action.error.message;
        state.playerinfo = [];
      });
  },
});

export default analyticsCardSlice.reducer;
