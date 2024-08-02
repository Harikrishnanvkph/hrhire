import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Login from "./Login/Login"

function App() {

  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </>
  )
}

export default App
