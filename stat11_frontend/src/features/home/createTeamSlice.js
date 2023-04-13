import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  newTeamName: '',
  teamFlag: '',
  newPlayerName: '',
}

const createTeamSlice = createSlice({
  name: 'createTeamSlice',
  initialState,
  reducers: {
    setNewTeamName: (state, action) => {
      state.newTeamName = action.payload;
    },
    setTeamFlag: (state, action) => {
      state.teamFlag = action.payload;
    },
    setNewTeamName: (state, action) => {
      state.newTeamName = action.payload;
    },
    setNewPlayerName: (state, action) => {
      state.newPlayerName = action.payload;
    },
  },
});

export const { setNewPlayerName, setNewTeamName, setTeamFlag } = createTeamSlice.actions;
export default createTeamSlice.reducer;