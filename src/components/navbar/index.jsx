import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { DeviceSize } from "../responsive";

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  font-size: 1rem;
  top: 0;
  z-index: 10;
  background:transparent;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const LeftSection = styled.div`
  display: flex;
  float:left;
  justify-content:left;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.tablet });
  
  return (
    <NavbarContainer>
      <LeftSection>
        <h3 style={{color:"#000"}}>Prayatan - Ek Awaaz</h3>
      </LeftSection>
    </NavbarContainer>
  );
}
