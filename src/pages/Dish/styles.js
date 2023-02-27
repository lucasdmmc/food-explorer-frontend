import styled from "styled-components";

export const Container = styled.div`
  max-width: 138.6rem;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  
  footer { 
    position: absolute;
    bottom: 0;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 12.1rem;
  
`

export const BackToHome = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.4rem;

  svg {
    font-size: 3.4rem;
  }

  strong {
    font-family: "Poppins", sans-serif;
    text-transform: lowercase;
    font-size: 2.4rem;
    line-height: 140%;
    color: ${({ theme }) => theme.colors["light-300"]};
  }
`