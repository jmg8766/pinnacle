import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Link } from "gatsby"

import HeaderImg from "../images/pinnacle_construction_header01.png"

export default ({ title, description, prev, next, children }) =>
  <div className="career-template-default single single-career postid-171 masthead-fixed full-width footer-widgets singular">
    <div className="hfeed site">
      <Header/>
      <div id="main" className="site-main">
        <div id="main" className="site-main">
          <div id="primary" className="content-area">
            <div id="content" className="site-content" role="main">
              <article id="post-171" className="post-171 career type-career status-publish hentry">
                <div className="post-thumbnail">
                  <img src={HeaderImg} className="attachment-pinnacle-full-width wp-post-image" alt="pinnacle_construction_header01"/>
                  <div className="shadow">
                    <span className="tagline">PINNACLE CONSTRUCTION: WE'RE EXPERTS IN THE UNUSUAL</span>
                  </div>
                </div>
                <div className="entry-header">
                  <h1 className="entry-title">{title}</h1>
                  <div className="entry-meta"/>
                </div>
                <div className="entry-content">
                  {children}
                </div>
              </article>
              <nav className="navigation post-navigation" role="navigation">
                <h1 className="screen-reader-text">Post navigation</h1>
                <div className="nav-links">
                  {prev &&
                  <Link to={prev.link} rel="prev" style={{ background: "#80000e", color: "white", width: "auto", maxWidth: "30%", padding: "6px 28px", textAlign: "center", borderRadius: "5px"}}>
                    {prev.title}<br/>«
                  </Link>}
                {next &&
                  <Link to={next.link} rel="next" style={{ background: "#80000e", color: "white", width: "auto", maxWidth: "30%", padding: "6px 28px", textAlign: "center", borderRadius: "5px", float: "right"}}>
                    {next.title}<br/>»
                  </Link>}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
