import React from 'react'
import styled from 'styled-components'
import Button from '../Shared/Button'
import { Container } from '../Shared/Container'
import Title from '../Shared/Title'
import Link from 'next/link'
import {GitHub, Twitter, LinkedIn, Codepen, Instagram} from 'iconoir-react';

export default function Contact() {
  return (
    <Container id="contact" style={{marginBottom: '3rem'}}>
      <ContactWrapper>
        <Title showBar={false} showPonctuation={false}>
          Get in touch
        </Title>
        <ContactSubTitle>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex velit, beatae quis inventore totam consectetur architecto tenetur porro sed optio adipisci tempora tempore laboriosam excepturi! Labore.
        </ContactSubTitle>


        <Button variant='primary'>
          Say Hello
        </Button>

        <ContactFooter>
          <p>
            Designed & built with ♥️ by  
            <Link href="https://github.com/sylvain12">
              <a target='_blank'>sylvain kadjo</a>
            </Link>
          </p>
          <span>software developer from 🇨🇮</span>

          {/* <ContactFooterSocialList>
            <ContactFooterSocialListItem>
              <Link href="#">
                <a target='_blank'>
                  <GitHub height="22" width="22"/>
                </a>
              </Link>
            </ContactFooterSocialListItem>

            <ContactFooterSocialListItem>
              <Link href="#">
                <a target='_blank'>
                  <Codepen height="22" width="22"/>
                </a>
              </Link>
            </ContactFooterSocialListItem>

            <ContactFooterSocialListItem>
              <Link href="#">
                <a target='_blank'>
                  <LinkedIn height="22" width="22"/>
                </a>
              </Link>
            </ContactFooterSocialListItem>

             <ContactFooterSocialListItem>
              <Link href="#">
                <a target='_blank'>
                  <Twitter height="22" width="22"/>
                </a>
              </Link>
            </ContactFooterSocialListItem>

             <ContactFooterSocialListItem>
              <Link href="#">
                <a target='_blank'>
                  <Instagram height="22" width="22"/>
                </a>
              </Link>
            </ContactFooterSocialListItem>
          </ContactFooterSocialList> */}

        </ContactFooter>
      </ContactWrapper>
    </Container>
  )
}


const ContactWrapper = styled.div`
  text-align: center;
  width: 550px;
  margin: 0 auto;
`

const ContactSubTitle = styled.p`
  margin-bottom: 5rem;
  text-align: center;
  line-height: 1.7;
  
`

const ContactFooter  = styled.div`
  margin-top: 15rem;

  & p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: .5rem;
    font-size: 1.4rem;

    a {
      margin-left: 1rem;
      text-decoration: underline;
      color: var(--main-color);
      font-weight: var(--fw-medium);
    }
  }

  & span {
    font-size: 1.3rem;
  }
`

const ContactFooterSocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContactFooterSocialListItem = styled.li`
  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  & a {
    color: var(--main-color);
  }
`