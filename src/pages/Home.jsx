/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext"

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({ name: "Jhon", email: "jhon@test.com" })
    navigate("/dashboard");

  }
  const { user, setUser } = useUserContext()
  return (
    <>
      <div>Home</div>
      {!user && <button onClick={handleLogin}>Login</button>}
    </>
  )
}

export default Home
