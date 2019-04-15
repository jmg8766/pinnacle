import React from "react"
import Layout, { StyledHeaderImage, StyledSection, StyledArticle }  from "../components/Layout"
import { Link, graphql } from "gatsby"
import Styled from "styled-components"
import Img from "gatsby-image"
import { colors } from "../utils/presets"
import Testimonials from "../components/Testimonials"

const JobContainer = Styled.div`
  border-style: none none solid solid;
  border-color: ${colors.textRed};
  margin-bottom: 20px;
  padding-left: 20px;
  min-width: 450px;
  & a {
    color: ${colors.textRed};
    text-shadow: none;
  }
  & .titleContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    text-transform: uppercase; 
    & h2 { 
      margin: 0; 
    }
  }
  & .viewArticle {
    margin-left: 20px;
  }
`

const Job = ({ title, link, description }) =>
  <JobContainer>
    <div className="titleContainer">
      <h2>{title}</h2>
      <a href="mailto:cvacca@pinnacleconstruction.bz">Apply</a>
    </div>
    <p>
      {description}
      <Link to={link} className="viewArticle">View&nbsp;Article</Link>
    </p>
  </JobContainer>

const JobListSection = Styled.div`
  display: grid;
  grid-template-columns: auto 60vw;
  grid-auto-rows: 1fr;
  grid-gap: 2vw;
  & div {
    margin-top: 2vw;
  }
  @media (max-width: 945px) {
    grid-template-columns: 90vw;
  }
`

export default ({ data }) =>
  <Layout>
    <StyledHeaderImage fluid={ data.headerImg.childImageSharp.fluid }/>
    <StyledSection className="whiteBackground">
      <h1>Careers</h1>
      <StyledArticle>
        <p>
          Why work for Pinnacle… culture, leadership, growth opportunities,
          stability, benefits
        </p>
        <p>
          Our company works extensively with federal government agencies,
          including NASA, the General Services Administration, the U.S. Army
          Corps of Engineers, NAVFAC, as well as state and local government
          agencies. We specialize in unique, complex, and safety-critical
          projects and take great pride in delivering a quality product on time
          and within budget.
        </p>
        <p>
          We invest in our personnel with on-site/off-site training, skills
          enhancement, and career development. Pinnacle is recognized as having
          excellent safety ratings with the lowest EMR rating possible.
          Construction is a tough and demanding job. At Pinnacle, your proven
          performance, leadership, and work ethic is recognized and rewarded.
        </p>
        <p>
          Candidates joining the Pinnacle team will be receiving a competitive
          pay and benefits package as well as a dynamic, exciting, and rewarding
          work environment. Pinnacle is proud to say they provide consistent
          work for their employees and do not lay-off workers between projects.
        </p>
        <p>
          No international sponsorship available.
        </p>
      </StyledArticle>
    </StyledSection>
    <Testimonials/>
    <StyledSection className="grayBackground">
      <JobListSection>
        <div className="jobImages">
          <Img fluid={data.stockMan.childImageSharp.fluid}/>
          <Img fluid={data.coreValues.childImageSharp.fluid}/>
        </div>
        <div className="jobList">
          <h1>Currently Available Jobs</h1>
          <Job title="Site Superintendent" link="/career/site-superintendent/" description="Pinnacle Construction &amp; Development Group, Inc, a dynamic growing General Contractor, has immediate need for a qualified Site Superintendent. Ideal candidates for this position should have experience in construction or a related field. More importantly, the candidate should be enthusiastic, team oriented, and display a high level of initiative. Due to the large amount of…"/>
          <Job title="Project Manager" link="/career/project-manager/" description="Pinnacle Construction &amp; Development Group, Inc, a dynamic growing General Contractor, has immediate need for a qualified Project Manager. Ideal candidates for this position should have experience in construction management. More importantly, the candidate should be enthusiastic, team oriented, and display a high level of initiative. Due to the large amount of interaction with subcontractors,…"/>
        </div>
      </JobListSection>
    </StyledSection>
  </Layout>

export const query = graphql`
  query {
    headerImg: file(relativePath: { eq: "careersbanner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1366) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    coreValues: file(relativePath: { eq: "color-core-values.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    stockMan: file(relativePath: { eq: "stock-man.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
