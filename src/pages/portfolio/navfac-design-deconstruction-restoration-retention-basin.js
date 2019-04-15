import React from "react"
import ProjectPageLayout from "../../components/ProjectPageLayout"
import { graphql } from "gatsby"

export default ({ data }) =>
  <ProjectPageLayout
    img={data.headerImg.childImageSharp.fluid}
    title="NAVFAC Design Deconstruction, Restoration & Retention Basin"
    prev={{
      link: "/portfolio/plum-brooks-space-power-facility/",
      title: "NASA Plum Brook Station Space Power Facility Sewage Treatment Plant"
    }}
    next={{
      link: "/portfolio/usace-access-control-point-dscc/",
      title: "USACE Access Control Point DSCC"
    }}
  >
    <p><strong>Location:</strong> Naval Support Activity, Mechanicsburg, PA</p>
    <p>
      <strong>Scope of Work:</strong><br/>
      An existing timber frame structure, approximately 120,000 square feet in size was deconstructed. This historic structure was built in 1946. The project included timber reclamation of old growth wood with care taken to salvage the massive timber structures. The existing concrete pad, marking the footprint of the structure, was demolished and removed. Asbestos abatement was necessary and was performed prior to any deconstruction efforts.
    </p>
    <p>A bio-retention pond was designed and constructed to reduce run-off and improve water quality. The pond is 120,000 square feet in size and 8 fee deep. Run-off from this area and four (4) additional buildings has been redirected to the pond. The pond is filled with 12,000 cubic yards of bio media (dirt/mulch) which act as a natural filtration to an underground storm water piping system.</p>
    <p>Over 250 trees and shrubs were planted for filtration and beautification. All vegetation was native to Pennsylvania. Landscape, seed, mulch, sidewalks and curbs were installed and the area was restored to a natural park-like setting.</p>
    <p>Additionally, this project included a full lighting replacement in Building 112 and a complete interior renovation and office upgrades in Building 113. Building 113 was originally an empty 120,000 square foot warehouse.</p>
    <p><strong>Final Contract Amount:</strong> $3.4 mil</p>
  </ProjectPageLayout>

export const query = graphql`query {
  headerImg: file(relativePath: { eq: "NAVFAC.jpeg" }) {
    childImageSharp {
      fluid(maxHeight: 600) { ...GatsbyImageSharpFluid_withWebp }
    }
  }
}`
