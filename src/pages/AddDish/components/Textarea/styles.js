import styled from "styled-components";

export const Container = styled.textarea`
  width: 112rem;
  height: 17.2rem;
  border-radius: 8px;
  outline: none;
  border: none;
  resize: none;
  background: ${({ theme }) => theme.colors["dark-900"]};
  padding: 1.4rem;
`