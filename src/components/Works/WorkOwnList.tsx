import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import {GitHub, } from 'iconoir-react'
import { Icon } from '@iconify/react';

interface Tech {
  name: string
  url: string
}

interface WorkOwnItemProps {
  name: string
  image: ""
  description: string
  link: string
  githubLink: string
  technologies: Tech[]
}

export default function WorkOwnList({works}: WorkOwnItemProps[]) {
  return (
    <StyledWorkOwnItem>
      {works.map((work: WorkOwnItemProps) => <WorkOwnItem key={work.name} work={work} />)}
    </StyledWorkOwnItem>
  )
}

export function WorkOwnItem({work}: WorkOwnItemProps) {
  // const imageName = `${work.image}`
  return (
    <WorkOwnItemWrapper>
    
    <Image
      src={work.image}
      alt={work.name}
      height='400'
      width='600'
    />
    <WorkOwnItemDetail>
      <WorkOwnItemDetailHeader>
        <h4>{work.name}</h4>
        <div>
          <Link href="#">
            <a target="_blank">
              <GitHub height="22" width="22" />
            </a>
          </Link>

          <Link href="#">
            <a target="_blank">
              <Icon icon="radix-icons:external-link" height="22" width="22" />
            </a>
          </Link>
        </div>
      </WorkOwnItemDetailHeader>

      <WorkOwnItemDetailBody>

        <p>{work.description}</p>

        <ul>
          {work.technologies.map((tech: Tech) => (
          <li key={tech.name}>
            <Link href={tech.url}>
            <a target="_blank">
              {tech.name}
            </a>
            </Link>
          </li>
          ))}
        </ul>

      </WorkOwnItemDetailBody>

    </WorkOwnItemDetail>
  </WorkOwnItemWrapper>
  )
}

const WorkOwnItemWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    & > span {
      order: 2;
    }

    & > div {
      order: 1;
      left: 20rem;
    }
  }

  &:nth-child(even) {
    & > div {
      right: 20rem;
    }
  }

  &:not(:last-child){
    margin-bottom: 10rem;
  }

  & span{
    &::before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background: var(--main-color);
      opacity: .3;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }
`

const StyledWorkOwnItem = styled.div`
  
`

const WorkOwnItemDetail = styled.div`
  background: var(--white-color);
  padding: 2rem;
  width: 80%;
  position: relative;
  box-shadow: 0 .5rem .8rem rgba(0,0,0,.2);
  z-index: 2;
`

const WorkOwnItemDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;

  h4 {
    font-size: 2rem;
  }

  & a {
      &:not(:last-child) {
        margin-right: 1rem;
      }
  }

  & a svg {
    color: var(--main-color);
  }

  
`

const WorkOwnItemDetailBody = styled.div`
  p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  & ul {
    display: flex;
  }

  & ul li {
    &:not(:last-child) {
      margin-right: 1.2rem;
    }

    a {
      color: var(--second-color);
      text-decoration: underline;
      font-size: 1.4rem;
    }
  }
`