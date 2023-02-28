import styled from "styled-components";

export const Container = styled.div`
  max-width: 138.6rem;
  margin: 0 auto;
  overflow-x: hidden;
  /* height: 100vh; */

  footer {
    margin-top: 11.6rem
  }

  button {
    width: 17.2rem;
  }
`

export const GoBack = styled.div`
  margin: 4rem 12.3rem 3.2rem 12.3rem;

  button {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors["light-300"]};
    font-size: 2.4rem;
    font-weight: 700;
    text-transform: lowercase;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    color: ${({ theme }) => theme.colors["light-300"]};
    margin-top: 2.4rem;
  }
`

export const Content = styled.div`
  margin: 0 12.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  /* align-items: center; */
  gap: 3.2rem;

  span {
    color: ${({ theme }) => theme.colors["light-400"]};
  }

  .part-1, .part-2 {
    display: flex;
    gap: 3.2rem;
  }

  .input-one {
    width: 22.9rem;
    label {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
  }

  .input-two {
    width: 46.3rem;
    label {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
    input {
      padding: 1.4rem;
    }
  }

  .select {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    .background {
      background: ${({ theme }) => theme.colors["dark-900"]};
      width: 36.4rem;
      height: 4.8rem;
      border-radius: 5px;
      display: flex;
      align-items: center;
      /* gap: 1.4rem; */
      padding: 1.4rem;
    }

    select {
      border: none;
      outline: none;
      background: none;
      width: 100%;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors["light-400"]};
    }
  }

  .ingredients {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    .background {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      background: ${({ theme }) => theme.colors["dark-900"]};
      width: 83.7rem;
      height: 4.8rem;
      padding: 0.8rem;
      border-radius: 5px;
    }

    .remove {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: ${({ theme }) => theme.colors["light-200"]};
      padding: 0.8rem;
      background: ${({ theme }) => theme.colors["light-500"]};
      border-radius: 5px;
    }

    .plus {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: ${({ theme }) => theme.colors["light-500"]};
      padding: 0.8rem;
      border: 1px dashed;
      border-radius: 8px;

      svg {
        cursor: pointer;
      }
    }
  }

  .price {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    input {
      width: 25.1rem;
      padding: 1.4rem;
    }
  }

  .textarea {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .button {
    display: flex;
  }
`