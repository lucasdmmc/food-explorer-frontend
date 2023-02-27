import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors["dark-600"]};
  height: 10.4rem;

  grid-area: header;

  padding: 0 12.3rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  `

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 4.3rem;

  input {
    width: 22rem;
  }

  a {
    transition: color 0.4s;

  }

  a:hover {
    color: ${({ theme }) => theme.colors["light-400"]};
  }
`

export const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* min-width: 15rem; */

  a {
    min-width: 14.7rem;
  }

`

export const LogoName = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  min-width: 19rem;

  img {
    width: 3rem;
    height: 3rem;
  }

  span {
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 2.8rem;
  }
`
export const ReceiptButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.7rem;
`
export const ReceiptButton = styled.button`
  min-width: 21.6rem;
  height: 5.6rem;
  padding: 1.2rem 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  border-radius: 5px;

  border: none;
  background: ${({ theme }) => theme.colors["tomato-100"]};
  color: ${({ theme }) => theme.colors["light-100"]};
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 2.4rem;

  font-family: "Poppins", sans-serif;

`