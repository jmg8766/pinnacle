import React from "react"
import ProjectPageLayout from "../../components/ProjectPageLayout"
import { graphql } from "gatsby"

export default ({ data }) =>
  <ProjectPageLayout
    img={data.headerImg.childImageSharp.fluid}
    title="USACE Access Control Point DSCC"
    prev={{
      link: "/portfolio/plum-brooks-space-power-facility/",
      title: "NASA Plum Brook Station Space Power Facility Sewage Treatment Plant"
    }}
    next={{
      link: "/portfolio/cuyahoga-valley-national-park-system/",
      title: "Cuyahoga Valley National Park System"
    }}
  >
    <p>
      USACE ACCESS CONTROL POINT DSCC (Defense Supply Center Columbus)<br/>
      <strong>TYPE OF CONSTRUCTION: </strong> New Construction, Horizontal Construction, Vertical Construction, Site-work and Utilities.<br/>
      <strong>FINAL CONTRACT VALUE: </strong> $10.5M
    </p>
    <p>
      At the Defense Supply Center in Columbus, Ohio, Pinnacle transformed 15 acres of grassy fields into a state-of-the-art main gate which serves as the sole entrance for the DSCC’s approximate 8,000 workers to pass through daily. The previous gate entrance was relocated and Pinnacle constructed a new asphalt five traffic lane entrance road into the new gate installation to handle higher volumes of traffic and minimize delays.<br/>
      The main focus of the project was to provide cutting-edge security measures while complying with anti-terrorism efforts. This involved installation of a K-12 rated barrier system, including passive barriers as well as active pop-up barriers and a high-tech communication system. In addition to securing the perimeter, three masonry buildings were constructed including blast proof masonry walls and ballistic glass, two large check-point canopies, a computerized control point system, detention pond and all related underground infrastructure. The vehicle check point included an “under vehicle” security inspection system (UVIS) installed right in the roadway, providing enhanced public safety and security for in-processing right on the spot.
    </p>
  </ProjectPageLayout>

export const query = graphql`query {
  headerImg: file(relativePath: { eq: "USACE.jpeg" }) {
    childImageSharp {
      fluid(maxHeight: 600) { ...GatsbyImageSharpFluid_withWebp }
    }
  }
}`
