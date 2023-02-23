import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;
  /* margin: 0 auto; */
  background: ${({ theme }) => theme.colors["dark-600"]};

  display: flex;
  align-items: center;
  justify-content: space-between;
  strong {  
    margin: 12rem;
    color: ${({ theme }) => theme.colors["light-200"]};
  }
  > div {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    margin: 0 12.3rem;
    color: ${({ theme }) => theme.colors["light-700"]};
    font-size: 2.4rem;
    font-weight: bold;
  }


`