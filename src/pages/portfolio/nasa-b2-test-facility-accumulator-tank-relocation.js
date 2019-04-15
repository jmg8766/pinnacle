import React from "react"
import ProjectPageLayout from "../../components/ProjectPageLayout"
import { graphql } from "gatsby"

export default ({ data }) =>
  <ProjectPageLayout
    img={data.headerImg.childImageSharp.fluid}
    title="NASA- B2 Test Facility Accumulator Tank Relocation"
    prev={{
      title: "GSA Celebrezze Federal Bldg. Lobby Renovation",
      link: "/portfolio/gsa-celebrezze-federal-bldg-lobby-renovation/"
    }}
    next={{
      title: "NPS Rockside Boarding Area- Parking Lot Installation & Eco System Balance",
      link: "/portfolio/nps-rockside-boarding-area-parking-lot-installation-eco-system-balance/"
    }}
  >
    <p>
      <strong>Location:&nbsp;</strong>NASA GRC Plum Brook Station Facility, Sandusky, OH<br/>
      <strong>Scope of Work:</strong><br/>
      This project consisted of the re-location of five (5) existing accumulators and installing them on the new foundations near the B-2 Test facility. NASA’s Plum Brook Station’s Spacecraft Propulsion Research Facility (B-2) was designed to test full-scale rocket engines and upper stage launch vehicles at simulated high altitude conditions, both pressure and temperature. Refurbishment of the existing support saddles for two of the accumulators was performed by Pinnacle prior to installation on the new foundations.
    </p>
    <p>
      The scope of this project also included the definition, design, and construction of all site preparations required to relocate the accumulators. Each of the five (5) steel accumulators was approximately 62 feet long, 12 feet in diameter, and weighed approximately 275,000 pounds. To relocate the vessels, a temporary roadway through the woods, approximately 65’x14’ was constructed giving special considerations to the maneuverability of the massive 17 axle truck used to move each accumulator with minimal impact to the natural surroundings.
    </p>
    <p>
      <strong>Final Contract Amount:</strong> $496,000
    </p>
  </ProjectPageLayout>

export const query = graphql`query {
  headerImg: file(relativePath: { eq: "NASA-B2.jpeg" }) {
    childImageSharp {
      fluid(maxHeight: 600) { ...GatsbyImageSharpFluid_withWebp }
    }
  }
}`
