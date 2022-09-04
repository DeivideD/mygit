
import { Chart } from "react-google-charts";
import styles from './style.module.scss'

export default function GraficPie() {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 2],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: 'Meu titulo',
    is3D: true,
    backgroundColor: '#323238',
    // colors: [],
    fontName: 'Roboto',
    legend: { position: 'top', textStyle: { color: '#fff', fontSize: 16, italic: true } },
    // pieStartAngle: 20,
    titleTextStyle: { color: '#fff' }
  };
  return (
    <div className={styles.chat}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  )
}