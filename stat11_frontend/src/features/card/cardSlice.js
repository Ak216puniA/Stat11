import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendClient from "../../BackendClient";
import { teamUrl, matchUrl } from "../../urls";

const initialState = {
    loading: false,
    error: false,
    team1: " ",
    team1college: " ",
    team2: " ",
    team2college: " ",
    team1runs : 0,
    team2runs : 0,
    toss : 1,
    matchover : 1, 
    winner : "Yet to be decided ",
    team1wickets : 0,
    team2wickets : 0,
}

export const teamData = createAsyncThunk('card/teamData', () => {
    return BackendClient.get(teamUrl())
    .then(res => res.data)
    .catch(err => console.log(err))
});

export const teamDatahehe = () => {
    return BackendClient.get(
        teamUrl()
    )
    .then(res => res.data)
}

console.log(teamDatahehe())

const getTotalRunsForTeam1 = (data) => {
    const team1Players = data.filter((player) => player.team.id === 1);
    const totalRuns = team1Players.reduce((acc, player) => acc + player.runs, 0);
    console.log(totalRuns)
    return {totalRuns};
};

const getTotalRunsForTeam2 = (data) => {
    const team1Players = data.filter((player) => player.team.id === 2);
    const totalRuns = team1Players.reduce((acc, player) => acc + player.runs, 0);
    return {totalRuns};
};

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        updateteam1runs: (state,action) => {
            state.team1runs = teamDatahehe()[0].runs
        },
        updateteam2runs: (state,action) => {
            state.team2runs = action[1].runs
        },
        // updatetoss : (state, action) =>
        // {
        //     state.toss = action.payload
        // }

    },
    // const TossUpdater = (state = initialState, action)=>
    // {
    //     switch (action.type)
    //     {
    //         case UPDATE_TEAM1_RUNS:
    //             return {
    //                 ...state,
    //                 team1runs = team
    //             }
    //     }
    // },
    extraReducers: builder => {
        builder
        .addCase(teamData.pending, state => {
            state.loading = true
        })
        .addCase(teamData.fulfilled, (state,action) => {
            state.loading = false
            state.error = ''
            state.team1runs = action[0].runs
            console.log(action[0].runs)
            state.team2runs = action[1].runs
            // state.isAuthenticated = action.payload
            
        })
        .addCase(teamData.rejected, (state,action) => {
            state.loading = false
            state.error = action.error.message
            // state.isAuthenticated = false
        })
    }
})


export default cardSlice.reducer
export const { updateteam1runs, updateteam2runs } = cardSlice.actions