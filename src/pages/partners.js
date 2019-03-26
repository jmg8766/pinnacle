import React from 'react'
import Footer from "../components/footer"
import Header from "../components/header"
import Testimonials from "../components/Testimonials"

import concernedConstructionMen from "../images/concernedConstructionMen.jpg"
import alphaport from "../images/alphaport.png"
import teya from "../images/teya.jpg"

const PartnersPage = () =>
  <div id="partners" className="page-template page-template-_page-templates page-template-Partners page-template-_page-templatesPartners-php page page-id-69 masthead-fixed full-width footer-widgets singular post-type-archive post-type-archive-partners no-js-header">
    <div id="page-partners" className="hfeed site">
      <Header/>
      <div id="main" className="site-main">
        <div id="main-content" className="main-content">
          <div id="primary" className="content-area">
            <div id="content" className="site-content" role="main">
              <article id="post-69" className="post-69 page type-page status-publish has-post-thumbnail hentry">
                <div className="post-thumbnail">
                  <img src={concernedConstructionMen} className="attachment-pinnacle-full-width size-pinnacle-full-width wp-post-image" alt="" />
                    <div className="shadow">
                      <span className="tagline">PINNACLE CONSTRUCTION: WE'RE EXPERTS IN THE UNUSUAL</span>
                    </div>
                </div>
                <div className="page-header">
                  <h1 className="page-title">Partners</h1>
                </div>
                <div className="content-wrapper">
                  With our significant experience in Design-Build construction work, Pinnacle clearly understands that
                  “TEAMWORK” is important to the success of a project. Pinnacle builds a collaborative relationship on
                  all of our projects. On each of our projects, we provide a team of experienced professionals who work
                  with the entire Client team to provide the solutions for a successful Design-Build project.
                  Understanding the challenges facing all team members will develop the foundations of our management
                  plan. We prioritize the critical responsibilities of each Team member and develop a clear outline and
                  understanding of these activities.
                </div>
                <Testimonials/>
                <div className="partners">
                  <div className="partners-wrapper">
                    <ul>
                      <li id="partner-alphaport-inc" className="partner-entry">
                        <a href="http://www.alpha-port.com/" target="_blank">
                          <img src={alphaport} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Alphaport, Inc."/>
                        </a>
                      </li>
                      <li id="partner-teya-technologies-llc" className="partner-entry">
                        <a href="http://www.teyatech.com/" target="_blank">
                          <img src={teya} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Teya Technologies, LLC"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>

export default PartnersPage

