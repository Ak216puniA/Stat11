import React, { useState } from "react";

import { Box, Button, Divider, Link} from '@mui/material';
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
        <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        
    }}
    >
      <DialogTitle>Create New Team</DialogTitle>
      <DialogContent>
      {textFormFieldGenerator1(
          "Team Name",
          initialState.newTeamName,
          setNewTeamName
        )}
        
        
        <br />
        {textFormFieldGenerator1(
          "College Name",
          initialState.newTeamName,         //Change the Variables for college name 
          setNewTeamName
        )}
        <br />

        <Button
          variant="contained"
          component="label"
          color="secondary"
          disableElevation={true}
          disabled={false}
          sx={{
            
            fontSize: "18px",             
                         
            marginTop: 3,
            marginBottom: 3,
            display: "flex",
            
            // width: "20px",
          }}
        >
          <Typography variant="button"
            sx={{
              fontSize: "18px",             
            }}>Upload flag Image</Typography>
          <input type="file" hidden />
        </Button>
        <br />
     

      
        {playerTypeFormField}
        <Button
          variant="contained"
          color="primary"
          disableElevation={true}
          disabled={false}
          sx={{
            mx: 'auto',
            
            
            width: 200,
            marginTop: 3,
            marginBottom: 3,
            display: "flex",
              borderRadius: 8,
          }}
        >
          <Typography variant="button"
          sx={{
            fontSize: "18px",
            
            
          
           
          }}>Submit</Typography>
        </Button>
      </DialogContent>
      </Box>
    </Dialog>
  );
}

export default CreateNewTeamDialogBox;