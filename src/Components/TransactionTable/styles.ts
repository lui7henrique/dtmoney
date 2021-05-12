import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tr {
      transition: opacity 200ms;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }

    td {
      padding: 1rem 2rem;
      background-color: var(--shape);

      font-weight: 400;
      color: var(--text-body);

      transition: border-radius 500s;
      opacity: 0.7;
      transition: opacity, border-left 200ms;
      transition: border-radius 300ms;

      &:hover {
        &:first-child {
          border-radius: 1rem 0 0 1rem;
        }

        &:last-child {
          border-radius: 0 1rem 1rem 0;
        }
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

      &:first-child {
        color: var(--text-title);
        border-radius: 0.5rem 0 0 0.5rem;
      }

      &:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }
    }
  }
`;
