import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 10px;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 80px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  padding-top: 10px;
  color: #222;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  line-height:40px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: 4px solid #E8B828;
  }
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
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
          <Marginer />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
