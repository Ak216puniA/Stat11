import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Box } from "@mui/material"
import Header from "../components/header"
import Grid from "@mui/material/Grid"
import MediaCard from "../components/analytics/analyticscard"
import PieChart from "../components/analytics/piechart"
import BarChart from "../components/analytics/barchart"
import SideBar from "../components/sideBar/sideBar"
import { changeSideBarTabsType } from "../features/sideBar/sideBarSlice"
import { matchteamData } from "../features/analytics/pieChartSlice"

function Analytics() {
  const teamstate = useSelector((state) => state.pieChart.teaminfo)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(matchteamData())
  }, [])
  useEffect(() => {
    dispatch(changeSideBarTabsType("match"))
  }, [])

  const teamnames = teamstate.map((x) => x.name)
  const teamids = teamstate.map((x) => x.id)

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
            <MediaCard
              title={teamnames[0]}
              chart={PieChart(teamids[0])}
            ></MediaCard>
          </Grid>

          <Grid item xs>
            <MediaCard
              title={teamnames[1]}
              chart={PieChart(teamids[1])}
            ></MediaCard>
          </Grid>
          <Grid item xs>
            <MediaCard
              title={teamnames[0]}
              chart={BarChart(teamids[0])}
            ></MediaCard>
          </Grid>
          <Grid item xs>
            <MediaCard
              title={teamnames[1]}
              chart={BarChart(teamids[1])}
            ></MediaCard>
          </Grid>
        </Grid>
        <br />
        <br />
      </Box>
    </>
  )
}

export default Analytics
