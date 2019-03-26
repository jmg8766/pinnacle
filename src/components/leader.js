import React from 'react'
import { Link } from "gatsby"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default ({id, name, position, link, email, linkedIn, img}) => {
  return (
    <li id={id} className="leader-container" style={{backgroundImage: `url(${img})`}}>
      <div className="overlay">
        <h3 style={{ color: "white", padding: "10px" }}>{name}</h3>
        <p style={{ textAlign: "center" }}>
          {position}
          <br/>
          <Link to={link} style={{ textAlign: "center", color: "white", textDecoration: "underline" }}>BIO</Link>
        </p>
        <div style={{textAlign: "center" }}>
          <a href={email} target="_blank" style={{ color: "white" }}>
            <FontAwesomeIcon icon={faEnvelope} size="lg" style={{margin: "10px"}}/>
          </a>
          <a href={linkedIn} target="_blank" style={{ color: "white" }}>
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" style={{margin: "10px"}}/>
          </a>
        </div>
      </div>
    </li>
  )
}
