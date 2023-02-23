import { Container } from "./styles";

export function Button({ title, className, icon: Icon, ...rest }) {
  return (
    <Container {...rest} className={className}>
      {Icon && <Icon size={24}/>}
      {title}
    </Container>
  )
}