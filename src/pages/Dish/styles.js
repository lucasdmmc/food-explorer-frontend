import styled, { css } from "styled-components";

export const Container = styled.div`
  min-width: 42.8rem;
  margin: 0 auto;

  ${({menuIsVisible}) => menuIsVisible && css`
      opacity: 0;
      height: 0;
  `}


  @media (min-width: 1368px) {
    max-width: 136.8rem;
    max-height: 82.4rem;

    footer {
      position: absolute;
      bottom: 0;
    }

    .back-home-desktop {
      padding: 0 6rem;
    }

    .food-desktop {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 4.7rem;
      padding-top: 4.2rem;
      padding-left: 12.1rem;

      img {
        width: 30rem;
        height: 30rem;
      }
    }

    .food-content {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 4rem;
        line-height: 5.6rem;
        display: flex;
        justify-content: start;
      }
    }

    .ingredients {
      p {
        font-size: 2.4rem;
        text-align: start;
      }
    }

    .receipt-btn {
      width: 16.2rem;
      height: 4.8rem;
      svg {
        display: none;
      }
    }
  }

 
`

export const Content = styled.div`
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
      display: flex;
      justify-content: center;
      margin-bottom: 2.4rem;
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
    height: 3.7rem;
  }

  .receipt-btn {
    display: flex;
    align-items: center;
    gap: 0.74rem;
    justify-content: center;
    text-transform: capitalize;
    font-size: 1.2rem;
    background: ${({ theme }) => theme.colors["tomato-100"]};
  }
`
export const AmountFood = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.9rem;
`