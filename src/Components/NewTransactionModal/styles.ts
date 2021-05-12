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

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
    outline: none;

    &:hover {
      filter: brightness(0.8);
      border-radius: 1rem;
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
}
export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid;
  background: var(--shape);
  border-radius: 0.25rem;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  opacity: 0.4;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};

  transition: opacity 200ms;

  &:hover {
    opacity: 1;
  }

  &.incomeButton {
    background: var(--green);
  }

  &.outcomeButton {
    background: var(--red);
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 1rem;
    color: white;
  }
`;
