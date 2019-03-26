import React from 'react'

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
  {"id": "client-united-states-air-force", "link":"http://www.af.mil/", "src": USAF, "alt": "U.S. Air Force"},
  {"id": "client-u-s-department-of-homeland-security", "link": "http://www.dhs.gov/", "src": DHS, "alt": "U.S. Department of Homeland Security"},
  {"id": "client-u-s-department-of-the-interior", "link": "http://www.doi.gov/", "src": DOI, "alt": "U.S. Department of the Interior"},
  {"id": "client-naval-facilities-engineering-command", "link": "http://navfac.navy.mil/", "src": NAVFAC, "alt": "Naval Facilities Engineering Command"},
  {"id": "client-u-s-department-of-veterans-affairs", "link": "http://www.va.gov/", "src": VA, "alt": "U.S. Department of Veterans Affairs"},
  {"id": "client-u-s-general-services-administration", "link": "http://www.gsa.gov/", "src": GSA, "alt": "U.S. General Services Administration"},
  {"id": "client-national-aeronautics-and-space-administration", "link": "http://www.nasa.gov/", "src": NASA, "alt": "National Aeronautics and Space Administration"},
  {"id": "client-national-park-service", "link": "http://www.nps.gov/", "src": NPS, "alt": "National Park Service"},
  {"id": "client-national-guard", "link": "http://www.nationalguard.mil/", "src": USNG, "alt": "National Guard"},
  {"id": "client-united-states-army", "link": "http://www.army.mil/", "src": USArmy, "alt": "United States Army"},
  {"id": "client-united-states-coast-guard", "link": "http://www.uscg.mil/", "src": USCGR, "alt": "United States Coast Guard"},
]

const Client = ({id, link, src, alt}) =>
  <li id={id} className="entry-client">
    <div className={"client-content"}>
      <a href={link} target="_blank">
        <div className="post-thumbnail">
          <img src={src} className="attachment-pinnacle-full-width size-pinnacle-full-width wp-post-image" alt={alt} sizes="(max-width: 146px) 100vw, 146px"/>
          <div className="shadow">
            <span className="tagline">PINNACLE CONSTRUCTION: WE'RE EXPERTS IN THE UNUSUAL</span>
          </div>
        </div>
      </a>
    </div>
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
      <div className="client-section">
        <div className="client-wrapper">
          <h3>Our Clients</h3>
          <ul>
            {displayedClients.map( ({id, link, src, alt}) =>
              <Client id={id} link={link} src={src} alt={alt} />
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
