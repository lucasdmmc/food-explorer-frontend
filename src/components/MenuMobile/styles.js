import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 42.8rem;
  max-height: 91.8rem;
  height: 100vh;
  border: 1px solid;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  overflow-y: hidden;
  
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;
  transform: translateX(-100px);

  
  footer {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    transform: translateY(0px);
    pointer-events: auto;
  `}
`

export const Header = styled.div`
  padding: 6.4rem 2.8rem 3.2rem 2.8rem;
  display: flex;
  align-items: center;
  max-height: 11.4rem;
  gap: 1.6rem;
  background: ${({ theme }) => theme.colors["dark-700"]};
  margin-bottom: 3.6rem;
  
  button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.colors["light-100"]};     
    }
  }

  span {
    font-size: 2.1rem;
  }
`

export const Content = styled.div`
  padding: 0 2.8rem;

  input {
    width: 100%;
  }
`

export const Links = styled.div`
  margin-top: 4.6rem;
  
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  li, a {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors["light-300"]};
    font-family: "Poppins", sans-serif;
    
  }

  li {
    border-bottom: 1px solid ${({ theme }) => theme.colors["dark-1000"]};;
    padding-bottom: 1rem;
    transition: filter 0.4s;

    &:hover {
      filter: brightness(0.8);
    }
  }

`