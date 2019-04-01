import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Testimonials from "../components/Testimonials"

import CoreValues from "../images/color-core-values.jpg"
import StockMan from "../images/stock-man.jpg"

const Job = ({ title, description, link }) =>
  <li className="career-content">
    <div className="thumbnail-wrapper"/>
    <h2>{title}</h2>
    <div className="the-excerpt">
      {description}
      <Link to={link} className="view-article">View Article</Link>
    </div>
    <span className="apply-for-job">
      <a href="mailto:cheryl@pinnacleconstruction.bz" className="genericon-mail">Apply</a>
    </span>
  </li>

export default ({ data }) =>
  <div id="careers" className="page-template page-template-_page-templates page-template-Careers page-template-_page-templatesCareers-php page page-id-78 masthead-fixed full-width footer-widgets singular post-type-archive post-type-archive-career">
    <div id="page-careers" className="hfeed site">
      <Header/>
      <div id="main" className="site-main">
        <div id="main-content" className="main-content">
          <div id="primary" className="content-area">
            <div id="content" className="site-content" role="main">
              <article id="post-78" className="post-78 page type-page status-publish has-post-thumbnail hentry">
                <div className="post-thumbnail">
                  {/*<img src={PageHeader} className="attachment-pinnacle-full-width size-pinnacle-full-width wp-post-image" alt=""/>*/}
                  <Img fluid={data.banner.childImageSharp.fluid} alt=""/>
                  <div className="shadow"/>
                </div>
                <div className="entry-header"><h1 className="entry-title">Careers</h1></div>
                <div className="entry-content">
                  <p>
                    Why work for Pinnacle… culture, leadership, growth opportunities, stability, benefits
                  </p>
                  <p>
                    Our company works extensively with federal government agencies, including NASA, the General
                    Services Administration, the U.S. Army Corps of Engineers, NAVFAC, as well as state and local
                    government agencies. We specialize in unique, complex, and safety-critical projects and take great
                    pride in delivering a quality product on time and within budget.
                  </p>
                  <p>
                    We invest in our personnel with on-site/off-site training, skills enhancement, and career
                    development. Pinnacle is recognized as having excellent safety ratings with the lowest EMR rating
                    possible. Construction is a tough and demanding job. At Pinnacle, your proven performance,
                    leadership, and work ethic is recognized and rewarded.
                  </p>
                  <p>
                    Candidates joining the Pinnacle team will be receiving a competitive pay and benefits package as
                    well as a dynamic, exciting, and rewarding work environment. Pinnacle is proud to say they provide
                    consistent work for their employees and do not lay-off workers between projects.
                  </p>
                  <p>
                    No international sponsorship available.
                  </p>
                  <img src={CoreValues} style={{maxWidth: "600px", display: "block", margin: "0 auto"}} alt="core values"/>
                  <img src={StockMan} style={{maxWidth: "600px", display: "block", margin: "0 auto"}} alt="construction man looking at blueprints and smiling"/>
                </div>
                <Testimonials/>
                <div className="careers">
                  <div className="careers-wrapper">
                    <ul>
                      <Job title="SITE SUPERINTENDENT"
                           link="/career/site-superintendent/"
                           description="Pinnacle Construction &amp; Development Group, Inc, a dynamic growing General Contractor, has immediate need for a qualified Site Superintendent. Ideal candidates for this position should have experience in construction or a related field. More importantly, the candidate should be enthusiastic, team oriented, and display a high level of initiative. Due to the large amount of…"
                      />
                      <Job title="Project Manager"
                           link="/career/project-manager/"
                           description="Pinnacle Construction &amp; Development Group, Inc, a dynamic growing General Contractor, has immediate need for a qualified Project Manager. Ideal candidates for this position should have experience in construction management. More importantly, the candidate should be enthusiastic, team oriented, and display a high level of initiative. Due to the large amount of interaction with subcontractors,…"
                      />
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  </div>

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "careersbanner.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 500, cropFocus: NORTH) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
