import React from 'react'
import { Link } from "gatsby"
import Header from "../components/header"
import Testimonials from "../components/Testimonials"
import Projects from "../components/projects"
import Footer from "../components/footer"

import PortfolioHeader from "../images/PORTFOLIO header.jpeg"
import Crane from "../images/crane.png"
import Bridge from "../images/bridge.png"

export default () =>
  <div className="archive post-type-archive post-type-archive-portfolio masthead-fixed list-view full-width footer-widgets">
    <div id="page-" className="hfeed site">
      <Header/>
      <div id="main" className="site-main">
        <section id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <div className="post-thumbnail">
              <img src={PortfolioHeader} className="attachment-pinnacle-full-width wp-post-image" alt="pinnacle_construction_header01"/>
              <div className="shadow"/>
            </div>
            <div className="page-header">
              <h1 className="page-title">Portfolio</h1>
            </div>
            <div className="content-wrapper">
              <p>
                Project experience, versatility, and dedication take precedence in the world of construction. Pinnacle
                Construction has been commended for our quality of work, compliance with performance schedules, and cost
                control through favorable performance ratings, awards, and repeat work from Federal and civilian
                clientele. Our strong past performance is indicative of our ability to successfully execute tasks within
                this contract on time and within budget.
                Pinnacle has over 15 years of past relevant task order type experience and current experience performing
                multiple concurrent task orders for general construction, alteration and repair of buildings, structures
                and other real property with U.S. Army, U.S. Navy, U.S. Air Force, NASA, GSA, NAVFAC, U.S. Department of
                Veteran Affairs, U.S. National Park Service (NPS), National Guard Bureau (NGB), U.S. Coast Guard and the
                USACE. Our past task order projects had a broad range of technical complexity with values ranging from
                $100K to over $10M. Our demonstrated Design-Build and Design-Bid-Build experience includes multiple
                award delivery projects such as LEED certified new construction, renovation, alterations, repair,
                additions and upgrades, heating ventilation and air conditioning (HVAC), electrical, mechanical, steel
                fabrication, welding, demolition, painting, earthwork, fencing and paving.
              </p>
            </div>
            <div className="featured-projects">
              <div className="featured-projects-wrapper">
                <h3>Featured Projects</h3>
                <ul>
                  <li id="featured-project-plum-brooks-space-power-facility" className="featured-project-entry">
                    <img src={Crane} className="attachment-pinnacle-full-width size-pinnacle-full-width wp-post-image" alt="Plum Brook’s Space Power Facility"/>
                      <div className="the-shadow-knows">
                        <h2>
                          <Link to="/portfolio/plum-brooks-space-power-facility">NASA Plum Brook Station Space Power Facility Sewage Treatment Plant</Link>
                        </h2>
                      </div>
                  </li>
                  <li id="featured-project-cuyahoga-valley-national-park-system" className="featured-project-entry">
                    <img src={Bridge} className="attachment-pinnacle-full-width size-pinnacle-full-width wp-post-image" alt="Cuyahoga Valley National Park System"/>
                      <div className="the-shadow-knows">
                        <h2>
                          <Link to="/portfolio/cuyahoga-valley-national-park-system">Cuyahoga Valley National Park System</Link>
                        </h2>
                      </div>
                  </li>
                </ul>
              </div>
            </div>
            <Testimonials/>
            <Projects/>
          </div>
        </section>
      </div>
    </div>
    <Footer/>
  </div>
