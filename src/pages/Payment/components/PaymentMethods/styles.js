import styled, { css } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 53rem;
  
  strong {
    font-size: 3.2rem;
    font-family: "Poppins", sans-serif;
  }
  
  > div {
    border: 1px solid ${({ theme }) => theme.colors["light-700"]};
    height: 100%;
    margin-top: 3.2rem;
    border-radius: 6px;
  }
`

export const Methods = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.colors["light-700"]};
  
  > div {
    border: 1px solid ${({ theme }) => theme.colors["light-700"]};;
    height: 8rem;
  }

  button {
    width: 100%;
    height: 8.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    cursor: pointer;
    border-radius: 6px;
    
    
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors["light-100"]};
    
    &:hover {
      background: ${({ theme }) => theme.colors["dark-600"]}
    }
    
  }
  
  .pix {
    ${({ isActivePix, theme }) => isActivePix && css`
      background: ${theme.colors["dark-600"]};
    `} 
  }

  .credit {
    ${({ isActiveCredit, theme }) => isActiveCredit && css`
      background: ${theme.colors["dark-600"]};
    `}
  }
  
`

export const PixMethod = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38.1rem;

`

export const Form = styled.form`
  padding: 4.7rem 0;
  width: 34.8rem;
  margin: 0 auto;
  height: 38.1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }


  label {
    color: ${({ theme }) => theme.colors["light-400"]};
  }

  input {
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors["light-100"]};
    border-radius: 5px;
    width: 100%;
    height: 48px;
  }

  button {
    margin-top: 4rem;
    height: 56px;
  }
`

export const Validation = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 4rem;
`
