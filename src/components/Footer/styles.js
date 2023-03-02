import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 42.8rem;
  background: ${({ theme }) => theme.colors["dark-600"]};
  padding: 2.93rem 2.77rem;

  span {
    font-size: 1.2rem;
    line-height: 1.6rem;
    fill: ${({ theme }) => theme.colors["light-200"]};
  }
`

export const LogoFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.64rem;

  svg {
    fill: ${({ theme }) => theme.colors["light-700"]};
  }

  strong {
    font-size: 1.52rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.colors["light-700"]};
  }
`