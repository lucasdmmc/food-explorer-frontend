import styled from "styled-components";

export const Container = styled.div`
  max-width: 138.6rem;
  margin: 0 auto;

  footer {
    position: absolute;
    bottom: 0;
  }

  h1 {
    margin: 3.4rem 12.3rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.colors["light-300"]}
  }
`

export const Favorited = styled.div`
  display: flex;
  gap: 3.2rem;
  margin: 0 12.3rem;
  flex-wrap: wrap;

`


export const FavoriteFood = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    strong {
      font-weight: 500;
      font-size: 2rem;
      line-height: 3.2rem;
      font-family: "Poppins", sans-serif;
      color: ${({ theme }) => theme.colors["light-300"]}
    }

    button {
      border: none;
      background: none;
      color: ${({ theme }) => theme.colors["tomato-400"]};
      font-size: 1.2rem;
      cursor: pointer;
      transition: color 0.4s;

      &:hover {
        color: ${({ theme }) => theme.colors["tomato-300"]};
      }
    }
  }

  img {
    width: 100px;
    height: 100px;
  }
`