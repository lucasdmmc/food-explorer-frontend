import { forwardRef } from "react";
import { Container } from "./styles";

// export function Input({ className, icon: Icon, ...rest}) {
//   return (
//     <Container className={className}>
//       {Icon && <Icon size={20}/>}
//       <input {...rest} />
//     </Container>
//   )
// }

export const Input = forwardRef(
  ({ className, icon: Icon, ...rest}, ref) => {
    return (
      <Container className={className}>
        {Icon && <Icon size={20}/>}
        <input {...rest} ref={ref} />
      </Container>
    )
  }
)