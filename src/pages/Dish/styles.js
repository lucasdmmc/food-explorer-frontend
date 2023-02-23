import styled from "styled-components";

export const Container = styled.div``


export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const BackToHome = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;

  margin-top: 2.4rem;

  strong {
    font-size: 2.4rem;
    line-height: 140%;
    color: ${({ theme }) => theme.colors["light-300"]};
  }
`