import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Logo = styled(Image)`
  
`;

// Navbar
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
    font-size: 1.6rem;
    position: relative;
    transition: opacity .2s;

  }

  & a::before {
    content: '';
    position: absolute;
    bottom: -.5rem;
    right: 0;
    height: 3px;
    width: 0;
    background: var(--second-color);
    transition: width .2s;
  }

  & a:hover  {
    opacity: .5;

    &::before{
      width: 2rem;
    }
  }

  & a svg {
    color: var(--second-color);
    width: 20;
    height: 20;
    margin-right: 1rem;
  }

  &:not(:last-child) {
    margin-right: 4rem;
  }
`;
// End

// Social style
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
  position: fixed;
  top: 50%;
  left: 4rem;
  transform: translateY(-50%);
`;

export const NavSocialItem = styled.li`

  & a {
    color: var(--main-color);

    svg {
      color: var(--main-color);
      height: 22;
      width: 22;
    }
  }

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  
`;

export const NavSocialLink = styled(Link)`

  a {
    color: var(--main-color);
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }
`;

// END

// Contact style
export const NavContact = styled.div`
  /* justify-self: flex-end;
  margin-left: auto; */
`;
// END
