import styled, { css } from "styled-components";

export const Container = styled.div`
  min-width: 42.8rem;
  max-width: 136.8rem;
  margin: 0 auto;
  /* height: 100vh; */

  footer {
    position: absolute;;
    bottom: 0;

  }

`

export const Content = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: flex-start;
  gap: 1.7rem;

  margin: 5.6rem 3.5rem 12.2rem 3.5rem;
  
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    max-height: 30rem;
    overflow-y: auto;
  }

  strong {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 4.5rem;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.colors["light-300"]};
  }

  @media(min-width: 1368px) {
    padding: 0;
    max-width: 136.8rem;
    margin: 3.43rem 12.3rem;

    main {
      height: 40vh;
      overflow-y: auto;
    }


    .statusOder-mobile {
      display: none;
    }

    table .status::before {
      top: 2rem;
    }
  }
`

export const StatusOrderContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors["dark-1000"]};
  border-radius: 8px;
  padding: 1.6rem;

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors["light-400"]};
  }
`

export const StatusOrder = styled.div`
  display: flex;
  align-items: center;
  gap: 3.1rem;
  margin-bottom: 1.6rem;

  div {
    position: relative;
  }
`

export const Status = styled.span`
    margin-left: 1.5rem;

    &::before {
    content: "";
    position: absolute;
    display: flex;
    top: 6px;
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
export const Table = styled.table`
  width: 100%;
  margin: 0 auto;
  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.colors["dark-1000"]};
  color: ${({ theme }) => theme.colors["light-400"]};
  border-collapse: collapse;
  
  th {
    padding: 2.1rem;
    text-align: start;
    color: ${({ theme }) => theme.colors["light-300"]};
    border-left: 2px solid ${({ theme }) => theme.colors["dark-1000"]};

  }
  
  td {
    border-top: 2px solid ${({ theme }) => theme.colors["dark-1000"]};
    padding: 1.6rem;
    margin-right: 0.8rem;
    text-align: start;
    position: relative;
    border-left: 2px solid ${({ theme }) => theme.colors["dark-1000"]};
  }

  @media(max-width: 1368px) {
    display: none;
  } 
`