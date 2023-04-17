import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { matchteamData } from "../../features/analytics/analyticsCardSlice";

export default function MediaCard(props) {
  const playerNamesRuns = useSelector((state) => state.pieChart.playerinfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(matchteamData());
  }, []);
  return (
    <Card
      sx={{
        width: "auto",
        maxWidth: "460px",
        height: "auto",
        maxHeight: "540px",
        boxShadow: "4px 4px 4px 4px #D9D9D9",
        borderRadius: "16px",
        // marginBottom: "40px",
        // marginRight: "40px",
        // marginTop: "40px",
        //marginLeft: "50%",
      }}
    >
      <CardContent
        sx={{
          backgroundColor: "primary.main",
          height: "26px",
        }}
      >
        <Typography
          variant="h5"
          label="heading"
          component="box"
          sx={{
            color: "#FFFFFF",
            float: "left",
            paddingLeft: "24px",
          }}
        >
          {props.title}
        </Typography>
        <br />
      </CardContent>
      <CardContent sx={{ backgroundColor: "#FFFFFF" }}>
        {props.chart}
      </CardContent>
    </Card>
  );
}