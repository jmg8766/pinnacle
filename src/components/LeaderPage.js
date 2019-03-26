import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Link } from "gatsby"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import Glen from "../images/glenn_research_center.png"

export default ({ name, position, email, linkedin, img, description, testimonial }) =>
  <body class="leadership-template-default single single-leadership postid-62 masthead-fixed full-width footer-widgets singular">
    <div>
      <Header/>
      <div id="main" class="site-main">
        <div id="primary" class="content-area">
          <div id="content" className="site-content" role="main">
            <article id="post-62" className="post-62 leadership type-leadership status-publish has-post-thumbnail hentry">
              <div className="post-thumbnail">
                <img src={Glen} className="attachment-pinnacle-full-width size-pinnacle-full-width wp-post-image" alt="About Pinnacle Construction"/>
              </div>
              <div className="entry-header">
                <h1 className="entry-title">{name}</h1>
                <h4>{position}</h4>
                <div className="entry-contacts">
                  <a href={email} target="_blank" rel="noopener noreferrer" style={{color: "black" }}>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" style={{margin: "10px"}}/>
                  </a>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{color: "black" }}>
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" style={{margin: "10px"}}/>
                  </a>
                </div>
              </div>
              <div className="content-wrapper">
                <div className="entry-content">
                  {description.map(paragraph => <p>{paragraph}</p>)}
                </div>
                <div id="main-sidebar">
                  <div id="primary-sidebar" className="primary-sidebar widget-area" role="complementary">
                    <img src={img} className="attachment-post-thumbnail size-post-thumbnail" alt="Lynlee- LEED AP-PRESIDENT"/>
                    <aside id="text-2" className="widget widget_text">
                      <div className="textwidget">
                        <p>
                          {testimonial.quote}<br/>
                          <span>{testimonial.client}</span>
                        </p>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </article>
            <nav className="navigation post-navigation" role="navigation">
              <h1 className="screen-reader-text">Post navigation</h1>
              <div className="nav-links">
                <Link to="/about" style={{background: "#80000e", color: "white", fontWeight: "bold", width: "auto", maxWidth: "30%", padding: "6px 28px"}}>
                  Back to About Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  <Footer/>
  </body>


