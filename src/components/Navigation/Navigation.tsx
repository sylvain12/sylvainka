import React from "react";
import Link from "next/link";
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
import {
  Codepen,
  DoubleCheck,
  GitHub,
  GitMerge,
  Instagram,
  LinkedIn,
  Twitter,
  User,
} from "iconoir-react";

export default function Navigation() {
  return (
    <Nav>
      <NavSocial>
        <Link href="/">
          <a href="">
            <Logo src="/Logo.svg" width="50" height="50" alt="Logo" />
          </a>
        </Link>
        
        <NavSocialList>
          <NavSocialLine />
          <NavSocialItem>
            <NavSocialLink href="https://github.com/sylvain12">
              <a target="_blank">
                <GitHub />
              </a>
            </NavSocialLink>
          </NavSocialItem>
          <NavSocialItem>
            <NavSocialLink href="https://codepen.io/sylvain12">
              <a target="_blank">
                <Codepen />
              </a>
            </NavSocialLink>
          </NavSocialItem>
          <NavSocialItem>
            <NavSocialLink href="https://www.linkedin.com/in/sylvain-kadjo-374a4911b/">
              <a target="_blank">
                <LinkedIn />
              </a>
            </NavSocialLink>
          </NavSocialItem>
          <NavSocialItem>
            <NavSocialLink href="https://twitter.com/sylvainka12">
              <a target="_blank">
                <Twitter />
              </a>
            </NavSocialLink>
          </NavSocialItem>
          <NavSocialItem>
            <NavSocialLink href="https://www.instagram.com/sylainka12/">
              <a target="_blank">
                <Instagram />
              </a>
            </NavSocialLink>
          </NavSocialItem>
        </NavSocialList>
      </NavSocial>

      <NavList>
        <NavItem>
          <Link href="#about">
            <a>
              <User />
              About
            </a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href="#skills">
            <a>
              <DoubleCheck />
              Skills
            </a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href="#work">
            <a>
              <GitMerge />
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
