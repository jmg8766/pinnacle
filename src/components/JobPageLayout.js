import React from "react"
import Styled from "styled-components"
import Layout, { StyledSection} from "./Layout"
import Img from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"
import { colors } from "../utils/presets"

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

const StyledImg = Styled(Img)`
  position: relative;
  margin: -80px;
  z-index: -1;
  opacity: 0.5;
`

const JobDescription = Styled.div`
  padding: 10px;
  max-width: 800px;
  margin: auto;
`

export default ({ title, prev, next, children }) =>
  <StaticQuery query={graphql`query {
    headerImg: file(relativePath: { eq: "pinnacle_construction_header01.png" }) {
      childImageSharp {
        fluid(maxWidth: 1366) { ...GatsbyImageSharpFluid_withWebp }
      }
    }
  }`} render={data => (
    <Layout>
      <StyledImg fluid={data.headerImg.childImageSharp.fluid} alt="industrial park"/>
      <StyledSection className="whiteBackground">
        <JobDescription>
          <h1>{title}</h1>
          {children}
        </JobDescription>
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
  )}/>
