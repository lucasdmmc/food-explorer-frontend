import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 138.6rem;
  height: 100vh;
  margin: 0 auto;

  h1 {
    margin: 3.4rem 12.3rem;
    line-height: 4.5rem;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.colors["light-300"]}
  }

  footer {
    position: absolute;
    bottom: 0;
  }
`

export const Table = styled.table`
  min-width: 114rem;
  margin: 0 auto;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.colors["dark-1000"]};
  color: ${({ theme }) => theme.colors["light-400"]};
  
  th {
    padding: 2.1rem;
    border: 1px solid ${({ theme }) => theme.colors["dark-1000"]};
    text-align: start;
    color: ${({ theme }) => theme.colors["light-300"]};
  }

  td {
    border: 1px solid ${({ theme }) => theme.colors["dark-1000"]};
    padding: 1.6rem;
    margin-right: 0.8rem;
    text-align: start;
    position: relative;
  }
`

export const Status = styled.span`
    margin-left: 2rem;
    &::before {
    content: "";
    position: absolute;
    display: flex;
    top: 20px;
    left: 20px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    /* background: ${({ theme }) => theme.colors["tomato-300"]} */

    ${({ variant, theme }) => 
    variant === "red" && css`
      background: ${theme.colors["tomato-300"]};
    `}

    ${({ variant, theme }) => 
    variant === "yellow" && css`
      background: ${theme.colors["carrot-100"]};
    `}

    ${({ variant, theme }) => 
    variant === "green" && css`
      background: ${theme.colors["mint-100"]};
    `}
  }
`