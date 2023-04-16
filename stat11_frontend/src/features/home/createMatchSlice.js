import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  newTeamName: '',
  teamFlag: '',
  newPlayerName: '',
}

const createMatchSlice = createSlice({
  name: 'createMatchSlice',
  initialState,
  reducers: {
    setNewTeamName: (state, action) => {
      state.newTeamName = action.payload;
    },
    setNewTeamName: (state, action) => {
      state.newTeamName = action.payload;
    },
    setNewPlayerName: (state, action) => {
      state.newPlayerName = action.payload;
    },
  },
});

export const { setNewPlayerName, setNewTeamName, setTeamFlag } = createMatchSlice.actions;
export default createMatchSlice.reducer;