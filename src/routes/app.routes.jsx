import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Dish } from "../pages/Dish";
import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/dish/:id" element={<Dish />}/>
      </Route>
    </Routes>
  )
}