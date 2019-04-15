import React from "react"
import { Link } from "gatsby"
import Styled from "styled-components"
import Img from "gatsby-image"
import Layout, { StyledSection, StyledArticle } from "./Layout"
import { colors } from "../utils/presets"

const StyledImg = Styled(Img)`
  margin-top: -80px;
  max-height: 80vh;
  z-index: -1;
  opacity: 0.8;
`

const Inner = Styled.div`
  max-width: 900px;
  margin: auto;
  strong {
    font-weight: bold;
  }
`

const NavLinks = Styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  a {
    background-color: ${colors.backgroundBlue};
    color: white;
    max-width: 30%;
    min-width: 200px;
    text-align: center;
    text-shadow: none;
    border-radius: 5px;
    padding: 1%;
    margin: 0 auto;
    :hover { background-color: ${colors.textBlue}; }
  }
`

export default ({ img, title, children, next, prev }) =>
  <Layout>
    <StyledImg fluid={img}/>
    <StyledSection className="whiteBackground">
      <Inner>
        <h1>{title}</h1>
        {children}
      </Inner>
    </StyledSection>
    <NavLinks>
        {prev && <Link to={prev.link}>
          {prev.title}<br/>«
        </Link>}
        {next && <Link to={next.link}>
          {next.title}<br/>»
        </Link>}
      </NavLinks>
  </Layout>
