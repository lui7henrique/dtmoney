import styled from "styled-components";

export const Container = styled.div`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: white;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter, border-radius 500ms;

    &:hover {
      filter: brightness(0.9);
      border-radius: 1rem;
    }
  }
`;
