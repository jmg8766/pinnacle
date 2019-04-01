import React from 'react'
import Layout from '../components/layout'
import Testimonials from "../components/Testimonials"

import alphaport from "../images/alphaport.png"
import teya from "../images/teya.jpg"

export default ({ data }) =>
  <Layout img={data.banner.childImageSharp.fluid} title="Partners">
    <div style={{ maxWidth: `800px`, margin: `auto`, padding: `20px` }}>
      With our significant experience in Design-Build construction work, Pinnacle clearly understands that
      “TEAMWORK” is important to the success of a project. Pinnacle builds a collaborative relationship on
      all of our projects. On each of our projects, we provide a team of experienced professionals who work
      with the entire Client team to provide the solutions for a successful Design-Build project.
      Understanding the challenges facing all team members will develop the foundations of our management
      plan. We prioritize the critical responsibilities of each Team member and develop a clear outline and
      understanding of these activities.
    </div>
    <Testimonials/>
    <div style={{ textAlign: `center`}}>
      <ul style={{ maxWidth: `1000px`, width: `70%`, margin: `auto`, padding: `20px` }}>
        <li style={{ display: `inline`, padding: `20px` }}>
          <a href="http://www.alpha-port.com/" target="_blank">
            <img src={alphaport} alt="Alphaport, Inc." style={{ verticalAlign: `middle` }}/>
          </a>
        </li>
        <li style={{ display: `inline`, padding: `20px` }}>
          <a href="http://www.teyatech.com/" target="_blank">
            <img src={teya} alt="Teya Technologies, LLC" style={{ verticalAlign: `middle` }}/>
          </a>
        </li>
      </ul>
    </div>
  </Layout>

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "partnersbanner.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 700, cropFocus: SOUTH) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

