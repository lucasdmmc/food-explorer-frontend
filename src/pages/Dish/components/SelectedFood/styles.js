import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: start;
  gap: 4.7rem;
  margin-top: 4.2rem;
  padding-bottom: 12.95rem;


  img {
    width: 39rem;
    height: 39rem;
  }
`

export const FoodInformation = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 4rem;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.colors["light-300"]};
    margin-bottom: 2.4rem;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;
    line-height: 140%;
    margin-bottom: 2.8rem;
  }

`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 5.2rem; 
`