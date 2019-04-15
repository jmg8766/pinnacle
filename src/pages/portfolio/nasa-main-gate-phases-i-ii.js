import React from "react"
import ProjectPageLayout from "../../components/ProjectPageLayout"
import { graphql } from "gatsby"

export default ({ data }) =>
  <ProjectPageLayout
    img={data.headerImg.childImageSharp.fluid}
    title="NASA Main Gate Phases I &II"
    next={{
      title: "GSA Celebrezze Federal Bldg. Lobby Renovation",
      link: "/portfolio/gsa-celebrezze-federal-bldg-lobby-renovation/"
    }}
  >
    <p>Project Size: 2,500 square feet</p>
    <p>Actual Budget: $7.5 mil</p>
    <p>Project Scope: Main Gate Phase I: Phase I involved site modification and preparation for a new main gate including demolition of guard houses and utilities. The project included infrastructure improvement, demolition, excavation, grading, compaction, extended storm, sanitary &amp; gas, 2” force main sanitary line installation, site preparation, 10” roadway, curbs &amp; gutters, asphalt paving, concrete paving, K-12 rated fencing, topsoil &amp; seeding and landscaping.</p>
    <p>Main Gate Phase II: The main gate project involved changes to address Homeland Security requirements. It included major roadway and traffic pattern changes for any vehicles which access NASA GRC. Main Gate Phase II encompassed the demolition of the existing security station, construction of a new 2,700 SF security building and two inspection stations. To achieve Anti-Terrorism (AT) requirements, two K-12 security barriers were also installed. This included major roadway, signal installation and traffic pattern changes for all access to the center.</p>
    <p>The project included excavation, grading, compaction, underground utilities, curb &amp; gutter, asphalt paving, concrete paving, sidewalks, handicap ramps, exterior lighting, pop-up barriers, K-12 rated fencing, new roadway installation for truck loop (10” concrete), extended storm, sanitary and gas, 2” force main sanitary line installation and landscaping the entire front entrance.</p>
    <p>This project was designed, registered and certified to a LEED Gold standard by the United States Green Building Council (USGBC). The credits achieved in the certification include 95% diversion of construction waste, 20% Regional Materials, 20% Recycled Content, and 95% use of FSC certified wood.</p>
  </ProjectPageLayout>

export const query = graphql`query {
  headerImg: file(relativePath: { eq: "image001.jpg" }) {
    childImageSharp {
      fluid(maxHeight: 899) { ...GatsbyImageSharpFluid_withWebp }
    }
  }
}`
