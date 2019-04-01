import React from 'react'

import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import USAF from "../images/USAF.png"
import DHS from "../images/DHS.png"
import DOI from "../images/DOI.png"
import NAVFAC from "../images/NAVFAC.png"
import VA from "../images/VA.png"
import GSA from "../images/GSA.jpg"
import NASA from "../images/NASA.png"
import NPS from "../images/NPS.png"
import USNG from "../images/USNG.png"
import USArmy from "../images/USArmy.png"
import USCGR from "../images/USCGR.png"

let clients = [
  {"link":"http://www.af.mil/", "src": USAF, "alt": "U.S. Air Force"},
  {"link": "http://www.dhs.gov/", "src": DHS, "alt": "U.S. Department of Homeland Security"},
  {"link": "http://www.doi.gov/", "src": DOI, "alt": "U.S. Department of the Interior"},
  {"link": "http://navfac.navy.mil/", "src": NAVFAC, "alt": "Naval Facilities Engineering Command"},
  {"link": "http://www.va.gov/", "src": VA, "alt": "U.S. Department of Veterans Affairs"},
  {"link": "http://www.gsa.gov/", "src": GSA, "alt": "U.S. General Services Administration"},
  {"link": "http://www.nasa.gov/", "src": NASA, "alt": "National Aeronautics and Space Administration"},
  {"link": "http://www.nps.gov/", "src": NPS, "alt": "National Park Service"},
  {"link": "http://www.nationalguard.mil/", "src": USNG, "alt": "National Guard"},
  {"link": "http://www.army.mil/", "src": USArmy, "alt": "United States Army"},
  {"link": "http://www.uscg.mil/", "src": USCGR, "alt": "United States Coast Guard"},
]

const Client = ({link, src, alt}) =>
  <li style={{ display: `inline`, padding: `10px` }}>
    <a href={link} target="_blank">
      <img src={src} alt={alt} style={{maxHeight: `150px`, width: `auto` }}/>
    </a>
  </li>

class Clients extends React.Component {
  state = { index: 0 }

  next = () => this.setState({ index: (this.state.index + 1) % clients.length })
  prev = () => this.setState({ index: (this.state.index - 1 + clients.length) % clients.length })

  render() {
    const displayedClients = [
      clients[this.state.index],
      clients[(this.state.index + 1) % clients.length],
      clients[(this.state.index + 2) % clients.length],
      clients[(this.state.index + 3) % clients.length]
    ]
    return (
      <div style={{ textAlign: `center`, backgroundColor: `white` }}>
        <h3>Our Clients</h3>
        <div>
          <FontAwesomeIcon icon={faChevronLeft} size="5x" style={{ color: `#80000e`, position: `absolute`, left: `15px`}} onClick={this.prev}/>
          <FontAwesomeIcon icon={faChevronRight} size="5x" style={{ color: `#80000e`, position: `absolute`, right: `15px` }} onClick={this.next}/>
          <ul style={{ }}>
            {displayedClients.map( ({id, link, src, alt}) =>
              <Client link={link} src={src} alt={alt} />
            )}
          </ul>
          <span className="slider-paginate next" onClick={this.next}/>
          <span className="slider-paginate prev" onClick={this.prev}/>
        </div>
      </div>
    )
  }
}

export default Clients
