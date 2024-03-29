"use client"
import styled from "styled-components";

export const InputPrimary = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    background-color: #494949;
    color: #ffffff;
    font-family: Roboto-Regular, sans-serif;
    border: none;

    &::placeholder {
    color: #9f9f9f;
  }

  ${(props) =>
    props.type === 'file' &&
    `
      display: none;
  `}
`