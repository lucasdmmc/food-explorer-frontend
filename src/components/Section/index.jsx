import { Container } from "./styles";
export function Section({ children, title }) {
  return (
    <Container >
      <span>{title}</span>
      {children}
    </Container>
  )
}