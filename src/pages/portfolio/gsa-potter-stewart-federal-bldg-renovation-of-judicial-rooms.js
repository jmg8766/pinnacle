import React from "react"
import ProjectPageLayout from "../../components/ProjectPageLayout"
import { graphql } from "gatsby"

export default ({ data }) =>
  <ProjectPageLayout
    img={data.headerImg.childImageSharp.fluid}
    title="GSA Potter-Stewart Federal Bldg. Renovation of Judicial Rooms"
    prev={{
      link: "/portfolio/nps-rockside-boarding-area-parking-lot-installation-eco-system-balance/",
      title: "NPS Rockside Boarding Area- Parking Lot Installation & Eco System Balance"
    }}
    next={{
      link: "/portfolio/plum-brooks-space-power-facility/",
      title: "NASA Plum Brook Station Space Power Facility Sewage Treatment Plant"
    }}
  >
    <p>Project Size: 3,500 square feet</p>
    <p>
      Project Scope: Interior build-out of 3,500 square feet of office space
      including Judges’ chambers, lobbies, law libraries and clerk work areas.
      The remodel and modernization project included abatement, electrical,
      plumbing, ceiling, painting, flooring and finish carpentry work.
    </p>
    <p>Actual Budget: $255,000</p>
    <p>
      Phasing Plan: A phasing plan was required for this project since work had
      to be completed around the docket schedule. In each area which included
      the judge’s chambers, library, attached conference room and attorney
      lounges walls needed to be removed for the areas to be re-configured. For
      the walls that were removed 35 year old wainscoting was taken down for a
      master carpenter to completely refurbish. Next the framing of new areas
      was completed along with the electrical rough-in, dry walling and
      painting. The sprinkler system was renovated, and the lighting and HVAC
      system updated. New wood wainscoting panels were built to replicate those
      being refurbished matching stain and wood type. New wood panels were
      installed along with the refurbished panels.
    </p>
  </ProjectPageLayout>

export const query = graphql`query {
  headerImg: file(relativePath: { eq: "GSA-Potter.jpeg" }) {
    childImageSharp {
      fluid(maxHeight: 600) { ...GatsbyImageSharpFluid_withWebp }
    }
  }
}`
