import React, { useState } from "react";
import { Box, Button, Divider, Link} from '@mui/material';
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import { useDispatch } from "react-redux";



function CoinTossDialogBox() {
  const [closeD, setCloseD] = useState(true);
  const dispatch = useDispatch();
  const handleCloseCoinTossDialog = () => {
    dispatch(setCloseD(prevState => !prevState));
  };

  return (
    <Dialog
      // sx={{
      //     // width: "80%",
      //     backgroundColor:'green',
      // }}
      open={closeD}
      onClose={handleCloseCoinTossDialog}
    >
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
      <DialogTitle>Coin Toss</DialogTitle>
      <DialogContent>
      
        
       
      <br />
        
       
          <FormControl>
      <FormLabel id="Coin_toss_winner_label">Coin Toss Winner:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="Coin_toss_winner_label"
        name="Coin_toss_winner"
      >
        <FormControlLabel value="team1" control={<Radio />} label="Team 1" />
        <FormControlLabel value="team2" control={<Radio />} label="Team 2" />
        
      </RadioGroup>
    </FormControl>
    <br />
    <FormControl>
      <FormLabel id="Winner_choose_label">Winner choose:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="Winner_choose_label"
        name="Winner_choose"
      >
        <FormControlLabel value="batting" control={<Radio />} label="Batting " />
        <FormControlLabel value="bowling" control={<Radio />} label="Bowling " />
        
      </RadioGroup>
    </FormControl>
    <br />
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
            
            
          
           
          }}>Done</Typography>
        </Button>
      </DialogContent>
      </Box>
    </Dialog>
  );
}

export default CoinTossDialogBox;