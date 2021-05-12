import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: var(--shape);
    color: var(--text-body);

    font-weight: 400;
    font-size: 1rem;
    border: none;

    transition: border-left 200ms;

    &:focus {
      border-left: 7px solid var(--green);
      transition: border-left 0.2s;
    }

    &:focus {
      outline: none;
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: white;
    border-radius: 0.25rem;
    border: none;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: border-radius 500ms;

    &:hover {
      filter: brightness(0.8);
      border-radius: 1rem;
    }
  }
`;
