import React from "react"
import Styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { FaEnvelope, FaLinkedinIn } from "react-icons/fa"

const StyledOverlay =  Styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.75);
  overflow: hidden;
  width: 100%;
  height: 18%;
  transition: 0.5s ease;
`

const StyledDiv = Styled.div`
  position: relative;
  width: 90%;
  max-width: 500px;
  margin: auto;
  &:hover ${StyledOverlay} {
    height: 100%;
  }
  @media (max-width: 950px) {
    width: 85vw;
    margin: 10px auto;
  }
`

const StyledImg = Styled(Img)`
  display: block;
  width: 100%;
  height: auto;
`

const StyledText = Styled.div`
  color: white;
  text-align: center; 
  
  & h3 { color: white; }
  & a {
    text-shadow: none;
    margin: 10px;
  }
`

export default ({ name, position, link, email, linkedIn, img }) =>
  <StyledDiv>
    <StyledImg fluid={img} style={{ display: `block`, width: `100%`, height: `auto` }}/>
    <StyledOverlay>
      <StyledText>
        <h3>{name}</h3>
        <p>
          {position}
          <br/>
          <Link to={link}>Bio</Link>
        </p>
        <div>
          <a href={email} target="_blank" rel="noopener noreferrer"><FaEnvelope/></a>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
        </div>
      </StyledText>
    </StyledOverlay>
  </StyledDiv>
