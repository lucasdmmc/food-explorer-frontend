import styled, { css } from "styled-components";

export const Container = styled.div`
  min-width: 42.8rem;
  margin: 0 auto;
  /* min-height: 91.3rem; */

  ${({menuIsVisible}) => menuIsVisible && css`
      opacity: 0;
      height: 0;
  `}

 
`

export const Content = styled.div`
  /* height: 100%; */
  padding: 3.6rem 5.6rem 5.4rem 5.9rem;

  a {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    color: ${({ theme }) => theme.colors["light-300"]};
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.4rem;
    font-family: "Poppins", sans-serif;
    margin-bottom: 1.6rem;
    text-transform: lowercase;

    transition: filter 0.4s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (min-width: 1368px) {
    max-width: 136.8rem;
    margin: 0 auto;
  }
`

export const Food = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 2.4rem;

  img {
    width: 26.4rem;
    height: 26.4rem;
    object-fit: cover;
  }

  strong {
    font-size: 2.7rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors["light-300"]};
  }
`

export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2.4rem;
  margin-bottom: 4.8rem;

  p {
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.colors["light-300"]};
    line-height: 2.3rem;
  }

`

export const AmountFoodIncluded = styled.div`
  display: flex;
  align-items: center;
  gap: 1.9rem;

  svg {
    color: ${({ theme }) => theme.colors["light-100"]};

  }

  button {
    border: none;
    background: none;
  }

  .receipt-btn {
    display: flex;
    align-items: center;
    gap: 0.74rem;
    justify-content: center;
    text-transform: capitalize;
    font-size: 0.95rem;
    background: ${({ theme }) => theme.colors["tomato-100"]};
  }
`
export const AmountFood = styled.div`
  display: flex;
  gap: 1.9rem;
`