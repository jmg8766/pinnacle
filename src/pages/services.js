import React from "react"
import Styled from "styled-components"
import Layout, { StyledSection, StyledHeaderImage } from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImg from "gatsby-background-image"
import Testimonials from "../components/Testimonials"
import CompanySnapshot from "../components/CompanySnapshot"

const StyledBackgroundImg = Styled(BackgroundImg)`
  display: inline-block;
  width: 333px;
  height: 333px;
  margin: 10px;
  & h2 {
    color: white;
    text-align: center;
  }
`

const ServiceTiles = Styled.ul`
  text-align: center;
  margin: auto;
  & li {
    display: inline;
  }
`

const ServiceTile = ({ img, text }) =>
  <li>
    <StyledBackgroundImg fixed={img}>
      <h2>{text}</h2>
    </StyledBackgroundImg>
  </li>

const ContractVehicles = Styled.ul`
  text-align: center;
  margin: 10px auto;
  & li {
    display: inline;
    padding: 10px;
  }
`

const ContractVehicle = ({ img, link, alt }) =>
  <li>
    <a href={link}>
      <Img fixed={img} alt={alt}/>
    </a>
  </li>

const StyledDiv = Styled.div`
  max-width: 800px;
  margin: auto;
`
export default ({ data }) =>
  <Layout>
    <StyledHeaderImage fluid={data.headerImg.childImageSharp.fluid} style={{ position: `relative` }}/>
    <StyledSection className="whiteBackground">
      <h1>Services</h1>
      <ServiceTiles>
        <ServiceTile img={data.multiAwardContracts.childImageSharp.fixed} text="Multi-Award Contracts"/>
        <ServiceTile img={data.constructionManagement.childImageSharp.fixed} text="Construction Management"/>
        <ServiceTile img={data.designBuild.childImageSharp.fixed} text="Design / Build"/>
      </ServiceTiles>
    </StyledSection>
    <StyledSection className="grayBackground">
      <h1>Contract Vehicles</h1>
      <ContractVehicles>
        <ContractVehicle img={data.USNG.childImageSharp.fixed} link="http://www.nationalguard.mil/" alt="National Guard"/>
        <ContractVehicle img={data.NASA.childImageSharp.fixed} link="http://www.nasa.gov/" alt="National Aeronautics and Space Administration"/>
        <ContractVehicle img={data.GSA.childImageSharp.fixed} link="http://www.gsa.gov/" alt="U.S. General Services Administration"/>
      </ContractVehicles>
    </StyledSection>
    <Testimonials/>
    <StyledSection className="whiteBackground">
      <StyledDiv>
        <h1>Company Snapshot</h1>
        <CompanySnapshot/>
      </StyledDiv>
    </StyledSection>
  </Layout>

export const query = graphql`
  fragment smallFixed on File {
    childImageSharp {
      fixed(height: 150) { ...GatsbyImageSharpFixed_withWebp }
    }
  },
  fragment bigFixed on File {
    childImageSharp {
      fixed(height: 333, width: 333) { ...GatsbyImageSharpFixed_withWebp }
    }
  },
  query {
    headerImg: file(relativePath: { eq: "servicesbanner.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1240, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    multiAwardContracts: file(relativePath: { eq: "glenn_research_center.png" }) { ...bigFixed },
    constructionManagement: file(relativePath: { eq: "hardhats.jpg" }) { ...bigFixed },
    designBuild: file(relativePath: { eq: "blueprints.jpg" }) { ...bigFixed },
    USNG: file(relativePath: {eq: "USNG.png" }) { ...smallFixed },
    NASA: file(relativePath: {eq: "NASA.jpg" }) { ...smallFixed },
    GSA: file(relativePath: {eq: "GSA.jpg" }) { ...smallFixed }
  }
`
