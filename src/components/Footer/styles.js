import styled from "styled-components";

export const Container = styled.footer`
  width: 138.6rem;
  height: 7.7rem;
  padding: 0 12.3rem;
  background: ${({ theme }) => theme.colors["dark-600"]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {  
    color: ${({ theme }) => theme.colors["light-200"]};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    color: ${({ theme }) => theme.colors["light-700"]};
    font-size: 2.4rem;
    font-weight: bold;

    svg {
      fill: ${({ theme }) => theme.colors["light-700"]};
    }
  }

  @media(max-width: 428px) {
    max-width: 42.9rem;
    display: flex;
    max-height: 7.7rem;
    align-items: center;
    gap: 0.8rem;
    padding: 2rem;

    strong {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors["light-500"]};

    }
    .responsive-logo-footer {
      span {
        font-size: 1.23rem;
      }
    }

  }

`