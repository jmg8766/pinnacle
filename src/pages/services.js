import React from 'react'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Testimonials from "../components/Testimonials"
import CompanySnapshot from "../components/companySnapshot"

const ServiceTile = ({img, text}) =>
  <div className="column3" style={{
    position: `relative`,
    fontWeight: `bold`,
    textAlign: `center`,
    padding: `1vw`,
  }}>
    <Img fixed={img} alt="" style={{height: `333px`, width: `333px` }}/>
    <div style={{ position: `absolute`, top: `1vw`, width: `333px` }}>
      <h3 style={{ fontSize: `25px`, color: `white` }}>{text}</h3>
    </div>
  </div>

const ContractVehicle = ({id, link, img, alt}) =>
  <li style={{ display: `inline`, padding: `10px` }}>
    <a href={link}>
      <Img fixed={img} alt={alt}/>
    </a>
  </li>

export default ({ data }) =>
  <Layout img={data.banner.childImageSharp.fluid} title="Services">
    <div className="row" style={{ maxWidth: `1200px`, margin: `auto` }}>
      <ServiceTile img={data.multiAwardContracts.childImageSharp.fixed} text="Multi-Award Contracts"/>
      <ServiceTile  img={data.constructionManagement.childImageSharp.fixed} text="Construction Management"/>
      <ServiceTile img={data.designBuild.childImageSharp.fixed} text="Design / Build"/>
    </div>
    <div style={{ backgroundColor: `#d3d3d3`, textAlign: `center` }}>
      <h3>Contract Vehicles</h3>
      <ul style={{ maxWidth: `1000px`, width: `70%`, margin: `auto`, padding: `20px` }}>
        <ContractVehicle img={data.usng.childImageSharp.fixed} link="http://www.nationalguard.mil/" alt="National Guard"/>
        <ContractVehicle img={data.nasa.childImageSharp.fixed} link="http://www.nasa.gov/" alt="National Aeronautics and Space Administration"/>
        <ContractVehicle img={data.gsa.childImageSharp.fixed} link="http://www.gsa.gov/" alt="U.S. General Services Administration"/>
      </ul>
    </div>
    <Testimonials/>
    <div style={{ textAlign: `center` }}>
      <h3>Company Snapshot</h3>
      <div style={{ width: `50%`, maxWidth: `500px`, margin: `auto` }}>
        <CompanySnapshot/>
      </div>
    </div>
  </Layout>

export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(height: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "servicesbanner.jpeg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 500, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    multiAwardContracts: file(relativePath: { eq: "glenn_research_center.png" }) {
      childImageSharp {
        fixed(height: 333, width: 333, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    constructionManagement: file(relativePath: { eq: "hardhats.jpg" }) {
      childImageSharp {
        fixed(height: 333, width: 333, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    designBuild: file(relativePath: { eq: "blueprints.jpg" }) {
      childImageSharp {
        fixed(height: 333, width: 333, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    usng: file(relativePath: { eq: "USNG.png" }) {
      ...fixedImage
    }
    nasa: file(relativePath: { eq: "NASA.png" }) {
      ...fixedImage
    }
    gsa: file(relativePath: { eq: "GSA.jpg" }) {
      ...fixedImage
    }
  }
`
