import React from 'react'
import { Link } from 'gatsby'
import Footer from "./footer"
import Header from "../components/header"

export default ({ img, title, children, next, prev }) =>
  <div className="portfolio-template-default single single-portfolio postid-200 masthead-fixed full-width footer-widgets singular">
    <div className="hfeed site">
      <Header/>
      <div id="main" className="site-main">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <article id="post-200" className="post-200 portfolio type-portfolio status-publish has-post-thumbnail hentry">
              <div className="post-thumbnail">
                <img src={img} className="attachment-pinnacle-full-width size-pinnacle-full-width wp-post-image" alt=""/>
                  <div className="shadow"/>
              </div>

              <div className="entry-content">
                <div className="entry-header">
                  <h1 className="entry-title" style={{fontSize: "2.5em"}}>
                    {title}
                  </h1>
                </div>
                <br/>
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
    <Footer/>
  </div>
