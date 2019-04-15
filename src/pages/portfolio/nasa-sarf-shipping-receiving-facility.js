import React from "react"
import ProjectPageLayout from "../../components/ProjectPageLayout"
import { graphql } from "gatsby"

export default ({ data }) =>
  <ProjectPageLayout
    img={data.headerImg.childImageSharp.fluid}
    title="NASA SaRF (Shipping & Receiving Facility)"
    prev={{
      link: "/portfolio/cuyahoga-valley-national-park-system/",
      title: "Cuyahoga Valley National Park System"
    }}
  >
    <p>Project Size: 12,700 square feet</p>
    <p>Project Scope: Pinnacle constructed the 12,700 sqft Shipping and Receiving Facility (SaRF) which facilitates the receiving, documenting, screening and distributing of materials and equipment throughout Lewis Field, as well as the inspecting and sorting of incoming mail.</p>
    <p>As the final of three planned phases to Lewis Fields’ main gate security enhancement effort, the new SaRF is located in the front perimeter of the campus and outside the main gate. This allows for a significant reduction in truck traffic through the campus and improved traffic patterns at the main gate for all vehicles entering and exiting Lewis Field.</p>
    <p>Due to the sensitive nature of NASA’s mission, a fall-out contamination room was built with a dedicated HVAC zone and sanitary system surrounded by bomb proof walls. If the emergency system was triggered, the dedicated sanitary system was designed to take over utilizing an installed 6” subservice line flowing to a wet storage tank in the parking lot. This emergency preparedness allowed for isolation of the area as the HVAC system protected the surrounding environment.</p>
    <p>
      Pinnacle helped the facility incorporate sustainability design strategies as well as energy conservation and reduction principles to achieve LEED Gold Certification. One of SaRF’s most notable features is its geothermal heating and cooling system, which helps reduce the building’s energy use by 31 percent.<br/>
      Actual Budget: $5.2 mil
    </p>
  </ProjectPageLayout>

export const query = graphql`query {
  headerImg: file(relativePath: { eq: "NASA-SaRF.jpeg" }) {
    childImageSharp {
      fluid(maxHeight: 600) { ...GatsbyImageSharpFluid_withWebp }
    }
  }
}`
