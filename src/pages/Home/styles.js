import styled from "styled-components";

export const Container = styled.div`
  /* width: 138.6rem;
  margin: 0 auto; */
  display: grid;
  grid-template-rows: 104px auto;
  grid-template-areas: "header" "content";
  height: 100vh;
  
  > main {
    grid-area: "content";
    overflow-y: scroll;
  }
  
  `
export const Intro = styled.div`
  background: linear-gradient(rgba(9, 30, 38, 1) 0%, rgba(0, 19, 28, 1) 100%) ;
  margin: 16.4rem 12.4rem 0;
  height: 26rem;
  border-radius: 8px;

  margin-bottom: 4.9rem;

  display: flex;
  align-items: center;

  position: relative;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    grid: 0.8rem;
    color: ${({ theme }) => theme.colors["light-300"]};

    strong {
      font-weight: 500;
      font-size: 4rem;
      line-height: 5.6rem;
      font-family: "Poppins", sans-serif;
    }
  }
`
export const ImgPosition = styled.div`
  position: relative;
  top: -63px;
  left: -68px;
`