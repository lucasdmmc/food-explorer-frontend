import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.4rem;

  @media(min-width: 1368px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.2rem;
  }

  span {
    font-size: 1.4rem;
    line-height: 2.4rem;
    padding: 0.4rem 1.2rem;
    background: ${({ theme }) => theme.colors["dark-1000"]};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    text-transform: lowercase;
    font-family: "Poppins", sans-serif;
  }
`