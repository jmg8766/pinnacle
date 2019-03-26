import React from 'react'
import "../styles/global.css"

import Header from "./header"
import Footer from "./footer"

export default ({ img, pageTitle, children }) =>
  <div className="archive post-type-archive post-type-archive-service masthead-fixed list-view full-width footer-widgets">
    <div className="hfeed site">
      <Header/>
      <section className="content-area">
        <div className="post-thumbnail">
          <img className="attachment-pinnacle-full-width wp-post-image" src={img} alt="pinnacle_construction_header01"/>
          <div className="shadow">
            <span className="tagline">PINNACLE CONSTRUCTION: WE'RE EXPERTS IN THE UNUSUAL</span>
          </div>
        </div>
        <div className="page-header">
          <h1 className="page-title">{pageTitle}</h1>
        </div>
        {children}
      </section>
    </div>
    <Footer/>
  </div>
