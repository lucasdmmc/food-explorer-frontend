import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  min-width: 42.8rem;
  max-height: 11.4rem;
  background: ${({ theme }) => theme.colors["dark-700"]};
  padding: 6rem 3.6rem 2.93rem 2.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn-order-signout,
  .navigation {
    display: none;
  }
  
  svg {
    cursor: pointer;
  }

  div {
    position: relative;

    span {
      position: absolute;
      top: -8px;
      right: -8px;
      background: ${({ theme}) => theme.colors["tomato-100"]};
      padding: 0.2rem 0.5rem;
      border-radius: 50%;
    }
  }

  @media (min-width: 1368px) {
    max-width: 136.8rem;
    padding: 0;
    margin: 0 auto;
    padding: 2.4rem 12.3rem;
    display: flex;
    /* justify-content: center; */

    .btn-order-signout,
    .navigation {
      display: inherit;
    }

    
    .receipt-btn,
    .menu-btn {
      display: none;
    }

    .logo-header {
      display: flex;
      align-items: center;
      gap: 1rem;

      strong {
        font-size: 2.4rem;
      }
    }

    .btn-order-signout {
      display: flex;
      align-items: center;
      gap: 2.9rem;

      button {
        padding: 1.6rem 3.2rem;
        border: none;
        display: flex;
        align-items: center;
        gap: 1.1rem;
        width: 18.7rem;
      }
    }
  }
`

export const LogoHeader = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    fill: ${({ theme}) => theme.colors["cake-100"]};
  }

  strong {
    text-transform: lowercase;
    font-size: 2.1rem;
  }
`

// ============== RESPONSIVES COMPONENTS ========================

export const Navigation = styled.div`
  max-width: 80.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  margin-left: 4.3rem;
  margin-right: 2.4rem;
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem ;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30rem;
  /* margin-left: 4.3rem; */
  border-radius: 5px;
  background: ${({ theme }) => theme.colors["dark-900"]};

  svg {
    margin-left: 0.6rem;
  }
  
  input {
    color: ${({ theme }) => theme.colors["light-300"]};
    width: 100%;
    background: none;
    border: none;
    outline: none;
    padding: 1.6rem;
  }
`

