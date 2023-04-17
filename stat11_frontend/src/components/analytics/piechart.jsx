import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { playerData } from "../../features/analytics/pieChartSlice";
import { matchteamData } from "../../features/analytics/analyticsCardSlice";

export default function PieChart() {
  const teamstate = useSelector((state) => state.analyticsCard.teaminfo);
  const playerNamesRuns = useSelector((state) => state.pieChart.playerinfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(playerData());
  }, []);
  useEffect(() => {
    dispatch(matchteamData());
  }, []);

  const teamids = teamstate.map((x) => x.id);
  const team1 = teamids[0];
  const team2 = teamids[1];

  const team1players = playerNamesRuns.map((x) =>
    x.team.id == team1 ? x.player.person.first_name : null
  );
  const team2players = playerNamesRuns.map((x) =>
    x.team.id == team2 ? x.player.person.first_name : null
  );
  const data = {
    labels: team1players,
    datasets: [
      {
        label: "Runs Scored",
        data: playerNamesRuns.map((x) => x.runs),
        backgroundColor: [
          "#ADDFE8",
          "#FDB26E",
          "#CFC8FF",
          "#8AABAF",
          "#FE938C",
          "#FFA3A3",
          "#EFEA5A",
          "#CF452D",
          "#758AE1",
          "#EFC88B",
          "#D0DAD4",
          "#5EABCC",
          "#FE658A",
          "#FE653E",
          "#A9959C",
        ],
        // borderColor: "#000000",
        borderWidth: 0.2,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          font: {
            size: 16,
          },
        },
        display: true,
        position: "bottom",
      },
      // title: {
      //   display: true,
      //   text: "Pie Chart",
      //   color: "blue",
      //   font: {
      //     size: 14,
      //   },
      //   padding: {
      //     top: 5,
      //     bottom: 5,
      //   },
      //   responsive: true,
      //   animation: {
      //     animateScale: true,
      //   },
    },
  };

  return (
    <div>
      <Pie data={data} options={options}></Pie>
    </div>
  );
}
