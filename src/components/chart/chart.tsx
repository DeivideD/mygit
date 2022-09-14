
import { Chart } from "react-google-charts";
import styles from './style.module.scss'


interface Props { 
  data: (string | number)[][];
  options: Options;
}

interface LegendTextStyle { 
   color: string;
   fontSize: number;
   italic: boolean; 
}
export interface Legend {
  position: string;
  textStyle: LegendTextStyle;
}

interface TitleTextStyle {
  color: string;
}

interface Options { 
  title: string;
  is3D: boolean;
  backgroundColor: string;
  fontName: string;
  legend: Legend;
  titleTextStyle: TitleTextStyle;
}

export default function GraficPie({data, options} : Props) {
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
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  )
}