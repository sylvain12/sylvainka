import React from "react";
import Navigation from "../Navigation/Navigation";
import Hero from "../Hero/Hero";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <Navigation />
      <Hero />
      <HeaderEmailInfo>
        <p>sylvainka12@gmail.com</p>
      </HeaderEmailInfo>
    </HeaderWrapper>
  );
}

const HeaderEmailInfo = styled.div`
  position: fixed;
  right: -4rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  font-weight: var(--fw-thin);
  transform: rotate(90deg);

  & p {
    position: relative;
  
    &::after {
      content: '';
      position: absolute;
      transform: rotate(90deg);
      height: 8rem;
      width: 1px;
      background: var(--second-color);
      left: 130%;
      bottom: -180%;

    }
  }
`

const HeaderWrapper = styled.div`
  min-height: 100vh;
`;
