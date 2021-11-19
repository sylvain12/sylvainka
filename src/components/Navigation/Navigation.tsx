import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Logo,
  Nav,
  NavContact,
  NavItem,
  NavList,
  NavSocial,
  NavSocialItem,
  NavSocialLine,
  NavSocialLink,
  NavSocialList,
} from "./Navigation.style";

import Button from "../Shared/Button";

export default function Navigation() {
  return (
    <Nav>
      <NavSocial>
        <Logo src="/Logo.svg" width="50" height="50" alt="Logo" />
        <NavSocialLine />
        <NavSocialList>
          <NavSocialItem>
            <NavSocialLink href="#">
              <a>
                <Image
                  src="/icons/social/github.svg"
                  height="22"
                  width="22"
                  alt="My Github icon"
                />
              </a>
            </NavSocialLink>
          </NavSocialItem>
          <NavSocialItem>
            <NavSocialLink href="#">
              <a>
                <Image
                  src="/icons/social/codepen.svg"
                  height="22"
                  width="22"
                  alt="My Codepen icon"
                />
              </a>
            </NavSocialLink>
          </NavSocialItem>
          <NavSocialItem>
            <NavSocialLink href="#">
              <a>
                <Image
                  src="/icons/social/instagram.svg"
                  height="22"
                  width="22"
                  alt="My Instagram icon"
                />
              </a>
            </NavSocialLink>
          </NavSocialItem>
          <NavSocialItem>
            <NavSocialLink href="#">
              <a>
                <Image
                  src="/icons/social/twitter.svg"
                  height="22"
                  width="22"
                  alt="My Twitter icon"
                />
              </a>
            </NavSocialLink>
          </NavSocialItem>
          <NavSocialItem>
            <NavSocialLink href="#">
              <a>
                <Image
                  src="/icons/social/linkedin.svg"
                  height="22"
                  width="22"
                  alt="My Linkedin icon"
                />
              </a>
            </NavSocialLink>
          </NavSocialItem>
        </NavSocialList>
      </NavSocial>

      <NavList>
        <NavItem>
          <Link href="#about">
            <a>
              {
                /* <Image
                src="/icons/user.svg"
                width="20"
                height="20"
                alt="About icon"
              /> */
              }
              <svg
                width="18"
                height="18"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              About
            </a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href="#skills">
            <a>
              <Image
                src="/icons/skills.svg"
                width="20"
                height="20"
                alt="Skills icon"
              />
              Skills
            </a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href="#work">
            <a>
              <Image
                src="/icons/work.svg"
                width="20"
                height="20"
                alt="Work icon"
              />
              Work
            </a>
          </Link>
        </NavItem>

        <NavContact>
          <Button variant="secondary">Contact</Button>
        </NavContact>
      </NavList>
    </Nav>
  );
}
