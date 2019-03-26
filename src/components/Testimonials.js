import React from 'react'
import Testimonial from "../components/testimonial"

let quotes = [
  {"id": "testimonial-nps", "quote": "\"The site experienced challenges with severe temperatures and flooding, but [Pinnacle] worked efficiently and safely while remaining sensitive to the area.\"", "client": "-NPS"},
  {"id": "testimonial-gsa", "quote": "\"Pinnacle Construction is continually a leader in problem solving and always provides solid recommendations and suggestions.\"", "client": "-GSA"},
  {"id": "testimonial-nasa-2", "quote": "\"Pinnacle is a very accommodating contractor and is always willing to work with the government, not against it.\"", "client": "-NASA"},
  {"id": "testimonial-nasa", "quote": "\"Pinnacle knows how to select subcontractors for the work and makes sure that the government gets a quality job.\"", "client": "-NASA"},
  {"id": "testimonial-defense-supply-center-columbus", "quote": "\"Pinnacle's exemplary \"can-do\" attitude is evident at every level - from upper management all the way down to the team located in the construction job trailer. It is obvious through their actions that Pinnacle is a solid organization built up on sound core values.\"", "client": "-Defense Supply Center Columbus"},
  {"id": "testimonial-us-general-services-administration", "quote": "\"Pinnacle Construction is continually a leader in problem solving and always provides solid recommendations and suggestions.\"", "client": "-U.S. General Services Administration"},
  {"id": "testimonial-the-fowler-company", "quote": "\"On a personal level, I have enjoyed working with the executive team at Pinnacle Construction. I have found the individuals at Pinnacle, including company President Lynlee Altman, to be of exceptional morale character.\"", "client": "-The Fowler Company"}
]

//TODO: remove background images from css
class Testimonials extends React.Component {

  state = { quoteIndex: 0 }

  next = () => this.setState({quoteIndex: (this.state.quoteIndex + 1) % quotes.length})
  prev = () => this.setState({quoteIndex: (this.state.quoteIndex - 1 + quotes.length) % quotes.length})

  render() {
    const { id, quote, client } = quotes[this.state.quoteIndex]
    return (
      <div className="testimonials">
        <div className="testimonial-display">
          <ul>
            <Testimonial id={id} quote={quote} client={client}/>
          </ul>
          <span className="slider-paginate next" onClick={this.next}/>
          <span className="slider-paginate prev" onClick={this.prev}/>
        </div>
      </div>
    )
  }
}

export default Testimonials
