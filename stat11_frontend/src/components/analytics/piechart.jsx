import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
export default function PieChart() {
    
  const data = {
    labels: ["a", "b", "c", "d", "e", "f"],
    datasets: [
      {
        label: "# of Votes",
        data: [35, 25, 22, 20, 18, 15],
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        // borderColor: "#000000",
        borderWidth: 0.5,
      },
    ],
  };
  return (
    <div>
      <Pie
        data={data}
      ></Pie>
    </div>
  );
}
