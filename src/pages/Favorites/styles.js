import styled from "styled-components";

export const Container = styled.div`
  max-width: 136.8rem;
  min-width: 42.8rem;
  margin: 0 auto;
  
  footer {
    position: absolute;
    bottom: 0;
  }
`

export const Favorited = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  margin: 5.6rem 3.5rem;

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.colors["light-300"]}
  }

  main {
    display: flex;
    flex-wrap: wrap;
    gap: 3.2rem;
    overflow-y: auto;
    max-height: 50rem;
  }

  @media(min-width: 1368px) {
    max-width: 136.8rem;
    margin: 3.4rem 12.3rem;
    
    main {
      display: flex;
      /* justify-content: space-around; */
      overflow: hidden;;
      height: 100%;
    }
    
    .favorite-food-desktop {
      border: 1px solid;
      margin: 0 auto;
    }
  }

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