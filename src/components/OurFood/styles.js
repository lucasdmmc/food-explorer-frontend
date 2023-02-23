import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2.7rem;
  position: relative;
  
  /* &::before {
    content: "";
    width: 27.8rem;
    height: 44.8rem;
    position: absolute;
    top: 24px;
    left: -10px;
    z-index: 1;
    border-top-right-radius: 8px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  } */

  /* &::after {
    content: "";
    width: 22.4rem;
    height: 56.8rem;
    position: absolute;
    top: 17px;
    right: -40px;
    border-top-left-radius: 8px;

    transform: matrix(-1, 0, 0, 1, 0, 0);
    background: linear-gradient(50deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  } */
`

export const SliderContainer = styled.div`
  display: flex;
  gap: 2.7rem;
  margin: 0 auto;
`