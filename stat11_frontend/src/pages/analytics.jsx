import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import Header from "../components/header";
import Grid from "@mui/material/Grid";
import MediaCard from "../components/analytics/analyticscard";
import { BarChart } from "../components/analytics/barchart";
import { LineChart } from "../components/analytics/linechart";
import PieChart from "../components/analytics/piechart";

function Analytics(props) {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  

  return (
    <>
      <Box>
        
        <Header />
        <Grid container rowSpacing={2} columnSpacing={1}>
          <Grid item xs={6}>
            <MediaCard title={props.title1} chart={PieChart()} ></MediaCard>
          </Grid>
          <Grid item xs={6}>
            <MediaCard title={props.title2} chart={PieChart()}></MediaCard>
          </Grid>
          <Grid item xs={6}>
            <MediaCard title="Runs per Over" chart={BarChart()}></MediaCard>
          </Grid>
          <Grid item xs={6}>
            <MediaCard title="Run Rate" chart={LineChart()}></MediaCard>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Analytics;
