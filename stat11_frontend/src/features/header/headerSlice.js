import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { matchBackendUrl,teamBackendUrl } from "../../urls";

const initialState = {
  loading: false,
  error: "",
  message: "",
  team1: " ",
  team2: " ",
  toss: 1,
  payload: 0,
  matchinfo: [],
  teaminfo: [],
};

export const headerData = createAsyncThunk("header/headerData", () => {
  return BackendClient.get(matchBackendUrl()).then((res) => res.data);
});

export const teamData = createAsyncThunk("header/teamData", () => {
  return BackendClient.get(teamBackendUrl()).then((res) => res.data);
});

// export const headerData = createAsyncThunk("match/teamData", async () => {
//   try {
//     const res = await BackendClient.get(headerUrl());
//     return res.data;
//   } catch (err) {
//     return console.log(err);
//   }
// });

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(headerData.pending, (state) => {
        state.loading = true;
      })
      .addCase(headerData.fulfilled, (state, action) => {
        alert("Got fulfill");
        state.loading = false;
        state.error = false;
        state.message = "";
        //console.log(action.payload);
        state.matchinfo = action.payload;
        // console.log(action.payload.matchinfo);
      })
      .addCase(headerData.rejected, (state, action) => {
        alert("Got reject");
        state.loading = false;
        state.error = true;
        state.message = action.error.message;
        state.matchinfo = [];
      })
      .addCase(teamData.pending, (state) => {
        state.loading = true;
      })
      .addCase(teamData.fulfilled, (state, action) => {
        alert("Got team fulfill");
        state.loading = false;
        state.error = false;
        state.message = "";
        console.log(action.payload);
        state.teaminfo = action.payload;
      })
      .addCase(teamData.rejected, (state, action) => {
        alert("Got team reject");
        state.loading = false;
        state.error = true;
        state.message = action.error.message;
        state.teaminfo = [];
      });
  },
});

export default headerSlice.reducer;
