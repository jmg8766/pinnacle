import React from 'react'
import Leaders from "../components/Leaders"
import Layout from "../components/layout"
import Testimonials from "../components/Testimonials"
import Clients from "../components/clients"
import CompanySnapshot from "../components/companySnapshot"

import lynlee from "../images/lynlee-430x232.jpg"

export default ({ data }) =>
  <Layout img={data.placeholderImage.childImageSharp.fluid} title="About Us">
    <div className="row" style={{ maxWidth: `1000px`, margin: `auto` }}>
      <div className="column">
        <p>
          Pinnacle Construction &amp; Development Group is a Woman Owned Small Business with Headquarters in
          Cleveland, Ohio that has been providing construction services for over 14 years. Project experience,
          versatility, and dedication take precedence in the world of construction. With this in mind,
          Pinnacle provides high levels of quality with expertise to deliver projects within a cost-effective
          and timely manner.
        </p>
        <p>
          Whether your project spans concept to completion, or renovation of an existing facility, our role
          is to balance cost, quality and function for your company.
        </p>
      </div>
      <div className="column">
        <p>
          We have structured our company with the attention-to-detail and carefully planned processes
          necessary to address one-of-a-kind projects, unique challenges and safety critical concerts. We have
          tackled numerous difficulties throughout projects including: hazardous environment, atypical
          engineering specifications, public safety concerns during construction, environmental sensitivities
          and historic preservation and minimal interruption to adjacent areas.
        </p>
      </div>
    </div>
    <div style={{ backgroundColor: `#ebebeb` }}>
      <div style={{ margin: `auto`, maxWidth: `1000px` }}>
        <h3 style={{ textAlign: `center`, marginBottom: `0` }}>
          Our Story
        </h3>
        <div className="row">
          <div className="column">
            <p>
              In 2000, Lynlee Altman started Maintenance Solutions, Incorporated,
              performing mostly exterior building maintenance and commercial renovations.
              As the company grew in size, Ms. Altman began pursuing larger
              construction projects, and changed the company’s name to reflect
              this expansion of the core services offered by Pinnacle Construction
              & Development Group.
            </p>
            <p>
              Under the 14 years of leadership of Ms. Altman, Pinnacle Construction
              has grown to a company that tackles some of the most challenging work
              including hazardous demolition and specialized construction requirements
              at NASA. Pinnacle Construction has grown from a small maintenance
              provider to a full service construction management company,
              delivering over $10 Million in construction projects annually.
            </p>
          </div>
          <div className="column">
            <img src={lynlee} alt="lynlee" width="100%"/>
            <CompanySnapshot/>
          </div>
        </div>
      </div>
      <Testimonials/>
      <Leaders/>
      <Clients/>
    </div>
  </Layout>

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "aboutbanner-cropped.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 500, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
