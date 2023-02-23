import { Outlet } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { LayoutContainer } from "./styles"

export function DefaultLayout() {
  return (
    <LayoutContainer className="container">
      <Outlet />
    </LayoutContainer>
  )
}