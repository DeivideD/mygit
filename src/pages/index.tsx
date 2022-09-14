import { useContext } from "react"
import GraficPie from "../components/chart/chart";
import { UserContext } from "../contexts/user";
import { User } from "../model/user";



export default function Index() {
  const { user } = useContext(UserContext);

  return (
    <div className="container-page">
      <GraficPie />
    </div>
  )
}
