import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: string;
  children: ReactNode;
}

type ButtonType =
  & ButtonProps
  & React.ReactNode
  & React.HTMLProps<HTMLButtonElement>
  & React.HTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button`
  border-radius: .5rem;
  padding: 1rem 1.5rem;
  display: inline-block;
  border: 2px solid;
  background: transparent;
  font-family: var(--ff);
  cursor: pointer;
  border-color: var(--color-white);
  color: var(--color-white);
  font-size: 1.6rem;
  font-weight: var(--fw-medium);

  ${({ variant }: ButtonProps) =>
  variant === "default" && css`
    border-color: var(--white-color);
    color: var(--white-color);
    transition: background .2s;

    &:hover {
      background: var(--white-color-light)
    }
  `}

  ${({ variant }: ButtonProps) =>
  variant === "primary" && css`
    border-color: var(--main-color);
    color: var(--main-color);
    transition: background .2s;

    &:hover {
      background: var(--main-color-light)
    }
  `}

  ${({ variant }: ButtonProps) =>
  variant === "secondary" && css`
    border-color: var(--second-color);
    color: var(--second-color);
    transition: background .2s;

    &:hover {
      background: var(--second-color-light)
    }
  `}

`;

export default function Button({ variant = "default", children }: ButtonProps) {
  return <StyledButton variant={variant}>{children}</StyledButton>;
}
