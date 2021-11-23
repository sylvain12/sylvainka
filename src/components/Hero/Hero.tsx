import React from "react";
import {
  HeroDetail,
  HeroHilight,
  HeroIntro,
  HeroJob,
  // HeroName,
  HeroScroll,
  HeroSubIntro,
  HeroTitle,
  HeroWrapper,
} from "./Hero.style";
import { ArrowDown } from "iconoir-react";
import Link from "next/link";

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroIntro>
        Hi, i am
        {/* - <HeroName>Sylvain Kadjo</HeroName> */}
      </HeroIntro>

      <HeroTitle>
        <HeroJob>Software developer</HeroJob>
        <span style={{ fontSize: "7rem" }}>.</span>
      </HeroTitle>

      <HeroSubIntro>
        & you know <HeroHilight>what</HeroHilight> ? I{" "}
        <span style={{ color: "red" }}>♥</span> build{" "}
        <HeroHilight>Stuff</HeroHilight>
      </HeroSubIntro>

      <HeroDetail>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
        consequatur assumenda repudiandae tenetur aspernatur nostrum similique
        temporibus illum.
      </HeroDetail>

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
