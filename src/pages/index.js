import React from "react"
import Img from "gatsby-image"

import Header from "../components/header"
import Footer from "../components/footer"

export default ({ data }) =>
  <div>
    <Header/>
    <section className="hero" style={{ textAlign: `center`, height: `calc(100vh - 80px)` }}>
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
          Pinnacle Construction & Development Group, Inc.
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
