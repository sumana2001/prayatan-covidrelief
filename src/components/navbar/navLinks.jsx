import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  display: flex;
  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: 4px solid #E8B828;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="#udayfoundation">Uday Foundation</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#concernindia">Concern India</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#makingthedifference">Making the Difference</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#breatheindia">Breathe India</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#uttishtafoundation">Uttishta Foundation</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
