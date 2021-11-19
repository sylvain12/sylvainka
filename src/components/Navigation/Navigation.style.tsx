import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Logo = styled(Image)`
  
`;

export const Nav = styled.div`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: flex-start;
  
`;

export const NavList = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-top: 1rem;
  justify-content: flex-end;
  /* background: #fff; */
`;

export const NavItem = styled.div`
  
  & a {
    display: flex;
    align-items: center;
    color: var(--main-color);
    text-transform: uppercase;
    font-weight: var(--fw-medium);
  }

  & a svg {
    color: var(--second-color);
    width: 20!important;
    height: 20!important;
    margin-right: .4rem;
   
  }

  &:not(:last-child) {
    margin-right: 4rem;
  }
`;

export const NavSocial = styled.div`
  top: 4rem;
  left: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 4rem;
`;

export const NavSocialLine = styled.div`
  width: 1px;
  height: 8rem;
  background: var(--second-color);
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const NavSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavSocialItem = styled.li`
  
`;

export const NavSocialLink = styled(Link)`

  a {
    color: var(--main-color);
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }
`;

export const NavContact = styled.div`
  /* justify-self: flex-end;
  margin-left: auto; */
`;
