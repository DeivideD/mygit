
import Chart from 'react-google-charts'
import styles from './style.module.scss'

export default function ChartHome() {

  const pierChartData = [
    ["Task", "Hours per Day"],
    ["Work", 2],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const pierCharoptions = {
    title: 'Linguagem X repositrios',
    is3D: true,
    backgroundColor: '#323238',
    fontName: 'Roboto',
    legend: { position: 'top', textStyle: { color: '#fff', fontSize: 16, italic: true } },
    titleTextStyle: { color: '#fff', fontSize: 16, italic: true}
  };

  const columnChartData = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["RoR", 19.3, "red"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
  ];

  var columnChartOptions = {
    legend: { position: 'center' },
    chart: {
      title: 'Chess opening moves',
      subtitle: 'popularity by percentage'
    },
    axes: {
      x: {
        0: { side: 'top', label: 'White to move'}, // Top x-axis.
      }
    },
    bar: { groupWidth: "80%" }
  };

  const width = "98%"
  return (
    <div className={styles.chart}>
      <Chart
        chartType={"PieChart"}
        data={pierChartData}
        options={pierCharoptions}
        width={width}
        height={400}
      />
      <Chart
        chartType={"ColumnChart"}
        data={columnChartData}
        options={columnChartOptions}
        width={width}
        height={400}
      />
    </div>
  )
}