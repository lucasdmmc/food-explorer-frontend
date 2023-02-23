import styled, { css } from "styled-components";

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
  opacity: 0.7;
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

export const FoodAmountContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;

   .minus, 
   .plus {
    border: none;
    background: none;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.colors["light-100"]};
    }
  }

  span {
    font-size: 2rem;
  }
`