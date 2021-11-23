import styled from "styled-components";

export const HeroWrapper = styled.div`
  max-width: 756px;
  width: 80%auto;
  margin: 0 auto;
`;

export const HeroIntro = styled.span`
  font-size: 1.6rem;
  margin-bottom: .3rem;
  font-weight: var(--fw-medium);
  color: var(--main-color);
  display: block;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--main-color-light);
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: .5rem;
  color: var(--second-color);
`;

export const HeroSubIntro = styled.p`
font-size: 3rem;
line-height: 1.7;
`;

export const HeroName = styled.span`
  font-size: 2.2rem;
  display: inline-block;
  color: var(--main-color);
  font-weight: var(--fw-bold);
  font-family: var(--ff);
  opacity: .65;
  text-transform: uppercase;
  font-style: italic;
`;

export const HeroJob = styled.p`
  font-size: 6.5rem;
  display: inline-block;
  flex: 0;
  font-weight: var(--fw-bold);
  position: relative;
  color: var(--main-color);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 15px;
    background: var(--white-color);
    height: 1.5rem;
    width: 100%;
    z-index: -1;
    border-radius: 4px;
    box-shadow: 0 .6rem .10rem rgba(0,0,0, .2);
  }
`;

export const HeroHilight = styled.span`
  font-weight: var(--fw-bold);
  display: inline-block;
  position: relative;
  font-size: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 8px;
    z-index: -1;
    left: 0;
    bottom: 10px;
    border-radius: 4px;
    background: var(--second-color);
  }
`;

export const HeroDetail = styled.p`
  font-size: 1.6rem;
  line-height: 1.7;
  display: inline-block;
  max-width: 580px;
`;

export const HeroScroll = styled.div`
  display: block;
  font-size: 4rem;
  text-align: center;
  margin-top: 8rem;
  cursor: pointer;

  & a {
    font-weight: var(--fw-thin);
    color: var(--main-color);

    svg {
      stroke-width: .5px;
    }
  }


`;
