import { Outlet } from "react-router-dom"
import Header from "../Header/Header"

const MainComponents = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default MainComponents