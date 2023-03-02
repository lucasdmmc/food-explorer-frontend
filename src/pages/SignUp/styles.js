import styled from "styled-components";

export const Container = styled.div`
 max-width: 42.8rem;
 margin: 0 auto;
 height: 100vh;

 display: flex;
 flex-direction: column;
 justify-content: center;

 padding: 0 4.7rem 0 6.5rem;

`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 7.3rem;

  svg {
    fill: ${({ theme }) => theme.colors["cake-100"]}
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  h2 {
    display: none;
  }
  
  span {
    position: relative;
    bottom: 0.8rem;
    margin-bottom: 0.8rem;
  }

  a {
    text-align: center;
  }

`