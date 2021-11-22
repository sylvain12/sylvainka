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
        <Logo src="/Logo.svg" width="50" height="50" alt="Logo" />
        <NavSocialLine />
        <NavSocialList>
          <NavSocialItem>
            <NavSocialLink href="#">
              <a>
                <GitHub />
              </a>
            </NavSocialLink>
          </NavSocialItem>
          <NavSocialItem>
            <NavSocialLink href="#">
              <a>
                <Codepen />
              </a>
            </NavSocialLink>
          </NavSocialItem>
          <NavSocialItem>
            <NavSocialLink href="#">
              <a>
                <Instagram />
              </a>
            </NavSocialLink>
          </NavSocialItem>
          <NavSocialItem>
            <NavSocialLink href="#">
              <a>
                <Twitter />
              </a>
            </NavSocialLink>
          </NavSocialItem>
          <NavSocialItem>
            <NavSocialLink href="#">
              <a>
                <LinkedIn />
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
