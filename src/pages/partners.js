import React from "react"
import Layout, { StyledHeaderImage, StyledSection } from "../components/Layout"
import { graphql } from "gatsby"
import Testimonials from "../components/Testimonials"

export default ({ data }) =>
  <Layout>
    <StyledHeaderImage fluid={data.headerImg.childImageSharp.fluid} style={{ position: `relative` }}/>
    <StyledSection className="whiteBackground">
      <h1>Partners</h1>
      <p>
        With our significant experience in Design-Build construction work,
        Pinnacle clearly understands that “TEAMWORK” is important to the
        success of a project. Pinnacle builds a collaborative relationship on
        all of our projects. On each of our projects, we provide a team of
        experienced professionals who work with the entire Client team to
        provide the solutions for a successful Design-Build project.
        Understanding the challenges facing all team members will develop the
        foundations of our management plan. We prioritize the critical
        responsibilities of each Team member and develop a clear outline and
        understanding of these activities.
      </p>
    </StyledSection>
    <Testimonials/>
  </Layout>

export const query = graphql`
  query {
    headerImg: file(relativePath: { eq: "partnersbanner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1366) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
