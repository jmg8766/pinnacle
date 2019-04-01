import React from "react"
import { Link } from "gatsby"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import lynleeHeadshot from "../images/lynlee-headshot.png"
import scottHeadshot from "../images/scott-headshot.png"

const Leader = ({ name, position, link, email, linkedIn, img }) =>
  <div className="leader-container" >
    <img src={img} alt="" style={{ display: `block`, width: `100%`, height: `auto` }}/>
    <div className="overlay">
      <h3 style={{ color: "white", padding: "10px", fontSize: `36px` }}>{name}</h3>
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
  </div>

export default () =>
  <div style={{ textAlign: `center`, maxWidth: `1000px`, margin: `auto` }}>
    <h3 style={{}}>Our Leaders</h3>
      <div className="row">
        <div className="column">
          <Leader name="Scott Minerd"
                  position="Vice President - LEED AP"
                  link="/leadership/scott-minerd/"
                  email="mailto:Scott@pinnacleconstruction.bz"
                  linkedin="https://www.linkedin.com/in/scott-minerd-leed-ap-ab00b033"
                  img={scottHeadshot}
          />
        </div>
        <div className="column">
          <Leader name="Lynlee Altman"
                  position="LEED AP-President"
                  link="/leadership/lynlee-altman/"
                  email="mailto:lynlee@pinnacleconstruction.bz"
                  linkedin="https://www.linkedin.com/in/lynleealtman"
                  img={lynleeHeadshot}
          />
        </div>
      </div>
  </div>


