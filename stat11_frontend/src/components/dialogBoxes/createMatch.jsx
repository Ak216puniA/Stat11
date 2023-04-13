import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsDialogueOpen, setDialogueOpen } from '../../features/home/homeSlice';

const DialogueBox = () => {
  const dispatch = useDispatch();
  const isDialogueOpen = useSelector(selectIsDialogueOpen);
  const [selectedTeam1, setSelectedTeam1] = useState('');
  const [selectedTeam2, setSelectedTeam2] = useState('');
  const [selectedOvers, setSelectedOvers] = useState('');
  const [selectedCoinResult, setSelectedCoinResult] = useState('');

  const handleCloseDialogue = () => {
    dispatch(setDialogueOpen(false));
  };

  const handleSave = () => {
    // Do something with the selected options
    console.log(selectedTeam1, selectedTeam2, selectedOvers, selectedCoinResult);
    handleCloseDialogue();
  };

  return (
    <>
      {isDialogueOpen && (
        <div className="dialogue-box">
          <div className="dialogue-header">
            <h3>Select Options</h3>
            <button onClick={handleCloseDialogue}>X</button>
          </div>
          <div className="dialogue-body">
            <label>Team 1:</label>
            <select value={selectedTeam1} onChange={(event) => setSelectedTeam1(event.target.value)}>
              <option value="">Select a team</option>
              <option value="team1a">Team 1A</option>
              <option value="team1b">Team 1B</option>
              <option value="team1c">Team 1C</option>
            </select>

            <label>Team 2:</label>
            <select value={selectedTeam2} onChange={(event) => setSelectedTeam2(event.target.value)}>
              <option value="">Select a team</option>
              <option value="team2a">Team 2A</option>
              <option value="team2b">Team 2B</option>
              <option value="team2c">Team 2C</option>
            </select>

            <label>No. of overs:</label>
            <select value={selectedOvers} onChange={(event) => setSelectedOvers(event.target.value)}>
              <option value="">Select no. of overs</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>

            <label>Coin result:</label>
            <select value={selectedCoinResult} onChange={(event) => setSelectedCoinResult(event.target.value)}>
              <option value="">Select coin result</option>
              <option value="heads">Heads</option>
              <option value="tails">Tails</option>
            </select>
          </div>
          <div className="dialogue-footer">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCloseDialogue}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default DialogueBox;