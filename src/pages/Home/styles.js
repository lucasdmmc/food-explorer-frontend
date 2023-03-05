import styled, { css } from "styled-components";

export const Container = styled.div`
  min-width: 42.8rem;
  width: 100%;
  margin: 0 auto;
  display: grid;
  /* height: 100vh; */
  grid-template-areas: "header" "content";
  /* overflow-y: hidden;  */

  
  
  ${({ menuIsVisible }) => menuIsVisible && css`
  opacity: 0;
  height: 0;
  `}
  `

export const Main = styled.main`
  grid-area: "content"; 
  overflow-x: hidden; 
  
  @media(min-width: 1368px) {
    max-width: 136.8rem;
    margin: 0 auto;
    padding: 0;

    .intro-desktop {
      width: 112rem;
      height: 26rem;
      margin: 16.4rem auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      .intro-img-mobile {
        display: none;
      }

      img {
        width: 63.2rem;
        position: relative;
        top: -5.5rem;
        left: -7rem;
        object-fit: cover;
      }

      .intro-information-desktop {
        display: flex;
        gap: 0.8rem;

        strong {
          font-weight: 500;
          line-height: 5.6rem;
          font-size: 4rem;
          color: ${({ theme }) => theme.colors["light-300"]};
        }

        span {
          font-size: 1.4rem;
          color: ${({ theme }) => theme.colors["light-300"]};
        }
      }
    }
  }
`

export const Intro = styled.div`
  min-width: 37.6rem;
  height: 12rem;
  margin: 4.4rem 1.6rem 6.2rem 3rem;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  display: flex;
  align-items: center;
  border-radius: 3px;
  opacity: 1;

  @media (max-width: 428px) or (max-width: 1368px) {
    .intro-img-desktop {
      display: none;
    }
  }

  img {
    position: relative;
    top: -1.5rem;
    left: -3rem;
    min-width: 19.1rem;
    object-fit: cover;
  }   
  
`

export const IntroInformation = styled.div`
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: flex-start;
  margin-right: 4rem;
  position: relative;
  right: 3.5rem;

  strong {
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.colors["light-300"]};
    font-size: 1.8rem;
    line-height: 2.5rem;
  }

  span {
    color: ${({ theme }) => theme.colors["light-300"]};
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;

  }
`