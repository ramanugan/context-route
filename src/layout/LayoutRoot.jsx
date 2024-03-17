import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayoutRoot = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>footer</footer>
    </>
  )
}

export default LayoutRoot
