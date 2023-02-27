import styled from "styled-components"

export const Container = styled.div`
  width: 44.4rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 13.1rem;

  > span {
    font-weight: 500;
    margin-top: 1.8rem;
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    line-height: 3.2rem;
  }
  
  strong {
    font-size: 3.2rem;
    font-family: "Poppins", sans-serif;
  }
  
  `

export const FoodInformation = styled.div`
  margin-top: 3.4rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  
  img {
    width: 10rem;
    height: 10rem;
  }
`

export const Food = styled.div`
  .name {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors["light-200"]};

    margin-right: 1rem;
  }

  .price {
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.colors["light-400"]}
  }
  
  button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors["tomato-400"]};
    font-size: 1.2rem;
    line-height: 1.9rem;
    cursor: pointer;
  }
  
`