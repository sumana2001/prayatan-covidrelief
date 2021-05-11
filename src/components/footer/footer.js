import React from "react";
import {
  FooterContainer,
  FooterWrap,
  WebsiteRights,
} from "./footerElement";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
            <WebsiteRights>
              <a href="https://sumana-basu.web.app/" target="_blank" style={{textDecoration:"none", color:"#fff"}}>Made with &hearts;</a>
            </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
