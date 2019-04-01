import React from 'react'

import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import TestimonialBackgroundImage from "../images/testimonials.png"

// TODO: change " to `
let quotes = [
  {"quote": `"The site experienced challenges with severe temperatures and flooding, but [Pinnacle] worked efficiently and safely while remaining sensitive to the area."`, "client": "-NPS"},
  {"quote": "\"Pinnacle Construction is continually a leader in problem solving and always provides solid recommendations and suggestions.\"", "client": "-GSA"},
  {"quote": "\"Pinnacle is a very accommodating contractor and is always willing to work with the government, not against it.\"", "client": "-NASA"},
  {"quote": "\"Pinnacle knows how to select subcontractors for the work and makes sure that the government gets a quality job.\"", "client": "-NASA"},
  {"quote": "\"Pinnacle's exemplary \"can-do\" attitude is evident at every level - from upper management all the way down to the team located in the construction job trailer. It is obvious through their actions that Pinnacle is a solid organization built up on sound core values.\"", "client": "-Defense Supply Center Columbus"},
  {"quote": "\"Pinnacle Construction is continually a leader in problem solving and always provides solid recommendations and suggestions.\"", "client": "-U.S. General Services Administration"},
  {"quote": "\"On a personal level, I have enjoyed working with the executive team at Pinnacle Construction. I have found the individuals at Pinnacle, including company President Lynlee Altman, to be of exceptional morale character.\"", "client": "-The Fowler Company"}
]

class Testimonials extends React.Component {
  state = { quoteIndex: 0 }
  next = () => this.setState({quoteIndex: (this.state.quoteIndex + 1) % quotes.length})
  prev = () => this.setState({quoteIndex: (this.state.quoteIndex - 1 + quotes.length) % quotes.length})

  render() {
    const { quote, client } = quotes[this.state.quoteIndex]
    return (
      <div style={{ backgroundColor: `rgba(2,20,132,.85)`, position: `relative`, textAlign: `center`, fontWeight: `bold`, color: `white` }}>
        <div style={{ maxHeight: `29vw`, overflow: `hidden` }}>
          <img src={TestimonialBackgroundImage} alt="bridge" style={{ opacity: `0.2`, width: `100%` }}/>
        </div>
        <div style={{ position: `absolute`, top: `1.5vw`, width: `100%` }}>
          <FontAwesomeIcon icon={faChevronLeft} size="5x" style={{ position: `absolute`, left: `15px`, top: `40%`, color: `white` }} onClick={this.prev}/>
          <FontAwesomeIcon icon={faChevronRight} size="5x" style={{ position: `absolute`, right: `15px`, top: `40%`, color: `white` }} onClick={this.next}/>
          <div style={{ width: `70%`, margin: `auto`, maxWidth: `1000px` }}>
            <p style={{ fontSize: `2.2vw` }}>{quote}</p>
            <p style={{ textAlign: `right` }}>{client}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials
