import { Routes, Route } from "react-router-dom";
import { AddDish } from "../pages/AddDish";
import { Dish } from "../pages/Dish";
import { Favorites } from "../pages/Favorites";
import { Home } from "../pages/Home";
import { Order } from "../pages/Order";
import { Payment } from "../pages/Payment";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dish" element={<Dish />}/>
      <Route path="/order" element={<Order />}/>
      <Route path="/favorites" element={<Favorites />}/>
      <Route path="/adddish" element={<AddDish />}/>
      <Route path="/payment" element={<Payment />}/>
    </Routes>
  )
}