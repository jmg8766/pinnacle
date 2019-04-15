import React from "react"
import Styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { colors } from "../utils/presets"

import { FaChevronRight, FaChevronLeft } from "react-icons/fa"

const quotes = [
  {"quote": `"The site experienced challenges with severe temperatures and flooding, but [Pinnacle] worked efficiently and safely while remaining sensitive to the area."`, "client": `-NPS`},
  {"quote": `"Pinnacle Construction is continually a leader in problem solving and always provides solid recommendations and suggestions."`, "client": `-GSA`},
  {"quote": `"Pinnacle is a very accommodating contractor and is always willing to work with the government, not against it."`, "client": `-NASA`},
  {"quote": `"Pinnacle knows how to select subcontractors for the work and makes sure that the government gets a quality job."`, "client": `-NASA`},
  {"quote": `"Pinnacle's exemplary "can-do" attitude is evident at every level - from upper management all the way down to the team located in the construction job trailer. It is obvious through their actions that Pinnacle is a solid organization built up on sound core values."`, "client": `-Defense Supply Center Columbus`},
  {"quote": `"Pinnacle Construction is continually a leader in problem solving and always provides solid recommendations and suggestions."`, "client": `-U.S. General Services Administration`},
  {"quote": `"On a personal level, I have enjoyed working with the executive team at Pinnacle Construction. I have found the individuals at Pinnacle, including company President Lynlee Altman, to be of exceptional morale character.`, "client": `-The Fowler Company`}
]

const StyledContainer = Styled.div`
  background-color: ${colors.backgroundBlue};
  position: relative;
  text-align: center;
  color: white;
  blockquote {
    border: none;
    color: white;
    font-size: 2.4vw;
    line-height: 1.5;
    @media (max-width: 1000px) { font-size: 3.0vw; }
  } 
  .imgContainer {
    overflow: hidden;
    opacity: 0.2;
  }
  .content {
    position: absolute;
    top: 2.5vw;
    width: 100%;
    height: 100%;
  }
  .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 900px;
  }
  svg {
    position: absolute;
    top: -50px;
    bottom: 0;
    margin: auto;
    height: 100px;
    width: 6vw;
    transition: all 0.2s ease;
    &.left { left: 3vw; }
    &.right { right: 3vw; }
    :hover {
      height: 120px;
      width: 7vw;
      top: -60px;
    }
  }
`

class Testimonials extends React.Component {
  state = { quoteIndex: 0 }
  next = () => this.setState({quoteIndex: (this.state.quoteIndex + 1) % quotes.length})
  prev = () => this.setState({quoteIndex: (this.state.quoteIndex - 1 + quotes.length) % quotes.length})

  render() {
    const { quote, client } = quotes[this.state.quoteIndex]
    return (
      <StaticQuery query={graphql`query {
        bridgeImg: file(relativePath: { eq: "testimonials.png" }) {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 330) { ...GatsbyImageSharpFluid_withWebp }
          }
        }
      }`} render={ data => (
        <StyledContainer>
          <div className="imgContainer">
            <Img fluid={data.bridgeImg.childImageSharp.fluid} className="img"/>
          </div>
          <div className="content">
            <FaChevronLeft className="left" onClick={this.prev}/>
            <FaChevronRight className="right" onClick={this.next}/>
            <div className="inner">
              <blockquote>
                {quote}<br/>{client}
              </blockquote>
            </div>
          </div>
        </StyledContainer>
      )}/>
    )
  }
}

export default Testimonials
