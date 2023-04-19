import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import BackendClient from "../../BackendClient"
import { teamBackendUrl, matchTeamsBackendUrl,bowlerBackendUrl } from "../../urls"

const initialState = {
  loading: false,
  error: "",
  message: "",
  bowlerinfo: [],
  teaminfo: [],
}
const matchId=1

// export const teamData = createAsyncThunk("header/teamData", () => {
//   return BackendClient.get(teamBackendUrl()).then((res) => res.data)
// })

export const bowlerData = createAsyncThunk("header/bowlerData", () => {
  return BackendClient.get(bowlerBackendUrl()).then((res) => res.data)
})

export const matchteamData = createAsyncThunk("header/matchteamData", () => {
  return BackendClient.get(matchTeamsBackendUrl(matchId)).then(
    (res) => res.data
  )
})

const barChartSlice = createSlice({
  name: "barchart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(matchteamData.pending, (state) => {
        state.loading = true
      })
      .addCase(matchteamData.fulfilled, (state, action) => {
        //alert("Got team fulfill")
        state.loading = false
        state.error = false
        state.message = ""
        console.log(action.payload)
        state.teaminfo = action.payload
      })
      .addCase(matchteamData.rejected, (state, action) => {
        alert("Got team reject")
        state.loading = false
        state.error = true
        state.message = action.error.message
        state.teaminfo = []
      })
      .addCase(bowlerData.pending, (state) => {
        state.loading = true
      })
      .addCase(bowlerData.fulfilled, (state, action) => {
        //alert("Got team fulfill")
        state.loading = false
        state.error = false
        state.message = ""
        console.log(action.payload)
        state.bowlerinfo = action.payload
      })
      .addCase(bowlerData.rejected, (state, action) => {
        alert("Got team reject")
        state.loading = false
        state.error = true
        state.message = action.error.message
        state.bowlerinfo = []
      })
  },
})

export default barChartSlice.reducer
