import React from "react"
import { graphql } from "gatsby"
import ProjectPageLayout from "../../components/ProjectPageLayout"

export default ({ data }) =>
  <ProjectPageLayout
    img={data.headerImg.childImageSharp.fluid}
    title="NASA Plum Brook Station Power Facility Sewage Treatment Plant"
    prev={{
      link: "/portfolio/gsa-potter-stewart-federal-bldg-renovation-of-judicial-rooms/",
      title: "GSA Potter-Stewart Federal Bldg. Renovation of Judicial Rooms"
    }}
    next={{
      link: "/portfolio/navfac-design-deconstruction-restoration-retention-basin/",
      title: "NAVFAC Design Deconstruction, Restoration & Retention Basin"
    }}
  >
    <p>
      <strong>Type of Construction: </strong> Horizontal Construction<br/>
      <strong>Final Contract Value: </strong> $1 M<br/>
    </p>
    <p>
      At NASA Plum Brook Station Space Power Facility (SPF), Pinnacle was tasked
      with separating the storm and sanitary connections for the facility by
      demolishing the 3,200 square foot Sewage Treatment Plant and associated
      utilities.  A new grinder pump station, 5,900 linear feet of PVC
      underground piping, manholes and sanitary sewer force main were installed.
      While excavating to a depth of 21 feet, the discovery of rock required
      Pinnacle to jackhammer through 10 feet of rock and shale in order to
      install new storm basins and pumps to clean the storm drains. Bulkhead was
      installed at the storm inlets to separate the storm and sanitary systems
      and restoration was completed with new asphalt and lawn seeding.
    </p>
  </ProjectPageLayout>

export const query = graphql`query {
  headerImg: file(relativePath: { eq: "crane.png" }) {
    childImageSharp {
      fluid(maxHeight: 599) { ...GatsbyImageSharpFluid_withWebp }
    }
  }
}`
