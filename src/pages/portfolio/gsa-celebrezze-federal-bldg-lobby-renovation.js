import React from "react"
import ProjectPageLayout from "../../components/ProjectPageLayout"

export default ({ data }) =>
  <ProjectPageLayout
    img={data.headerImg.childImageSharp.fluid}
    title="GSA Celebrezze Federal Bldg. Lobby Renovation"
    prev={{
      title: "NASA Main Gate Phases I & II",
      link: "portfolio/nasa-main-gate-phases-i-ii/"
    }}
    next={{
      title: "NASA-B2 Test Facility Accumulator Tank Relocation",
      link: "/portfolio/nasa-b2-test-facility-accumulator-tank-relocation"
    }}
  >
    <p>Project Size: 20,000 square feet</p>
    <p>Project Scope: The AJC Federal building had an aging metal panel ceiling, which had warped over the years. 275 panels were marked and removed from the ceiling, cleaned and straightened. The panels were reinforced with angle-irons to avoid the warping in the future. All panels were reinstalled in the same order as removal to ensure proper aesthetics.</p>
    <p>Electrical modifications were made to achieve a more desired lighting distribution throughout the lobby. The sprinkler system was modernized throughout the elevator hallways and heads were moved appropriately. Holes existed in the ceiling panels for the old lighting and sprinklers that were no longer necessary. Panels in storage were used to eliminate previous cut-outs, creating a seamless paneled ceiling. New cut-outs were created for new lights and sprinklers.</p>
    <p>The ceilings in the adjacent hallways were removed completely and asbestos abatement was performed from the ceiling line and up. All lighting in hallways was updated with linear aluminum panel ceilings. The ceiling between elevator columns included a new stretched fabric ceiling (tightly woven fabric with lighting behind).</p>
    <p>Actual Budget: $653,000</p>
  </ProjectPageLayout>

export const query = graphql`query {
  headerImg: file(relativePath: { eq: "GSA-Celebrezze.jpeg" }) {
    childImageSharp {
      fluid(maxHeight: 600) { ...GatsbyImageSharpFluid_withWebp }
    }
  }
}`
