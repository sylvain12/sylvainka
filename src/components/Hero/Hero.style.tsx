import styled, {css} from "styled-components";
import { HeroJobProps } from './Hero';
import { HeroHilightProps } from './Hero';

export const HeroWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  /* width: 40% */
`;

export const HeroIntroContainer = styled.div`
  border-radius: .5em;
  display: flex;
  justify-content: space-between;
  align-items:center;
  text-align: left;
  transform: translate(0px,-25px) rotate(-2deg);
`;

export const HeroIntro = styled.span`
  font-size: 2rem;
  font-weight: var(--fw-medium);
  color: var(--main-color);
  display: block;
  display: inline-block;
`;

export const HeroTitleContainer = styled.div`
  box-shadow: 0 0 1.2rem rgba(0,0,0,.2), 0 0 3rem rgba(96, 163, 217, 0.2);
  background: var(--white-color);
  border-radius: .5em;
  position: relative;

  &::before {
    content:'';
    position: absolute;
    left: 0;
    top: 0;
    width: 99%;
    height: 95%;
    border-radius: inherit;
    background: var(--second-color);
    z-index: -1;
    transform: translate(5px,-14px) rotate(-2deg);
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--second-color);
`;

export const HeroSubIntro = styled.p`
font-size: 1.8rem;
line-height: 1.7;
width: 90%;
max-width: 650px;
margin-left: auto;
margin-right: auto;
`;

export const HeroName = styled.span`
  font-size: 3rem;
  display: inline-block;
  color: var(--main-color);
  font-weight: var(--fw-bold);
  font-family: var(--ff-variant);
  opacity: .65;
  text-transform: uppercase;
  letter-spacing: 1rem;
  display: flex;
  align-items: center;
  /* margin-left: 2rem; */
  /* font-style: italic; */
`;

export const HeroJob = styled.p`
  font-size: 5.5rem;
  display: inline-block;
  font-weight: var(--fw-bold);
  position: relative;
  color: var(--main-color);
  padding: .4rem;

  /* &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 15px;
    bottom: 0;
    background: var(--white-color);
    height: 1.5rem;
    height: 100%;
    width: 100%;
    z-index: -1; */

    /* ${({variant}: HeroJobProps) => variant === 'primary' && css`
      background: var(--main-color); */
      /* color: var(--white-color); */
    /* `} */
  /* }  */
`;

export const HeroHilight = styled.span`
  font-weight: var(--fw-bold);
  display: inline-block;
  position: relative;
  font-size: 2.2rem;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 7px;
    z-index: -1;
    left: 0;
    bottom: 10px;
    border-radius: 4px;
    background: var(--second-color);

    ${({type}: HeroHilightProps) => type==='warning' && css`
      background: #ffc107;
    `}
  }
`;

export const HeroDetail = styled.p`
  font-size: 1.6rem;
  line-height: 1.7;
  display: inline-block;
  max-width: 580px;
  width: 90%;
  line-height: 1.7;
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