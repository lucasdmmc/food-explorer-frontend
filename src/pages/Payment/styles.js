import styled from "styled-components";

export const Container = styled.div`
  max-width: 138.6rem;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 104px;
  grid-template-areas: "header";
  height: 100vh;
  
  > main {
    grid-area: "content";
    overflow-x: hidden;
    overflow-y: auto;
  }
`

export const Content = styled.div`
  padding-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 10rem;
  min-height: 48rem;
  padding: 3.4rem 12.3rem;

`