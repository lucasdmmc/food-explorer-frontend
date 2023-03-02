import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background: ${({ theme }) => theme.colors["dark-900"]};
  display: flex;
  align-items: center;
  gap: 1.6rem;
  border-radius: 5px;
  
  > svg {
    margin-left: 0.6rem;
  }
  
  input {
    width: 100%;
    height: 48px;
    border: none;
    background: none;
    outline: none;
    color: ${({ theme }) => theme.colors["light-500"]};
    padding: 1.4rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors["light-500"]};
    }
  }
`