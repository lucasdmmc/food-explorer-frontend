import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.header`
  background: ${({ theme }) => theme.colors["dark-600"]};
  min-width: 138.6rem;
  margin: 0 auto;
  height: 10.4rem;
  grid-area: header;

  display: flex;

  padding: 0 12.3rem;

  
  
  /* display: flex;
  align-items: center;
  justify-content: center; */

  @media (max-width: 428px) {
    min-width: 100%;
    padding: 0;
    margin: 0;

    .logoName, 
    .search,
    .links {
      opacity: 0;
    }
    
    .responsive-header {
      min-width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 3.2rem;

      button {
        border: none;
        background: none;

        display: flex;
        align-items: center;
        cursor: pointer;

        position: relative;

        > span {
          position: absolute;
          top: -3px;
          right: -3px;
          color: white;
          padding: 0.2rem 0.5rem;
          border-radius: 50%;
          background: ${({ theme }) => theme.colors["tomato-100"]}
        }

        svg {
          color: ${({ theme }) => theme.colors["light-100"]}
        }
      }

      .logo {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        span {
          font-size: 2.1rem;
          font-weight: bold;
        }

        svg {
          fill: ${({ theme }) => theme.colors["cake-100"]}
        }

      }
    }
  }

  @media (min-width: 428px) {
    .responsive-header {
      display: none;
    }
  }
  `

export const Content = styled.div`
  max-width: 112rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3.2rem;
  
  input {
    width: 100%;
  }

  a {
    transition: color 0.4s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors["light-400"]};
  }
`

export const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3.2rem;

`

export const LogoName = styled.div`
  width: 77rem;
  display: flex;
  align-items: center;
  gap: 1.1rem;

  svg {
    fill: ${({ theme }) => theme.colors["cake-100"]};
  }

  span {
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 2.8rem;
  }
`
export const ReceiptButton = styled(Link)`
  
  display: flex;
  align-items: center;
  gap: 2.9rem;


  button {
    width: 18.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.1rem;
    border: none;
  }

  @media(max-width: 428px) {
    opacity: 0
  }
`