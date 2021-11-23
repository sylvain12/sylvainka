import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';

interface SKillIconProps {
  icon: string
  name: string
}

export default function SkillsIcon({icons}: SKillIconProps[]) {
  return (
    <IconList>
      {icons.map(({icon, name}:SKillIconProps) => <IconListitem key={icon} icon={icon} name={name} />)}
    </IconList>
  )
}

export function IconListitem({icon, name}: SKillIconProps) {
  return (
    <StyleIconListitem>
      <Icon icon={icon}/>
      <p>{name}</p>
    </StyleIconListitem>
  )
}


const IconList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  grid-auto-flow: row;
  
`
const StyleIconListitem = styled.div`
  text-align: center;

  & p {
    font-size: 1.4rem;
  }

  & svg {
    color: var(--white-color);
    font-size: 4rem;
  }
`
