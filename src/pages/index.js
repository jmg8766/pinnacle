import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Image = styled(Img)`
  position: relative;
  top: -80px;
  height: 100vh;
  margin-bottom: -100vh;
  z-index: -1;
  opacity: 0.5;
`

const StyledSection = styled.section`
  text-align: center;
  height: calc(80vh - 80px);
`

const StyledDiv = styled.div`
  margin: 20vh auto;
  padding: 0 20px;
  max-width: 1024px;
  min-width: 300px;
`

const StyledH1 = styled.h1`
  color: white;
  font-size: 60px;
`

const StyledH3 = styled.h3`
  color: white;
`

export default ({ data }) =>
  <Layout>
    <Image fluid={data.headerImg.childImageSharp.fluid} alt="crane"/>
    <StyledSection>
      <StyledDiv>
        <StyledH1>Pinnacle Construction & Development Group, Inc</StyledH1>
        <StyledH3>we're experts in the unusual</StyledH3>
      </StyledDiv>
    </StyledSection>
  </Layout>

export const query = graphql`
  query {
    headerImg: file(relativePath: { eq: "crane.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
