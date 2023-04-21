import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"
import MatchHeader from "../components/header/matchHeader"
import Grid from "@mui/material/Grid"
import MediaCard from "../components/analytics/analyticscard"
import PieChart from "../components/analytics/piechart"
import BarChart from "../components/analytics/barchart"
import { changeSideBarTabsType } from "../features/sideBar/sideBarSlice"
import AnalyticsContent from "../components/analytics/analyticsContent"

function Analytics() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeSideBarTabsType("match"))
  }, [])
  return (
    < >
      
      <Box
        component="div"
        sx={{
          borderRadius: "16px",
          pl: 30,
          pb: 20,
          backgroundColor:"background.default",
        }}
      >
        <MatchHeader />
        <AnalyticsContent/>
      </Box>
    </>
  )
}

export default Analytics
