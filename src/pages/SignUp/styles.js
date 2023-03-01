import styled from "styled-components";

export const Container = styled.div`
  padding: 9rem 10.8rem 11.2rem 15.3rem;
  max-width: 138.6rem;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30.6rem;
  height: 100vh;

  div {
    display: flex;
    align-items: center;
    gap: 1.9rem;

    h1 {
      font-size: 4.2rem;
      line-height: 4.9rem;
    }
    
    svg {
      fill: ${({ theme }) => theme.colors["cake-100"]};
    }
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 47.6rem;
  background: ${({ theme }) => theme.colors["dark-700"]};

  padding: 6.4rem;

  border-radius: 16px;

  label {
    color: ${({ theme }) => theme.colors["light-400"]};
    line-height: 100%;
  }

  input {
    padding: 1.4rem;
    width:  34.8rem;
  }

  button, a {
    font-weight: 500;
    font-size: 1.4rem;
    font-family: "Poppins", sans-serif;
    text-align: center;
  }
`