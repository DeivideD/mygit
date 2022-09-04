import { useContext } from "react"
import { UserContext } from "../contexts/user";
import { User } from "../model/user";



export default function Index() {
 const { user } = useContext( UserContext );


  return (
    <>{user.name} aqui {console.log(user)}</>
  )
}
