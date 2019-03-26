import React from "react"
import ProjectPage from "../../components/ProjectPage"

import img from "../../images/GSA-Potter.jpeg"

export default () =>
  <ProjectPage
    img={img}
    title="GSA Potter-Stewart Federal Bldg. Renovation of Judicial Rooms"
    next={{
      link: "/portfolio/gsa-celebrezze-federal-bldg-lobby-renovation/",
      title: "GSA Celebrezze Federal Bldg. Lobby Renovation"
    }}
    prev={{
      link: "portfolio/nasa-b2-test-facility-accumulator-tank-relocation/",
      title: "NASA- B2 Test Facility Accumulator Tank Relocation"
    }}
  >
    <p>Project Size: 3,500 square feet</p>
    <p>Project Scope: Interior build-out of 3,500 square feet of office space including Judges’ chambers, lobbies, law libraries and clerk work areas. The remodel and modernization project included abatement, electrical, plumbing, ceiling, painting, flooring and finish carpentry work.</p>
    <p>Actual Budget: $255,000</p>
    <p>Phasing Plan: A phasing plan was required for this project since work had to be completed around the docket schedule. In each area which included the judge’s chambers, library, attached conference room and attorney lounges walls needed to be removed for the areas to be re-configured. For the walls that were removed 35 year old wainscoting was taken down for a master carpenter to completely refurbish. Next the framing of new areas was completed along with the electrical rough-in, dry walling and painting. The sprinkler system was renovated, and the lighting and HVAC system updated. New wood wainscoting panels were built to replicate those being refurbished matching stain and wood type. New wood panels were installed along with the refurbished panels.</p>
  </ProjectPage>
