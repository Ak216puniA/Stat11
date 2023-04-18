import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllMatchAndTeams } from "../../../features/match/matchSlice";

export default function DisplayTotalScore(props) {
  const dispatch = useDispatch();
  const Matchdetails = useSelector((state) => state.match.matchAndTeamsList);
  useEffect(() => {
    dispatch(getAllMatchAndTeams());
  }, []);

  let teamWhichIsBattingFirst, idOfBattingTeam;
  function whoIsBattingFirst() {
    if (Matchdetails[0].turn) {
      teamWhichIsBattingFirst = Matchdetails[0].name;
      idOfBattingTeam = 0;
    } else {
      teamWhichIsBattingFirst = Matchdetails[1].name;
      idOfBattingTeam = 1;
    }
  }

  whoIsBattingFirst();

  return (
    <div>
      <Box
        sx={{
          maxWidth: "100%",
          mt: "2%",
          backgroundColor: props.totalBatter % 2 == 0 ? "#F3F3F3" : "#FFFFFF",
          borderBottomLeftRadius: "16px",
          borderBottomRightRadius: "16px",
        }}
      >
        <Grid container rowSpacing={7} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
          <Grid item xs={2}>
            <Typography
              variant="h5"
              sx={{ textAlign: "left", ml: "20%", mb: "10%" }}
            >
              Extras
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h5" sx={{ textAlign: "left" }}>
              {Matchdetails[idOfBattingTeam].team_extras} (w {Matchdetails[idOfBattingTeam].wides}, lb {Matchdetails[idOfBattingTeam].legByes}, b{" "}
              {Matchdetails[idOfBattingTeam].byes}, nb {Matchdetails[idOfBattingTeam].noBalls})
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h5" sx={{ textAlign: "right", mr: "7%" }}>
              {Matchdetails[idOfBattingTeam].team_runs}-{Matchdetails[idOfBattingTeam].team_wickets} ({Matchdetails[idOfBattingTeam].team_current_overs}.
              {Matchdetails[idOfBattingTeam].team_current_over_balls})
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
