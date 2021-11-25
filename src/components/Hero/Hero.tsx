import React, { ReactNode } from "react";
import {
  HeroDetail,
  HeroHilight,
  HeroIntro,
  HeroJob,
  HeroName,
  HeroScroll,
  HeroSubIntro,
  HeroTitle,
  HeroWrapper,
  HeroIntroContainer,
  HeroTitleContainer,
} from "./Hero.style";
import { ArrowDown } from "iconoir-react";
import Link from "next/link";


export interface HeroJobProps {
  variant?: string,
  children: ReactNode
}

export interface HeroHilightProps{
  type?: string,
  children: ReactNode,
}

const StyleHeroJob = ({variant, children, ...rest}: HeroJobProps) => {
  return (
    <HeroJob variant={variant} {...rest} >{children}</HeroJob>
  );
}

const StyledHeroHilight = ({type, children, ...rest}: HeroHilightProps) => {
  return (
    <HeroHilight type={type} {...rest}>{children}</HeroHilight>
  )
}

export default function Hero() {

  return (
    <HeroWrapper>

      <HeroIntroContainer>
        <HeroIntro>Hi, i am</HeroIntro>
        <span style={{display: 'inline-block', height: "6px", width:"6rem", background: "#ff5f6f", borderRadius: "5px"}}></span>
        <HeroName>
          {/* <span style={{fontSize: '2rem'}}>⭐️</span> */}
          Sylvain Kadjo
          {/* <span style={{fontSize: '2rem'}}>⭐️</span> */}
          </HeroName>
        {/* <span></span> */}
      </HeroIntroContainer>

      <HeroTitleContainer>
        <HeroTitle>
          <StyleHeroJob>Software developer.</StyleHeroJob>
        </HeroTitle>
      </HeroTitleContainer>

      <HeroSubIntro>
        I am a self-taught software developer with kwnolegde on <StyledHeroHilight type='warning'>design</StyledHeroHilight> & <StyledHeroHilight>data science</StyledHeroHilight>.
        {/* I am a self-taught software developer, i work most of the time on <HeroHilight>web</HeroHilight> project. I sometime do some <HeroHilight>design</HeroHilight> and also work on <HeroHilight>data science</HeroHilight> project. */}
{/*         
        & you know <HeroHilight>what</HeroHilight> ? I{" "}
        <span style={{ color: "red" }}>♥</span> build{" "}
        <HeroHilight>Stuff</HeroHilight> */}
      </HeroSubIntro>

      {/* <HeroDetail>
        
      </HeroDetail> */}

      <HeroScroll>
        <Link href="#about">
          <a>
            <ArrowDown />
          </a>
        </Link>
      </HeroScroll>
    </HeroWrapper>
  );
}