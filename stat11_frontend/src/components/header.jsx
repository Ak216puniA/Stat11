import React, { useEffect } from "react";
import { Typography, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { headerData, teamData } from "../features/header/headerSlice";

export default function Header(props) {
  const matchState = useSelector((state) => state.matchinfo);
  const teamState = useSelector((state) => state.teaminfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerData());
  }, []);

  useEffect(() => {
    dispatch(teamData());
  }, []);

  matchId=1;

  return (
    <div>
      <Typography
        component="box"
        variant="h3"
        sx={{
          float: "left",
          paddingLeft: "30px",
          paddingTop: "72px",
          paddingBottom: "10px",
        }}
      >
        {props.team1} v/s {props.team2}
        <br />
        <Typography
          variant="body1"
          component="box"
          sx={{
            color: "#448791",
            float: "left",
          }}
        >
          Location, City, State &nbsp;
        </Typography>
        <Typography
          component="box"
          variant="body1"
          sx={{
            color: "#797979",

            float: "left",
          }}
        >
          {" "}
          hehe Overs
        </Typography>
      </Typography>

      <Typography
        component="box"
        variant="body2"
        sx={{
          color: "#797979",
          textAlign: "right",
          paddingTop: "80px",
          paddingRight: "160px",
          float: "right",
        }}
      >
        {" "}
        Toss: <br />
        Purple Team
      </Typography>

      <Divider
        sx={{
          color: "#D9D9D9",
          width: "96vw",
          marginLeft: "30px",
        }}
      />
    </div>
  );
}
