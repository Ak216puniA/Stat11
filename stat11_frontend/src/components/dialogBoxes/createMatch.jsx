import React, { useState } from "react";

import { Box, Button, Divider, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { spacing } from "@mui/system";

import {
  initialState,
  setNewPlayerName,
  setNewTeamName,
  // setTeamFlag,
} from "../../features/home/createMatchSlice";
import playerTypes from "../../constants/playerTypes";
import { useDispatch } from "react-redux";
import {
  selectFormFieldGenerator,
  textFormFieldGenerator,
  textFormFieldGenerator1,
} from "../form/genericFormFieldGenerators";

const playerTypeFormField1 = selectFormFieldGenerator(
  "Team 1",
  playerTypes,
  initialState.newPlayerName,
  setNewPlayerName
);
const playerTypeFormField2 = selectFormFieldGenerator(
  "Team 2",
  playerTypes,
  initialState.newPlayerName,
  setNewPlayerName
);

function CreateMatchDialogBox() {
  const [closeD, setCloseD] = useState(true);
  const dispatch = useDispatch();

  const [numberOfOvers, setnumberOfOvers] = useState("");
  const [locationOfMatch, setlocationOfMatch] = useState("");
  const handleCloseCreateMatchDialog = () => {
    dispatch(setCloseD((prevState) => !prevState));
  };

  return (
    <Dialog open={closeD} onClose={handleCloseCreateMatchDialog}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          // width: "70%"
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "22px",
            lineHeight: "33px",
            color: "#202020",

            mx: "auto",
            // paddingLeft: "60px",
            // paddingTop: "80px",
            // paddingBottom: "10px",
          }}
        >
          Create New Match
        </DialogTitle>

        <DialogContent>
          {playerTypeFormField1}
          {playerTypeFormField2}
          <div
            sx={{
              marginTop: 3,
              marginBottom: 3,
            }}
          >
            {textFormFieldGenerator(
              "Number of Overs",
              numberOfOvers,
              setnumberOfOvers
            )}
          </div>

          <div
            sx={{
              marginTop: 3,
              marginBottom: 3,
            }}
          >
            {textFormFieldGenerator1(
              "Location",
              locationOfMatch,
              setlocationOfMatch
            )}
          </div>

          <Button
            variant="contained"
            color="primary"
            disableElevation={true}
            disabled={false}
            sx={{
              mx: "auto",

              width: 200,
              marginTop: 3,
              marginBottom: 3,
              display: "flex",
              borderRadius: 8,
              // width: "20%",
            }}
          >
            <Typography
              variant="button"
              sx={{
                fontSize: "18px",
              }}
            >
              Submit
            </Typography>
          </Button>
        </DialogContent>
      </Box>
    </Dialog>
  );
}

export default CreateMatchDialogBox;
