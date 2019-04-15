import React from "react"
import Styled from "styled-components"
import Img from "gatsby-image"
import Layout, { StyledHeaderImage, StyledSection, StyledArticle} from "../components/Layout"
import { StaticQuery, graphql } from "gatsby"
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa"
import { colors } from "../utils/presets"

const StyledImg = Styled(Img)`
  margin-top: -80px;
  max-height: 80vh;
  z-index: -1;
  opacity: 0.8;
`
const Content = Styled.div`
  h4, .socialMedia { text-align: center; }
  .socialMedia {
    font-size: 32px;
    a { 
      padding: 5px; 
      color: ${colors.backgroundBlue};
      :hover { color: ${colors.textBlue}; }
    }
  }
  .row {
    width: 90%;
    margin: auto;
    margin-top: 20px;
  }
  .right { float: right; }
  .left {
    padding: 1%;
  }
  .right {
    width: 30%;
    min-width: 300px;
    padding: 1%;
    margin: 1%;
    background-color: ${colors.gray};
    p {
      text-align: center;
      padding: 10px;
      .quote { font-weight: bold; }
    }
    @media (max-width: 800px) {
      width: 100%;
      padding: 5%;
      margin-bottom: 5vw;
    }
  }
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
`
export default ({ name, position, email, linkedIn, img, testimonial, children }) =>
  <StaticQuery
    query={graphql`query {
        headerImg: file(relativePath: { eq: "glenn_research_center.png" }) {
          childImageSharp {
            fluid(maxWidth: 1366) { ...GatsbyImageSharpFluid_withWebp }
          }
        }
      }`} render={data => (
      <Layout>
        <StyledImg fluid={data.headerImg.childImageSharp.fluid}/>
        <StyledSection className="whiteBackground">
          <Content>
            <h1>{name}</h1>
            <h4>{position}</h4>
            <div className="socialMedia">
              <a href={email} target="_blank" rel="noopener noreferrer"><FaEnvelope/></a>
              <a href={linkedIn} target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
            </div>
            <div className="row">
              <div className="right">
                <Img fluid={img} alt={name}/>
                <p>
                  <span className="quote">
                    {testimonial.quote}<br/>
                  </span>
                  <span>{testimonial.client}</span>
                </p>
              </div>
              <div className="left">{children}</div>
            </div>
          </Content>
        </StyledSection>
      </Layout>
    )}
  />
