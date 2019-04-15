import React from "react"
import Styled from "styled-components"
import Layout, { StyledHeaderImage, StyledSection, StyledArticle } from "../components/Layout"
import { Link, graphql } from "gatsby"
import Testimonials from "../components/Testimonials"
import Img from "gatsby-image"

const ProjectContainer = Styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
  margin-bottom: 10px;
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.75);
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: .5s ease;
  }
  &:hover {
    .overlay {
      height: 100%;
    }
  }
  .text {
    p, h3 { color: white; }
    h3 {
      font-size: 1.5vw;
      @media (max-width: 1100px) { font-size: 3.0vw; }
      @media (max-width: 600px) { font-size: 4.5vw; }
    }
    p {
      font-size: 1.0vw;
      @media (max-width: 1100px) { font-size: 2.0vw; }
      @media (max-width: 600px) { font-size: 3.0vw; }
    }
    text-align: center;
    width: 95%;
    margin: auto;
    margin-top: 10px;
  }
  a {
    text-shadow: none;
  }
`

const ProjectTile = ({ img, title, description, link }) =>
  <ProjectContainer>
    <Img fluid={img} alt={title}/>
    <div className="overlay">
      <div className="text">
        <h3>{title}</h3>
        <p>
          {description}<br/>
          <Link to={link}>View Article</Link>
        </p>
      </div>
    </div>
  </ProjectContainer>


const ProjectGrid = Styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 4px;
  padding-bottom: 4px;
  background-color: white;
  .column {
    -ms-flex: 25%;
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
    ${ProjectContainer} {
      margin-top: 8px;
      vertical-align: middle;
    }
  }
  @media (max-width: 1100px) {
    .column {
      -ms-flex: 50%;
      flex: 50%;
      max-width: 50%;
    }
  }
  @media (max-width: 600px) {
    .column {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
    }
  }
`

export default ({ data }) =>
  <Layout>
    <StyledHeaderImage fluid={data.headerImg.childImageSharp.fluid}/>
    <StyledSection className="whiteBackground">
      <h1>Portfolio</h1>
      <StyledArticle>
        <p>
          Project experience, versatility, and dedication take precedence in the
          world of construction. Pinnacle Construction has been commended for
          our quality of work, compliance with performance schedules, and cost
          control through favorable performance ratings, awards, and repeat work
          from Federal and civilian clientele. Our strong past performance is
          indicative of our ability to successfully execute tasks within this
          contract on time and within budget.
        </p>
        <p>
          Pinnacle has over 15 years of past relevant task order type experience
          and current experience performing multiple concurrent task orders for
          general construction, alteration and repair of buildings, structures
          and other real property with U.S. Army, U.S. Navy, U.S. Air Force,
          NASA, GSA, NAVFAC, U.S. Department of Veteran Affairs, U.S. National
          Park Service (NPS), National Guard Bureau (NGB), U.S. Coast Guard and
          the USACE.
        </p>
        <p>
          Our past task order projects had a broad range of technical complexity
          with values ranging from $100K to over $10M. Our demonstrated
          Design-Build and Design-Bid-Build experience includes multiple award
          delivery projects such as LEED certified new construction, renovation,
          alterations, repair, additions and upgrades, heating ventilation and
          air conditioning (HVAC), electrical, mechanical, steel fabrication,
          welding, demolition, painting, earthwork, fencing and paving.
        </p>
      </StyledArticle>
    </StyledSection>
    <StyledSection className="grayBackground">
      <h1>Featured Projects</h1>
      <StyledArticle>
        <ProjectTile img={data.NASA_Sewage_Treatment_Plant.childImageSharp.fluid}
                     title="NASA Plum Brook Station Space Power Facility Sewage Treatment Plant"
                     description="At NASA Plum Brook Station Space Power Facility (SPF), Pinnacle was tasked with separating the storm and sanitary connections for the facility by demolishing the 3,200 square foot Sewage Treatment Plant and associated utilities."
                     link="/portfolio/plum-brooks-space-power-facility/"/>
        <ProjectTile img={data.NPS_Bridge.childImageSharp.fluid}
                     title="Cuyahoga Valley National Park System"
                     description="Cuyahoga Valley National Park updated its facility to accommodate increased utilization but also to meet sustainability goals, with special consideration to the needs of the ecosystem and energy requirements. Pinnacle installed two separate parking areas to achieve the access issues while protecting the nearby water."
                     link="/portfolio/cuyahoga-valley-national-park-system/"/>
      </StyledArticle>
    </StyledSection>
    <Testimonials/>
    <ProjectGrid>
      <div className="column">
        <ProjectTile img={data.NASA_main_gate.childImageSharp.fluid}
                     title="NASA Main Gate Phases I & II"
                     description="Location: Naval Support Activity, Mechanicsburg, PA Scope of Work: An existing timber frame structure, approximately 120,000 square feet in size was deconstructed. This historic structure was built in 1946. The project included timber reclamation of old growth wood with care taken to salvage the massive timber structures. The existing concrete pad, marking the footprint of… "
                     link="portfolio/nasa-main-gate-phases-i-ii/"/>
        <ProjectTile img={data.GSA_Potter.childImageSharp.fluid}
                     title="GSA Potter-Stewart Federal Bldg. Renovation of Judicial Rooms"
                     description="Project Size: 3,500 square feet Project Scope: Interior build-out of 3,500 square feet of office space including Judges’ chambers, lobbies, law libraries and clerk work areas. The remodel and modernization project included abatement, electrical, plumbing, ceiling, painting, flooring and finish carpentry work. Actual Budget: $255,000 Phasing Plan: A phasing plan was required for this project… "
                     link="/portfolio/gsa-potter-stewart-federal-bldg-renovation-of-judicial-rooms/"/>
        <ProjectTile img={data.NPS_Bridge.childImageSharp.fluid}
                     title="Cuyahoga Valley National Park System"
                     description="Cuyahoga Valley National Park updated its facility to accommodate increased utilization but also to meet sustainability goals, with special consideration to the needs of the ecosystem and energy requirements. Pinnacle installed two separate parking areas to achieve the access issues while protecting the nearby water."
                     link="/portfolio/cuyahoga-valley-national-park-system/"/>

      </div>
      <div className="column">
        <ProjectTile img={data.GSA_Celebrezze.childImageSharp.fluid}
                     title="GSA Celebrezze Federal Bldg. Lobby Renovation"
                     description="Project Size: 20,000 square feet Project Scope: The AJC Federal building had an aging metal panel ceiling, which had warped over the years. 275 panels were marked and removed from the ceiling, cleaned and straightened. The panels were reinforced with angle-irons to avoid the warping in the future. All panels were reinstalled in the same… "
                     link="/portfolio/gsa-celebrezze-federal-bldg-lobby-renovation/"/>
        <ProjectTile img={data.NASA_Sewage_Treatment_Plant.childImageSharp.fluid}
                     title="NASA Plum Brook Station Space Power Facility Sewage Treatment Plant"
                     description="At NASA Plum Brook Station Space Power Facility (SPF), Pinnacle was tasked with separating the storm and sanitary connections for the facility by demolishing the 3,200 square foot Sewage Treatment Plant and associated utilities."
                     link="/portfolio/plum-brooks-space-power-facility/"/>
        <ProjectTile img={data.NASA_SARF.childImageSharp.fluid}
                     title="NASA SaRF (Shipping & Receiving Facility)"
                     description="Project Size: 12,700 square feet Project Scope: Pinnacle constructed the 12,700 sqft Shipping and Receiving Facility (SaRF) which facilitates the receiving, documenting, screening and distributing of materials and equipment throughout Lewis Field, as well as the inspecting and sorting of incoming mail. As the final of three planned phases to Lewis Fields’ main gate security… "
                     link="/portfolio/nasa-sarf-shipping-receiving-facility/"/>
      </div>
      <div className="column">
        <ProjectTile img={data.NASA_B2.childImageSharp.fluid}
                     title="NASA-B2 Test Facility Accumulator Tank Relocation"
                     description="Location:&nbsp;NASA GRC Plum Brook Station Facility, Sandusky, OH Scope of Work: This project consisted of the re-location of five (5) existing accumulators and installing them on the new foundations near the B-2 Test facility. NASA’s Plum Brook Station’s Spacecraft Propulsion Research Facility (B-2) was designed to test full-scale rocket engines and upper stage launch vehicles…"
                     link="/portfolio/nasa-b2-test-facility-accumulator-tank-relocation"/>
        <ProjectTile img={data.NAVFAC.childImageSharp.fluid}
                     title="NAVFAC Design Deconstruction, Restoration & Retention Basin"
                     description="Location: Naval Support Activity, Mechanicsburg, PA Scope of Work: An existing timber frame structure, approximately 120,000 square feet in size was deconstructed. This historic structure was built in 1946. The project included timber reclamation of old growth wood with care taken to salvage the massive timber structures. The existing concrete pad, marking the footprint of… "
                     link="/portfolio/navfac-design-deconstruction-restoration-retention-basin/"/>

      </div>
      <div className="column">
          <ProjectTile
            img={data.NPS_Rockside.childImageSharp.fluid}
            title="NPS Rockside Boarding Area- Parking Lot Installation & Eco System Balance"
            description="Location: Cuyahoga Valley National Park, Independence, OH Scope of Work: Cuyahoga Valley National Park updated its facility to accommodate the increased utilization but also to meet sustainability goals, with special consideration to the need of the ecosystem and energy requirements. Pinnacle installed two separate parking areas… "
            link="/portfolio/nps-rockside-boarding-area-parking-lot-installation-eco-system-balance/"
          />
          <ProjectTile
            img={data.USACE.childImageSharp.fluid}
            title="USACE Access Control Point DSCC"
            description="USACE ACCESS CONTROL POINT DSCC (Defense Supply Center Columbus) TYPE OF CONSTRUCTION | New Construction, Horizontal Construction, Vertical Construction, Site-work and Utilities. FINAL CONTRACT VALUE | $10.5M At the Defense Supply Center in Columbus, Ohio, Pinnacle transformed 15 acres of grassy fields into a state-of-the-art main gate which serves as the sole entrance for the… "
            link="/portfolio/usace-access-control-point-dscc/"
          />
      </div>
    </ProjectGrid>
  </Layout>


export const query = graphql`
  fragment projectImg on File {
    childImageSharp {
      fluid(maxHeight: 600, maxWidth: 600) { ...GatsbyImageSharpFluid_withWebp }
    }
  },
  query {
    headerImg: file(relativePath: { eq: "portfoliobanner.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 899) { ...GatsbyImageSharpFluid_withWebp }
      }
    },
    NASA_B2: file(relativePath: { eq: "NASA-B2.jpeg" }) { ...projectImg },
    GSA_Potter: file(relativePath: { eq: "GSA-Potter.jpeg" }) { ...projectImg },
    GSA_Celebrezze: file(relativePath: { eq: "GSA-Celebrezze.jpeg" }) { ...projectImg },
    NAVFAC: file(relativePath: { eq: "NAVFAC.jpeg" }) { ...projectImg },
    NASA_main_gate: file(relativePath: { eq: "image001.jpg" }) { ...projectImg },
    NASA_SARF: file(relativePath: { eq: "NASA-SaRF.jpeg" }) { ...projectImg },
    NPS_Rockside: file(relativePath: { eq: "NPS-Rockside.jpeg" }) { ...projectImg },
    USACE: file(relativePath: { eq: "USACE.jpeg" }) { ...projectImg },
    NASA_Sewage_Treatment_Plant: file(relativePath: { eq: "crane.png" }) { ...projectImg },
    NPS_Bridge: file(relativePath: { eq: "bridge.png" }) { ...projectImg }
  }`
