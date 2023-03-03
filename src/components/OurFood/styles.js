import styled from "styled-components";

export const Slider = styled.div`
  overflow: hidden;
  width: 100%;

  @media(max-width: 428px) {
    overflow: visible;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2.7rem;
  position: relative;

`

export const SliderContainer = styled.div`
  display: flex;
  gap: 2.7rem;
  margin: 0 auto;

  @media(max-width: 428px) {
  gap: 1.6rem;
}
`