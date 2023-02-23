import styled from "styled-components";

export const Container = styled.section`
  margin: 0 12.4rem;
  margin-bottom: 4.7rem;
  
  > span {
    font-family: "Poppins", sans-serif;
    font-size: 3.2rem;
    line-height: 4.5rem;
    color: ${({ theme }) => theme.colors["light-400"]}
  }
`