import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout, { StyledArticle, StyledSection, StyledHeaderImage } from "../components/Layout"
import Testimonials from "../components/Testimonials"
import ClientGrid from "../components/ClientGrid"
import CompanySnapshot from "../components/CompanySnapshot"
import Leader from "../components/Leader"

export default ({ data }) =>
  <Layout>
    <StyledHeaderImage fluid={data.headerImg.childImageSharp.fluid}/>
    <StyledSection className="whiteBackground">
      <h1>About Us</h1>
      <StyledArticle>
        <p>
          Pinnacle Construction & Development Group is a Woman Owned Small Business with Headquarters in Cleveland, Ohio that has been providing construction services for over 14 years. Project experience, versatility, and dedication take precedence in the world of construction. With this in mind, Pinnacle provides high levels of quality with expertise to deliver projects within a cost-effective and timely manner.
        </p>
        <p>
          Whether your project spans concept to completion, or renovation of an existing facility, our role is to balance cost, quality and function for your company.
        </p>
        <p>
          We have structured our company with the attention-to-detail and carefully planned processes necessary to address one-of-a-kind projects, unique challenges and safety critical concerts. We have tackled numerous difficulties throughout projects including: hazardous environment, atypical engineering specifications, public safety concerns during construction, environmental sensitivities and historic preservation and minimal interruption to adjacent areas.
        </p>
      </StyledArticle>
    </StyledSection>
    <StyledSection className="grayBackground">
      <h1>Our Story</h1>
      <StyledArticle>
        <p>
          In 2000, Lynlee Altman started Maintenance Solutions, Incorporated, performing mostly exterior building maintenance and commercial renovations. As the company grew in size, Ms. Altman began pursuing larger construction projects, and changed the company’s name to reflect this expansion of the core services offered by Pinnacle Construction & Development Group.
        </p>
        <p>
          Under the 14 years of leadership of Ms. Altman, Pinnacle Construction has grown to a company that tackles some of the most challenging work including hazardous demolition and specialized construction requirements at NASA. Pinnacle Construction has grown from a small maintenance provider to a full service construction management company, delivering over $10 Million in construction projects annually.
        </p>
        <Img fluid={data.lynleeImg.childImageSharp.fluid}/>
        <CompanySnapshot/>
      </StyledArticle>
    </StyledSection>
    <StyledSection className="whiteBackground">
      <h1>Our Leaders</h1>
      <StyledArticle>
        <Leader name="Scott Minerd"
                position="Vice President - LEED AP"
                link="/leadership/scott-minerd"
                email="mailto:Scott@pinnacleconstruction.bz"
                linkedin="https://www.linkedin.com/in/scott-minerd-leed-ap-ab00b033"
                img={data.scottHeadshotImg.childImageSharp.fluid}
        />
        <Leader name="Lynlee Altman"
                position="LEED AP-President"
                link="/leadership/lynlee-altman/"
                email="mailto:lynlee@pinnacleconstruction.bz"
                linkedin="https://www.linkedin.com/in/lynleealtman"
                img={data.lynleeHeadshotImg.childImageSharp.fluid}
        />
      </StyledArticle>
    </StyledSection>
    <Testimonials/>
    <ClientGrid/>
  </Layout>

export const query = graphql`
  query {
    headerImg: file(relativePath: { eq: "aboutbanner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    lynleeImg: file(relativePath: { eq: "lynlee-430x232.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 430) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    lynleeHeadshotImg: file(relativePath: { eq: "lynlee-headshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 335) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    scottHeadshotImg: file(relativePath: { eq: "scott-headshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 335) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }   
  }
`
