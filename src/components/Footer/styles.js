import styled from "styled-components";

export const Container = styled.footer`
  min-width: 42.8rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  background: ${({ theme }) => theme.colors["dark-600"]};
  padding: 2.93rem 2.77rem;
  max-width: 136.8rem;
  
  span {
    font-size: 1.2rem;
    line-height: 1.6rem;
    fill: ${({ theme }) => theme.colors["light-200"]};
  }
  
  @media(min-width: 1368px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2.3rem 12.3rem;
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