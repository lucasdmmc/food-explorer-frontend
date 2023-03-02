import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.colors["dark-400"]};
    color: ${({ theme }) => theme.colors["light-100"]};
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
    width: 100%;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors["light-100"]};
  }

  button {
    border: none;
    background: none;
    outline: none;
  }

  ::-webkit-scrollbar {
  width: 0.6rem;
  }
  ::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.colors["dark-1000"]};
  }
  ::-webkit-scrollbar-thumb {
  border-radius: 2rem;
  background: ${({ theme }) => theme.colors["cake-100"]};
  }
`