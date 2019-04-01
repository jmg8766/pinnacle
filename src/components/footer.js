import React from "react"

import { faFacebookSquare, faTwitterSquare, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () =>
  <footer>
    <div>
      <a href="https://www.facebook.com/Pinnacle-Construction-165785193481629/?fref=nf" target="_blank" style={{ color: "white" }}>
        <FontAwesomeIcon icon={faFacebookSquare} size="lg" style={{margin: "10px"}}/>
      </a>
      <a href="https://www.instagram.com/pinnaclebuilds/" target="_blank" style={{ color: "white" }}>
        <FontAwesomeIcon icon={faInstagram} size="lg" style={{margin: "10px"}}/>
      </a>
      <a href="https://twitter.com/Pinnaclebuilds" target="_blank" style={{ color: "white" }}>
        <FontAwesomeIcon icon={faTwitterSquare} size="lg" style={{margin: "10px"}}/>
      </a>
    </div>
    <p>
      5755 Granger Road, Suite 110, Cleveland, Ohio 44131 · 440.975.0981 Office · 440.975.1015 Fax
    </p>
  </footer>
