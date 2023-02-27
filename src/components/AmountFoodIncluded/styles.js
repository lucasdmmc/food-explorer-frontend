import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.8rem;
`

export const FoodAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 1.7rem;

  .minus,
  .plus {
    border: none;
    background: none;
    cursor: pointer;
  }

  svg {
    color: ${({ theme }) => theme.colors["light-100"]}
  }
  
  span {
    font-size: 2rem;
  }
`