import { NavLink } from "react-router-dom"
import { useUserContext } from "../context/UserContext";


const Navbar = () => {
  const { user, setUser } = useUserContext();
  const handleLogout = () => {
    setUser(false);
  }
  return (
    <nav>
      <NavLink to='/'>Home </NavLink>
      {
        user && (
          <>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <button onClick={handleLogout}>Salir</button>
          </>
        )
      }
    </nav>
  )
}

export default Navbar;
