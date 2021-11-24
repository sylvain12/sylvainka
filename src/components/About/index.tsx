import React from "react";
import styled from "styled-components";
import { Container } from "../Shared/Container";
import Title from "../Shared/Title";
import Image from "next/image";
import { Code, NavArrowRight } from "iconoir-react";

export default function About() {
  return (
    <Container id="about">
      <AboutLayout>
        <AboutWrapper className="left">
          <div
            style={{
              position: "relative",
              width: "20rem",
              height: "20rem",
              marginBottom: "3.2rem",
            }}
          >
            <Image
              alt="My picture"
              src="/assets/profile.jpg"
              width="200"
              height="200"
            />
            <AboutImageBG></AboutImageBG>
          </div>

          <AboutLanguageList>
            <AboutLanguageListItem>
              <Code height="22" width="22" /> Languages
            </AboutLanguageListItem>

            <AboutLanguageListItem>
              <NavArrowRight height="22" width="22" /> Python
            </AboutLanguageListItem>

            <AboutLanguageListItem>
              <NavArrowRight height="22" width="22" /> JavqScript
            </AboutLanguageListItem>

            <AboutLanguageListItem>
              <NavArrowRight height="22" width="22" /> HTML / CSS
            </AboutLanguageListItem>
          </AboutLanguageList>
        </AboutWrapper>

        <Title barPosition="left">About me</Title>

        <AboutWrapper className="right">
          <AboutDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            doloremque praesentium accusamus, voluptates est corporis unde
            nostrum consequuntur autem magnam inventore repudiandae fugit
            mollitia, quia, enim ullam voluptatibus fugiat voluptatum!
          </AboutDescription>

          <AboutDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, quaerat?
             quas quibusdam ad tempora fugit sit facere adipisci pariatur, itaque
            ab vel aperiam incidunt totam?
          </AboutDescription>

          <AboutDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut officia
            quas quibusdam ad tempora fugit sit facere adipisci pariatur, itaque
            ab vel aperiam incidunt totam?
            quas quibusdam ad tempora fugit sit facere adipisci pariatur, itaque
            ab vel aperiam incidunt totam?
             quas quibusdam ad tempora fugit sit facere adipisci pariatur, itaque
            ab vel aperiam incidunt totam?
          </AboutDescription>
        </AboutWrapper>
      </AboutLayout>
    </Container>
  );
}

const AboutLayout = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: max-content 1fr;
  column-gap: 4rem;
  justify-content: center;

  & h3 {
    grid-column: 2/ -1;
    grid-row: 1 / 2;
  }
`;

const AboutImageBG = styled.div`
  background: var(--white-color);
  width: 95%;
  height: 95%;
  transform: translate(10px, -5px) rotate(-7deg);
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
  z-index: 2;
`;

const AboutWrapper = styled.div`

  &.left {
    grid-column: 1 / 2;
    grid-row: 2 / -1;
  }

  &.left span {
    border-radius: 5px;
    position: relative;
    z-index: 3;
  }

  &.right {
    grid-column: 2 / -1;
    grid-row: 2 / -1;
  }
  
`;

const AboutLanguageList = styled.ul`
  
`;

const AboutLanguageListItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: var(--fw-medium);

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:nth-child(1) {
    margin-bottom: 2rem;
    font-weight: var(--fw-light);
    text-transform: uppercase;
  }

  & svg {
    color: var(--second-color);
    margin-right: 1rem;
  }
`;

const AboutDescription = styled.p`
  line-height: 1.8;
  text-align: justify;
  &:not(:last-child) {
    margin-bottom: 2.2rem;
  }
`;
