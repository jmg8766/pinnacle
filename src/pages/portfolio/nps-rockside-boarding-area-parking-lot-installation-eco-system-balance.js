import React from "react"
import ProjectPageLayout from "../../components/ProjectPageLayout"
import { graphql } from "gatsby"

export default ({ data }) =>
  <ProjectPageLayout
    img={data.headerImg.childImageSharp.fluid}
    title="NPS Rockside Boarding Area- Parking Lot Installation & Eco System Balance"
    prev={{
      link: "/portfolio/nasa-b2-test-facility-accumulator-tank-relocation",
      title: "NASA-B2 Test Facility Accumulator Tank Relocation"
    }}
    next={{
      link: "/portfolio/gsa-potter-stewart-federal-bldg-renovation-of-judicial-rooms/",
      title: "GSA Potter-Stewart Federal Bldg. Renovation of Judicial Rooms"
    }}
  >
    <p><strong>Location:</strong> Cuyahoga Valley National Park, Independence, OH</p>
    <p><strong>Scope of Work:</strong></p>
    <p>Cuyahoga Valley National Park updated its facility to accommodate the increased utilization but also to meet sustainability goals, with special consideration to the need of the ecosystem and energy requirements. Pinnacle installed two separate parking areas to achieve the access issues while protecting the nearby water. One parking area was constructed with permeable asphalt to ensure that unfiltered water would not run off into the river or storm sewers. A stabilized turf lot was also installed for additional parking. The parking area allows for 215 cars, a bus parking area and accessible stalls.</p>
    <p>The area of the park that was under construction was surrounded by both wetlands and the Cuyahoga River. Mitigation work within sensitive areas of the vernal pools required unique effort to adhere to USACE permit conditions, vegetation protection was utilized and perforated PVC rerouted excess water from the storm sewers and river by creating a rain garden on the property. New vernal pools were created with no impact to adjacent pools. Wherever additional soil was required, Pinnacle ensured an eco-balancing soil was used.</p>
    <p>All additional work, including restrooms, boarding area platform and site electrical work was performed with special attention to minimizing any effects on the environment. Pinnacle also provided all the electrical updates including LED lighting and power lines throughout the facility. Landscape restoration includes natural plantings and selective deforestation.</p>
    <p><strong>Final Contract Amount:</strong> $1,165,402</p>
  </ProjectPageLayout>

export const query = graphql`query {
  headerImg: file(relativePath: { eq: "NPS-Rockside.jpeg" }) {
    childImageSharp {
      fluid(maxHeight: 600) { ...GatsbyImageSharpFluid_withWebp }
    }
  }
}`
