import styled from "styled-components";

export const Container = styled.div`
  max-width: 138.6rem;
  margin: 0 auto;
  position: relative;

  footer {
    position: absolute;
    bottom: 0;
  }
  `

export const Content = styled.div`
  padding-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 20.8rem;
  padding: 3.4rem 12.3rem;
`
export const Summary = styled.div`
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

export const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  width: 53rem;
  border: 1px solid;

  strong {
    font-size: 3.2rem;
    font-family: "Poppins", sans-serif;
  }

  div {
    width: 100%;
    margin-top: 3.2rem;
    border: 1px solid;
  }
`