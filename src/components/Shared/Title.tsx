import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface TitleProps {
  barPosition: string;
  showBar: boolean;
  showPonctuation: boolean;
  children: ReactNode | ReactNode[];
}

const StyledTitle = styled.h3`
  position: relative;
  display: inline-block;
  font-size: 3rem;
  font-weight: var(--fw-light);
  margin-bottom: 4rem;

  &::after {
    content: '';
    position: absolute;
    background: var(--second-color);
    height: 4px;
    width: 5rem;
    bottom: -1rem;

    ${(props) =>
  props.showBar && props.barPosition === "center" && css`
      left: 50%;
      transform: translateX(-50%);
    `}

    ${(props) =>
  props.showBar && props.barPosition === "left" && css`
      left: 0;
    `}

    ${(props) =>
  props.showBar && props.barPosition === "right" && css`
      right: 0;
    `}
  }
`;

const TitlePoctuation = styled.span`
  /* display:  ${(props) => props.showPonctuation ? "inline-block" : "none"}; */
  display: inline-block;
  font-size: inherit;
  color: var(--second-color);
`;

export default function Title(
  { barPosition = "center", showBar = true, showPonctuation = true, children }:
    TitleProps,
) {
  return (
    <StyledTitle
      barPosition={barPosition}
      showBar={showBar}
      showPoctuation={showPonctuation}
    >
      {children}
      {showPonctuation ? <TitlePoctuation>.</TitlePoctuation> : ""}
    </StyledTitle>
  );
}
