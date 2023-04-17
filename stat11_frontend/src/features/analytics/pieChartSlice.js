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
};
const matchId = 1;
export const headerData = createAsyncThunk("header/headerData", () => {
  return BackendClient.get(matchBackendUrl()).then((res) => res.data);
});

export const teamData = createAsyncThunk("header/teamData", () => {
  return BackendClient.get(teamBackendUrl()).then((res) => res.data);
});

export const playerData = createAsyncThunk("header/playerData", () => {
  return BackendClient.get(teamUrl()).then((res) => res.data);
});
// export const headerData = createAsyncThunk("match/teamData", async () => {
//   try {
//     const res = await BackendClient.get(headerUrl());
//     return res.data;
//   } catch (err) {
//     return console.log(err);
//   }
// });

const pieChartSlice = createSlice({
  name: "piechart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //   .addCase(headerData.pending, (state) => {
      //     state.loading = true;
      //   })
      //   .addCase(headerData.fulfilled, (state, action) => {
      //     alert("Got fulfill");
      //     state.loading = false;
      //     state.error = false;
      //     state.message = "";
      //     //console.log(action.payload);
      //     state.matchinfo = action.payload;
      //     // console.log(action.payload.matchinfo);
      //   })
      //   .addCase(headerData.rejected, (state, action) => {
      //     alert("Got reject");
      //     state.loading = false;
      //     state.error = true;
      //     state.message = action.error.message;
      //     state.matchinfo = [];
      //   })
      //   .addCase(teamData.pending, (state) => {
      //     state.loading = true;
      //   })
      //   .addCase(teamData.fulfilled, (state, action) => {
      //     alert("Got team fulfill");
      //     state.loading = false;
      //     state.error = false;
      //     state.message = "";
      //     console.log(action.payload);
      //     state.teaminfo = action.payload;
      //   })
      //   .addCase(teamData.rejected, (state, action) => {
      //     alert("Got team reject");
      //     state.loading = false;
      //     state.error = true;
      //     state.message = action.error.message;
      //     state.teaminfo = [];
      //   })
      .addCase(playerData.pending, (state) => {
        state.loading = true;
      })
      .addCase(playerData.fulfilled, (state, action) => {
        //alert("Got team fulfill");
        state.loading = false;
        state.error = false;
        state.message = "";
        console.log(action.payload);
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

export default pieChartSlice.reducer;
