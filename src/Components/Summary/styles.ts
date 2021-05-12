import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -4rem;

  div {
    background: var(--shape);
    padding: 1.5rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    transition: border-radius 300ms ease-out;

    &.highlight-background {
      background: var(--green);
      color: var(--shape);

      /* &:hover {
        border-left: 17px solid var(--shape);
      } */
    }

    /* &.outcomes {
      &:hover {
        border-left: 17px solid var(--red);
      }
    } */

    &:hover {
      /* border-left: 17px solid var(--green); */
      border-radius: 1rem;
    }

    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }
`;
