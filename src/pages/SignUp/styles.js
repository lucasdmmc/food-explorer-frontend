import styled from "styled-components";

export const Container = styled.div`
 max-width: 42.8rem;
 margin: 0 auto;
 height: 100vh;

 display: flex;
 flex-direction: column;
 justify-content: center;

 padding: 0 4.7rem 0 6.5rem;

 @media screen and (min-width: 1386px) {
    padding: 0;
    max-width: 138.6rem;

    .flex-desktop {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30.6rem;
    }
    
    form {
      background: ${({ theme }) => theme.colors["dark-700"]};
      border-radius: 16px;
      min-width: 47.6rem;
      padding: 6.4rem;

      h2 {
        display: initial;
        font-size: 3.2rem;
        font-weight: 500;
        text-align: center;
        font-family: "Poppins", sans-serif;
      }

      input {
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.colors["light-100"]};;
      }
    }
  }

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