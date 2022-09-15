import { useContext } from "react"
import ChartHome from "../components/charts/chart-home/char-home";
import { UserContext } from "../contexts/user";



export default function Index() {
  const { user } = useContext(UserContext);


  return (
    <div className="container-page">
      <ChartHome />
    </div>
  )
}
