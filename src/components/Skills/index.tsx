import React from 'react'
import { Icon } from '@iconify/react';
import { Container } from '../Shared/Container';
import styled from 'styled-components';
import SkillsIcon from './SkillsIcon'
import data from '../../../public/data/skills.json'
import Title from '../Shared/Title';



export default function Skills() {
  const {programing, tools, design, dataScience} = data
  return (
    <Container id="skills">
      <div style={{marginBottom:"8rem", textAlign:'center'}}>
        <Title>My Skills</Title>
        <p style={{width: '450px', margin: '0 auto'}}>The skills, tools and technologies I use to bring your products to life</p>
      </div>

      <SkillsLayout>
      <SkillsContent>
        <SkillsItem>
          <SkillsItemTitle>
            <svg width="110" height="12" viewBox="0 0 110 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="5.14099" x2="98.7179" y2="5.14099" stroke="#60A3D9"/>
              <circle cx="104.359" cy="5.64103" r="5.64103" fill="#60A3D9"/>
            </svg>
            Programming language
          </SkillsItemTitle>

          <SkillsIcon icons={programing} />
        </SkillsItem>

        <SkillsItem>
          <SkillsItemTitle>
            <svg width="110" height="12" viewBox="0 0 110 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="5.14099" x2="98.7179" y2="5.14099" stroke="#60A3D9"/>
              <circle cx="104.359" cy="5.64103" r="5.64103" fill="#60A3D9"/>
            </svg>
            Framework / Library / CMS / Tool
          </SkillsItemTitle>

          <SkillsIcon icons={tools} />
        </SkillsItem>
      </SkillsContent>

      <SkillsSeparator>
        <svg width="29" height="520" viewBox="0 0 29 520" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="14.5" y1="27" x2="14.5" y2="491" stroke="#60A3D9"/>
          <rect x="14.3848" y="491.707" width="19" height="19" transform="rotate(45 14.3848 491.707)" stroke="#60A3D9"/>
          <rect x="14.3848" y="0.707107" width="19" height="19" transform="rotate(45 14.3848 0.707107)" stroke="#60A3D9"/>
        </svg>
      </SkillsSeparator>

      <SkillsContent>
        <SkillsItem>
          <SkillsItemTitle>
            <svg width="110" height="12" viewBox="0 0 110 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="5.14099" x2="98.7179" y2="5.14099" stroke="#60A3D9"/>
              <circle cx="104.359" cy="5.64103" r="5.64103" fill="#60A3D9"/>
            </svg>

            UI / UX Design
          </SkillsItemTitle>

          <SkillsIcon icons={design} />
        </SkillsItem>

        <SkillsItem>
          <SkillsItemTitle>
            <svg width="110" height="12" viewBox="0 0 110 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="5.14099" x2="98.7179" y2="5.14099" stroke="#60A3D9"/>
              <circle cx="104.359" cy="5.64103" r="5.64103" fill="#60A3D9"/>
            </svg>
            Data Science
          </SkillsItemTitle>

          <SkillsIcon icons={dataScience} />
        </SkillsItem>
      </SkillsContent>
      </SkillsLayout>
    </Container>
  )
}

const SkillsLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SkillsContent = styled.div`
  
`

const SkillsItem = styled.div`

  &:nth-child(odd) {
    margin-bottom: 4rem;
  }
  
`

const SkillsItemTitle = styled.p`
  margin-bottom: 2rem;

  & svg {
    margin-right: 1.3rem;
  }
  
`

const SkillsSeparator = styled.div`
  
`
