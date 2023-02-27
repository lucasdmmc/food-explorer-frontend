import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  width: 30.4rem;
  height: 46.2rem;
  background: ${({ theme }) => theme.colors["dark-300"]};
  position: relative;
  padding: 2.4rem 2.4rem 0;

  margin-top: 2.3rem;

  border-radius: 8px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  opacity: 0.8;
  transition: opacity 0.7s;

  &:hover {
    opacity: 1;
  }

  > button {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    border: none;
    background: none;
    cursor: pointer;
    
    > svg {
      color: ${({ theme }) => theme.colors["light-200"]};
    }
    
  }

  img {
    width: 17.6rem;
    height: 17.6rem;
  }

  strong {
    font-size: 2.4rem;
    font-family: "Poppins", sans-serif;
  }

  .description {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }

  .price {
    font-size: 3.2rem;
    line-height: 5.1rem;
    color: ${({ theme }) => theme.colors["cake-200"]};

  }
`

export const AmountFoodContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`

const animateFavorite = keyframes`
  50%, 100% {
    transform: scale(2);
  }

  0%, 100% {
    transform: scale(1)
  }
`

export const Favorites = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  border: none;
  background: none;
  cursor: pointer;

  
  svg {
    stroke: ${({ theme }) => theme.colors["light-100"]}
  }
  
  
  svg {
    ${({ isActive, theme }) => isActive && css`
    fill: ${theme.colors["tomato-300"]};
    stroke: ${theme.colors["tomato-300"]};
    animation: ${animateFavorite} 2s forwards ease;
  `}
    
    
  }
`