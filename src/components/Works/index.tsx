import React from 'react'
import { Container } from '../Shared/Container';
import Title from '../Shared/Title';
import styled from 'styled-components';
import data from '../../../public/data/works.json'
import WorkOwnList from './WorkOwnList';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'iconoir-react'
import WorkCompanyList from './WorkCompanyList';

export default function Works() {
  const ownsData = data.owns;
  const companiesData = data.companies;

  return (
    <Container>
      <div style={{textAlign:'center', marginBottom:'10rem'}}>
        <Title>Works</Title>
        <p style={{width:'500px', margin:'0 auto'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa at saepe.</p>
      </div>

    <WorksLayout>

      <WorksOwnWrapper>
       <WorkOwnList works={ownsData} />

       <WorksOwnMore>
         <Link href="#">
          <a target="_blank">
            Show more work
            <ArrowRight height="22" width="22" />
          </a>

         </Link>
       </WorksOwnMore>
      </WorksOwnWrapper>

      <WorksCompanyWrapper>
        <WorksCompanyHeader>
          <div className="company-header-title">
            <Image 
              src="/assets/work_header_title.svg"
              height="200"
              width="200"
              alt="Wokr title"
            />
          </div>


          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestias excepturi facere deleniti vero sint nam. Cupiditate itaque.</p>
        </WorksCompanyHeader>
        <WorkCompanyList companies={companiesData}/>
      </WorksCompanyWrapper>

    </WorksLayout>

    </Container>
  )
}

const WorksOwnMore = styled.div`
margin-top: 8rem;
display: flex;
justify-content: center;

  & a {
    display: flex;
    align-items: center;
    color: var(--second-color);
    font-weight: var(--fw-medium);
    text-decoration: underline;
    transition: text-decoration .2s;
    font-size: 1.8rem;

    & svg {
      transition: transform .2s;
    }

    &:hover {
      text-decoration: none;

      & svg {
        transform: translateX(4px);
      }
    }
  }
`

const WorksLayout = styled.div`
  
`

const WorksOwnWrapper = styled.div`
  margin-bottom: 8rem;
`

const WorksCompanyWrapper = styled.div`
  
`

const WorksCompanyHeader = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 5rem;

  p {
    margin-bottom: 2rem;
  }

  & span {
    left: -3rem;
  }

  & .company-header-title {
    font-style: italic;

    small {
      color: var(--second-color);
    }

    h4 {
      font-size: 4;
    }
  }
`

