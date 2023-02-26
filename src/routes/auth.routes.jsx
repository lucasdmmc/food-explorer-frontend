import { Route, Routes } from "react-router-dom"
import { SignUp } from "../pages/SignUp"

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<SignUp />}/>
    </Routes>
  )
}