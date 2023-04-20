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
import { useParams } from "react-router"

function Analytics(props) {
  const { match_id } = useParams()
  const teamstate = useSelector((state) => state.pieChart.teaminfo)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(matchteamData(match_id))
    dispatch(changeSideBarTabsType("match"))
  }, [])

  const teamnames = teamstate.map((x) => x.name)
  const teamids = teamstate.map((x) => x.id)

  return (
    < >
      {/* <Header /> */}
      <Box
        component="div"
        sx={{
          // marginLeft: "27%",
          // marginTop: "2%",
          // width: "65%",
          mt:"60px",
          borderRadius: "16px",
          pl: 40,
          pb: 20,
          backgroundColor:"background.default",
          // backgroundPosition:"fixed"
        }}
      >
        <Grid container >
          <Grid item xs={6} >
            <AnalyticsCard
              title={teamnames[0]}
              chart={PieChart(teamids[0])}
            ></AnalyticsCard>
          </Grid>

          <Grid item xs={6}>
            <AnalyticsCard
              title={teamnames[1]}
              chart={PieChart(teamids[1])}
            ></AnalyticsCard>
          </Grid>
          <Grid item xs={6}>
            <AnalyticsCard
              title={teamnames[0]}
              chart={BarChart(teamids[0])}
            ></AnalyticsCard>
          </Grid>
          <Grid item xs={6}>
            <AnalyticsCard
              title={teamnames[1]}
              chart={BarChart(teamids[1])}
            ></AnalyticsCard>
          </Grid>
        </Grid>
        
      </Box>
    </>
  )
}

export default Analytics
