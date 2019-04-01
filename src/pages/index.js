import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"

import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) =>
  <div>
    <Header/>
    <section className="hero" style={{ textAlign: `center`, height: `calc(100vh - 50px)` }}>
      <div style={{
        position: `absolute`,
        width: `100%`,
        height: `100%`,
        top: `0`,
        backgroundColor: `rgba(0,0,0,0.5)`,
        zIndex: `-1`,
        padding: `0`,
      }}>
        <h1 style={{ fontWeight: `bold`, fontSize: `60px`, marginBottom: `15px`, marginTop: `20%`, color: `white`}}>
          Pinnacle Construction
        </h1>
        <h3 style={{ fontSize: `28px`, fontWeight: `normal`, color: `white` }}>
          WE'RE EXPERTS IN THE UNUSUAL
        </h3>
      </div>
     <Img fluid={data.placeholderImage.childImageSharp.fluid} style={{
        position: `fixed`,
        width: `100%`,
        height: `100vh`,
        top: `0`,
        opacity: `0.75`,
        zIndex: `-2`,
      }}/>
   </section>
    <Footer/>
  </div>
   {/*<div id="home" className="home page-template page-template-_page-templates page-template-home page-template-_page-templateshome-php page page-id-6 masthead-fixed full-width footer-widgets grid">*/}
     {/*<div id="page-home" className="hfeed site">*/}
       {/*<Header/>*/}

         {/*<div className="the-shadow-knows">*/}
           {/*<a className="slide-title" href="">NASA Plum Brook Station Space Power Facility Sewage Treatment Plant</a>*/}
           {/*<div id="callout-1" className="callout" style={{position:'absolute', top:'36%', left:'2%'}}>*/}
             {/*<p>*/}
               {/*We demolished military ammunition storage facilities here. Special care was taken as these igloos were designed to explode upward, not outward.*/}
             {/*</p>*/}
           {/*</div>*/}
           {/*<div id="callout-2" className="callout" style={{position:'absolute', top:'30%', left:'73%'}}>*/}
             {/*<p>*/}
               {/*In August 2011, Marvel Studios' <em>The Avengers</em> was filmed here.*/}
             {/*</p>*/}
           {/*</div>*/}
           {/*<div id="callout-3" className="callout" style={{position:'absolute', top:'66%', left:'53%'}}>*/}
             {/*<p>*/}
               {/*Construction at Plum Brook Station is always structured around bald eagle mating season*/}
             {/*</p>*/}
           {/*</div>*/}
           {/*<div id="callout-4" className="callout" style={{position:'absolute', top:'32%', left:'33%'}}>*/}
             {/*<p>*/}
               {/*Pinnacle demolished rocket test stands designed to test liquid-hydrogen propellant in simulated altitude conditions*/}
             {/*</p>*/}
           {/*</div>*/}
         {/*</div>*/}
     {/*</div>*/}
     {/*<Footer/>*/}
   // </div>

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "crane.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
