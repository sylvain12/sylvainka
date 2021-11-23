import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import {Icon} from '@iconify/react'

interface WorkCompanyProps {
  id: number,
  name: string
  type: string
  url: string
  description: string
  image: string
}

export default function WorkCompanyList({companies}: WorkCompanyProps[]) {
  return (
    <WorkComanyWrapper>
      {companies.map((company: WorkCompanyProps) => <WorkCompanyItem key="id" company={company}></WorkCompanyItem>)}
    </WorkComanyWrapper>
  )
}


function WorkCompanyItem({company}: WorkCompanyProps) {
  return (
    <StyledWorkCompanyItem>
      <WorkCompanyItemDetail>
        <small>{company.type}</small>
        <h3>{company.name}.</h3>
        <p>{company.description}</p>
      </WorkCompanyItemDetail>

      <Link href="">
        <a target="_blank">
          <Icon icon="prime:external-link" height="22" width="22" />
        </a>
      </Link>

    </StyledWorkCompanyItem>
  )
}

const WorkCompanyItemDetail = styled.div`
  position: absolute;
  left: 4rem;
  z-index: 4;
  top: 2rem;

  & small {
    font-style: italic;
    font-weight: var(--fw-medium);
    display: inline-block;
    margin-bottom: .4rem;
    font-size: 1.4rem;
    color: var(--second-color);
  }

  & h3 {
    font-size: 2rem;
    font-weight: var(--fw-medium);
    margin-bottom: 1rem;
    color: var(--main-color);
  }

  & p {
    font-size: 1.4rem;
    width: 80%;
  }
`

const StyledWorkCompanyItem = styled.div`
  width: 100%;
  height: 160px;
  background: var(--white-color);
  position: relative;
  border-radius: 5px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 95%;
    height: 95%;
    background: var(--second-color);
    transform: translate(18px, -5px) rotate(-5deg);
    border-radius: inherit;
    z-index: -1;
  }

  a {
    position: absolute;
    top: 2rem;
    right: 4rem;
    display: flex;
    align-items: center;
    color: var(--second-color);
    cursor: pointer;
    text-decoration: underline;
    font-weight: var(--fw-medium);
    z-index: 4;
  }
`

const WorkComanyWrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 20; */

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  grid-auto-flow: row;
`