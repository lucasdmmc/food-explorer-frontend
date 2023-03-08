import { Container } from "./styles";

export function ErrorMessage({ title, error = false }) {
  return (
    <Container error={error}>
      <strong>{title}</strong>
    </Container>
  )
}