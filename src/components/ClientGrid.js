import React from "react"
import Styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { colors } from "../utils/presets"

const StyledDiv = Styled.div`
  background-color: ${colors.gray};
  padding: 1vh 0;
  & h1 { text-align: center; }
`

const Client = Styled.div`
  background-color: white;
  margin-bottom: 8px;
`

const ClientTile = ({ link, img, alt }) =>
  <Client>
    <a href={link}>
      <Img fluid={img} alt={alt}/>
    </a>
  </Client>

const ClientGrid = Styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 8px;
  .column {
    -ms-flex: 16.66%;
    flex: 16.66%;
    max-width: 16.66%;
    padding: 0 8px;
    @media (max-width: 800px) { 
      -ms-flex: 33.33%;
      flex: 33.33%;
      max-width: 33.33%;
    }
  }
`

export default () =>
  <StaticQuery query={graphql`
    fragment fluidImage on File {
      childImageSharp { fluid(maxWidth: 300) { ...GatsbyImageSharpFluid_withWebp } }
    },
    query {
      USAF: file( relativePath: { eq: "USAF.png" }) { ...fluidImage },
      DHS: file( relativePath: { eq: "DHS.png" }) { ...fluidImage },
      DOI: file( relativePath: { eq: "DOI.png" }) { ...fluidImage },
      NAVFAC: file( relativePath: { eq: "NAVFAC.png" }) { ...fluidImage },
      VA: file( relativePath: { eq: "VA.png" }) { ...fluidImage },
      GSA: file( relativePath: { eq: "GSA.jpg" }) { ...fluidImage },
      NASA: file( relativePath: { eq: "NASA.jpg" }) { ...fluidImage },
      NPS: file( relativePath: { eq: "NPS.png" }) { ...fluidImage },
      NPS: file( relativePath: { eq: "NPS.png" }) { ...fluidImage },
      USNG: file( relativePath: { eq: "USNG.png" }) { ...fluidImage },
      USArmy: file( relativePath: { eq: "USArmy.png" }) { ...fluidImage },
      USCGR: file( relativePath: { eq: "USCGR.png" }) { ...fluidImage },
    }
  `} render={data => (
    <StyledDiv>
      <h1>Our Clients</h1>
      <ClientGrid>
        <div className="column">
          <ClientTile link="http://www.af.mil/" img={data.USAF.childImageSharp.fluid} alt="U.S. Air Force"/>
          <ClientTile link="http://www.dhs.gov/" img={data.DHS.childImageSharp.fluid} alt="Department of Homeland Security"/>
        </div>
        <div className="column">
          <ClientTile link="http://www.doi.gov/" img={data.DOI.childImageSharp.fluid} alt="Department of the Interior"/>
          <ClientTile link="http://www.gsa.gov/" img={data.GSA.childImageSharp.fluid} alt="U.S. General Services Administration"/>
        </div>
        <div className="column">
          <ClientTile link="http://navfac.navy.mil/" img={data.NAVFAC.childImageSharp.fluid} alt="Naval Facilities Engineering Command"/>
          <ClientTile link="http://www.nasa.gov/" img={data.NASA.childImageSharp.fluid} alt="National Aeronautics and Space Administration"/>
        </div>
        <div className="column">
          <ClientTile link="http://www.va.gov/" img={data.VA.childImageSharp.fluid} alt="United States Department of Veterans Affairs"/>
          <ClientTile link="http://www.nps.gov/" img={data.NPS.childImageSharp.fluid} alt="National Park Service"/>
        </div>
        <div className="column">
          <ClientTile link="http://www.nationalguard.mil/" img={data.USNG.childImageSharp.fluid} alt="National Guard"/>
          <ClientTile link="http://www.army.mil/" img={data.USArmy.childImageSharp.fluid} alt="United States Army"/>
        </div>
        <div className="column">
          <ClientTile link="http://www.uscg.mil/" img={data.USCGR.childImageSharp.fluid} alt="United States Coast Guard"/>
        </div>
      </ClientGrid>
    </StyledDiv>
  )}/>
