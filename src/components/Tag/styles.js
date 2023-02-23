import styled from "styled-components";

export const Container = styled.div`
  padding: 0.4rem 0.8rem;
  background: ${({ theme }) => theme.colors["dark-1000"]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-transform: lowercase;
  font-family: "Poppins", sans-serif;
`