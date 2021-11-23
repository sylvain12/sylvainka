import React from "react";
import Navigation from "../Navigation/Navigation";
import Hero from "../Hero/Hero";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <Navigation />
      <Hero />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  min-height: 100vh;
`;
