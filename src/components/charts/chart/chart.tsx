
import { Chart, ChartWrapperOptions, GoogleChartWrapperChartType } from "react-google-charts";
import styles from './style.module.scss'


interface Props {
  chartType: GoogleChartWrapperChartType; 
  data: any[] | {};
  options?:  ChartWrapperOptions["options"];
  width: string;
  height: string;
}

export default function Grafic({chartType, data, options, width, height} : Props) {

  // const data = [
  //   ["Task", "Hours per Day"],
  //   ["Work", 2],
  //   ["Eat", 2],
  //   ["Commute", 2],
  //   ["Watch TV", 2],
  //   ["Sleep", 7],
  // ];

  // const options: Options = {
  //   title: 'Meu titulo',
  //   is3D: true,
  //   backgroundColor: '#323238',
  //   fontName: 'Roboto',
  //   legend: { position: 'top', textStyle: { color: '#fff', fontSize: 16, italic: true } },
  //   titleTextStyle: { color: '#fff' }
  // };
  return (
    <div className={styles.chat}>
      <Chart
        chartType={chartType}
        data={data}
        options={options}
        width={width}
        height={height}
      />
    </div>
  )
}