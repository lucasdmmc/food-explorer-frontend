import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors["dark-900"]};
  border-radius: 5px;

  display: flex;
  align-items: center;
  
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
    padding: 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors["light-500"]};
    }
  }
`