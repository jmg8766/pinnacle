import React from "react"
import ProjectPageLayout from "../../components/ProjectPageLayout"
import { graphql } from "gatsby"

export default ({ data }) =>
  <ProjectPageLayout
    img={data.headerImg.childImageSharp.fluid}
    title="Cuyahoga Valley National Park System"
    prev={{
      link: "/portfolio/usace-access-control-point-dscc/",
      title: "USACE Access Control Point DSCC"
    }}
    next={{
      link: "/portfolio/nasa-sarf-shipping-receiving-facility/",
      title: "NASA SaRF (Shipping & Receiving Facility)"
    }}
  >
    <p>
      Cuyahoga Valley National Park System Rockside Boarding Area<br/>
      <strong>Type of Construction: </strong> Horizontal &amp; Vertical Construction<br/>
      <strong>Final Contract Value: </strong> $1.1 M<br/>
    </p>
    <p>
      Cuyahoga Valley National Park updated its facility to accommodate increased utilization but also to meet sustainability goals, with special consideration to the needs of the ecosystem and energy requirements. Pinnacle installed two separate parking areas to achieve the access issues while protecting the nearby water. One parking area was constructed with permeable asphalt to ensure that unfiltered water would not run off into the river or storm sewers. A stabilized turf lot was also installed for additional parking. The parking area allows for 215 cars, a bus parking area and accessible stalls.
    </p>
    <p>
      The area of the park that was under construction was surrounded by both wetlands and the Cuyahoga River. Mitigation work within sensitive areas of vernal pools required unique effort to adhere to USACE permit conditions, vegetation protection was utilized and perforated PVC rerouted excess water from the storm sewers and river by creating a rain garden on the property. New vernal pools were created with no impact to adjacent pools.  Wherever additional soil was required, Pinnacle ensured an eco-balancing soil was used.
    </p>
    <p>
      All additional work, including restrooms, boarding area platform and site electrical work was performed with special attention to minimizing any effects on the environment.  Pinnacle also provided all the electrical updates including LED lighting and power lines throughout the facility. Landscape restoration includes natural plantings and selective deforestation.
    </p>
  </ProjectPageLayout>

export const query = graphql`query {
  headerImg: file(relativePath: { eq: "bridge.png" }) {
    childImageSharp {
      fluid(maxHeight: 600) { ...GatsbyImageSharpFluid_withWebp }
    }
  }
}`
