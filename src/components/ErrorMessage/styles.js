import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  0%, 50% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(-200px);
    opacity: 0.1;
  }
`

const animationMobile = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(0px);

  }

  100% {
    transform: translateY(-100px);
  }
`

export const Container = styled.div`
  width: 400px;
  height: 60px;
  background: ${({ theme }) => theme.colors["tomato-100"]};
  animation: ${animation} 3s ease-in-out forwards normal;
  position: absolute;
  right: 0;
  left: 50%;
  top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 10px;


  @media(max-width: 428px) {
    max-width: 42.8rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    animation: ${animationMobile} 2s ease-in-out forwards normal;
    border-radius: 6px;

  }
`