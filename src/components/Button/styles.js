import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;
  background: ${({ theme }) => theme.colors["tomato-100"]};
  color: ${({ theme }) => theme.colors["light-100"]};
  border-radius: 5px;
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`