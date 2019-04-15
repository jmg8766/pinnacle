import React from "react"
import styled from "styled-components"
import { colors } from "../utils/presets"

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const StyledFooter = styled.footer`
  background: ${colors.backgroundBlue};
  text-align: center;
  color: white;
  padding: 40px;
  & p {
    text-transform: uppercase;
    padding-top: 10px;
  }
`

const SocialMediaLinks = styled.div`
  font-size: 32px;
  & a {
    color: white;
    margin: 10px;
    background-image: none;
  }
`

export default () =>
  <StyledFooter>
    <SocialMediaLinks>
      <a href="https://www.facebook.com/Pinnacle-Construction-165785193481629/?fref=nf">
        <FaFacebook/>
      </a>
      <a href="https://www.instagram.com/pinnaclebuilds/">
        <FaInstagram/>
      </a>
      <a href="https://twitter.com/Pinnaclebuilds">
        <FaTwitter/>
      </a>
    </SocialMediaLinks>
    <p>
      5755 Granger Road, Suite 110 | Cleveland, Ohio 44131
      <br/>
      <strong>Office:</strong> 440.975.0981 · <strong>Fax:</strong> 440.975.1015
    </p>
  </StyledFooter>
