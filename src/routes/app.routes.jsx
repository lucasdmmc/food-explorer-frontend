import { Routes, Route } from "react-router-dom";
import { Dish } from "../pages/Dish";
import { Home } from "../pages/Home";
import { Payment } from "../pages/Payment";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dish" element={<Dish />}/>
      <Route path="/payment" element={<Payment />}/>
    </Routes>
  )
}