import React from 'react'
import Img from 'gatsby-image'
import "../styles/global.css"

import Header from "./header"
import Footer from "./footer"

export default ({ img, title, children }) =>
  <div style={{}}>
    <Header/>
    <section style={{height: `33vw`, zIndex: `-1`, overflow: `hidden` }}>
      <Img fluid={img} style={{ position: `absolute`, width: `100%`, top: `-6vw`, zIndex: `-1` }}/>
    </section>
    <div style={{ backgroundColor: `white`, opacity: `1` }}>
      <h1 className="entry-title" style={{textAlign: `center`, paddingTop: `20px` }}>
        {title}
      </h1>
      {children}
    </div>
    <Footer/>
  </div>
