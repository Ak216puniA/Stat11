import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import Header from "../components/header";
import Grid from "@mui/material/Grid";
import MediaCard from "../components/analytics/analyticscard";
import PieChart from "../components/analytics/piechart";
import SideBar from "../components/sideBar/sideBar";
import { changeSideBarTabsType } from "../features/sideBar/sideBarSlice";
import { matchteamData } from "../features/analytics/analyticsCardSlice";

function Analytics() {
  const teamstate = useSelector((state) => state.analyticsCard.teaminfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(matchteamData());
  }, []);
  useEffect(() => {
    dispatch(changeSideBarTabsType("match"));
  }, []);
  
  const teamnames = teamstate.map((x) => x.name);
  
  const team1 = teamnames[0];
  const team2 = teamnames[1];
  console.log(teamnames)
  console.log(team1)
  console.log(team2)
  return (
    <>
      <SideBar />
      <Header />
      <Box
        component="div"
        sx={{
          marginLeft: "27%",
          marginTop: "2%",
          width: "65%",
          borderRadius: "16px",
          mb: "2%",
        }}
      >
        <Grid container>
          <Grid item xs>
            <MediaCard title={team1} chart={PieChart()}></MediaCard>
          </Grid>
          <Grid item xs>
            <MediaCard title={team2} chart={PieChart()}></MediaCard>
          </Grid>
          {/* <Grid item xs={6}>
            <MediaCard title="Runs per Over" chart={BarChart()}></MediaCard>
          </Grid>
          <Grid item xs={6}>
            <MediaCard title="Run Rate" chart={LineChart()}></MediaCard>
          </Grid> */}
        </Grid>
        <br />
        <br />
      </Box>
    </>
  );
}

export default Analytics;
