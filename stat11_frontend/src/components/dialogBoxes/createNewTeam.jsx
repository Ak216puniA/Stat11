import React, { useState } from "react";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import {
  initialState,
  setNewPlayerName,
  setNewTeamName,
  // setTeamFlag,
} from "../../features/home/createTeamSlice";
import playerTypes from "../../constants/playerTypes";
import { useDispatch } from "react-redux";
import {
  selectFormFieldGenerator,
  textFormFieldGenerator1,
} from "../form/genericFormFieldGenerators";

const playerTypeFormField = selectFormFieldGenerator(
  "Search For Player",
  playerTypes,
  initialState.newPlayerName,
  setNewPlayerName
);

// import { useSelector, useDispatch } from "react-redux";
// import { selectIsDialogueOpen, setDialogueOpen } from "./dialogueSlice";

function CreateNewTeamDialogBox() {
  const [closeD, setCloseD] = useState(true);
  const dispatch = useDispatch();
  const handleCloseCreateTeamDialog = () => {
    dispatch(setCloseD(prevState => !prevState));
  };

  return (
    <Dialog
      // sx={{
      //     // width: "80%",
      //     backgroundColor:'green',
      // }}
      open={closeD}
      onClose={handleCloseCreateTeamDialog}
    >
      <DialogTitle>Create New Team</DialogTitle>
      <DialogContent>
        {textFormFieldGenerator1(
          "Team Name:",
          initialState.newTeamName,
          setNewTeamName
        )}
        <br />
        <br />

        <Button
          variant="contained"
          component="label"
          color="secondary"
          disableElevation={true}
          disabled={false}
          sx={{
            borderRadius: 8,
            // width: "20px",
          }}
        >
          <Typography variant="button">Upload flag</Typography>
          <input type="file" hidden />
        </Button>
        <br />
        <br />

        {/* {textFormFieldGenerator("Add Player:", playerName, setPlayerName)} */}
        {playerTypeFormField}
        <Button
          variant="contained"
          color="primary"
          disableElevation={true}
          disabled={false}
          sx={{
            borderRadius: 8,
            // width: "20%",
          }}
        >
          <Typography variant="button">Submit</Typography>
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default CreateNewTeamDialogBox;