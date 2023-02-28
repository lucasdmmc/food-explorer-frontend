import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 138.6rem;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 104px auto;
  grid-template-areas: "header" "content";
  height: 100vh;
  overflow-x: hidden;;
  
  > main {
    grid-area: "content";
    /* overflow-y: scroll;/ */
    overflow-x: hidden;
  }

  /* ========= RESPONSIVE ========== */

  @media(max-width: 428px) {
    padding: 0;
    margin: 0;
    min-width: 100%;
    opacity: 1;


    ${({menuIsVisible}) => menuIsVisible && css`
      opacity: 0;
    `}

    .responsive-main {
      margin: 0;
      padding: 0;
      max-width: 100%;

      .intro {
        margin: 0;
        padding: 0;
        margin: 4.4rem 1.6rem 6.2rem 3rem;
        max-width: 37.6rem;
        max-height: 12rem;
        position: relative;
        
        img {
          width: 19.1rem;
          height: 14.9rem;
          position: absolute;
          top: -26px;
          right: -55px;
        }
        
        .intro-text {
          margin-right: 0.8rem;
          strong {
            font-size: 1.6rem;
          }

          span {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  `
export const Intro = styled.div`
  max-width: 138.6rem;
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
    object-fit: cover;
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