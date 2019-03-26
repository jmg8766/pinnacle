import React from 'react'
import Header from "../components/header"
import Testimonials from "../components/Testimonials"
import Leader from "../components/leader"
import Clients from "../components/clients"
import Footer from "../components/footer"

import aboutBanner from "../images/about-banner.jpg"
import lynlee from "../images/lynlee-430x232.jpg"

import lynleeHeadshot from "../images/lynlee-headshot.png"
import scottHeadshot from "../images/scott-headshot.png"

const AboutPage = () => (
  <body id="about-us" className="page-template page-template-_page-templates page-template-About page-template-_page-templatesAbout-php page page-id-8 masthead-fixed full-width footer-widgets singular">
    <div id="page-about-us" className="hfeed site">
      <Header/>
      <div id="main-content" className="main-content">
        <div id="primary" className="content-area">
          <div id="content" className="site-content" role="main">
            <article id="post-8" className="post-8 page type-page status-publish has-post-thumbnail hentry">
              <div className="post-thumbnail">
                <img src={aboutBanner}
                     className="attachment-pinnacle-full-width size-pinnacle-full-width wp-post-image" alt=""
                     sizes="(max-width: 4200px) 100vw, 4200px"/>
                <div className="shadow">
                  <span className="tagline">PINNACLE CONSTRUCTION: WE'RE EXPERTS IN THE UNUSUAL</span>
                </div>
              </div>

              <div className="entry-header">
                <h1 className="entry-title">About Us</h1>
              </div>
              <div className="entry-content">
                <ul>
                  <li>
                    Pinnacle Construction &amp; Development Group is a Woman Owned Small Business with Headquarters in
                    Cleveland, Ohio that has been providing construction services for over 14 years. Project experience,
                    versatility, and dedication take precedence in the world of construction. With this in mind,
                    Pinnacle provides high levels of quality with expertise to deliver projects within a cost-effective
                    and timely manner.
                    <p>
                      Whether your project spans concept to completion, or renovation of an existing facility, our role
                      is to balance cost, quality and function for your company.
                    </p>
                  </li>
                  <li>
                    We have structured our company with the attention-to-detail and carefully planned processes
                    necessary to address one-of-a-kind projects, unique challenges and safety critical concerts. We have
                    tackled numerous difficulties throughout projects including: hazardous environment, atypical
                    engineering specifications, public safety concerns during construction, environmental sensitivities
                    and historic preservation and minimal interruption to adjacent areas.
                  </li>
                </ul>
              </div>
              <div className="entry-secondary-content">
                <div className="section-wrapper">
                  <div id="content-section-2" className="entry-content"><h3>Our Story</h3>
                    <ul className="level-1">
                      <li>
                        <p>
                          In 2000, Lynlee Altman started Maintenance Solutions, Incorporated, performing mostly
                          exterior building maintenance and commercial renovations. As the company grew in size, Ms.
                          Altman began pursuing larger construction projects, and changed the company’s name to reflect
                          this expansion of the core services offered by Pinnacle Construction &amp; Development
                          Group.
                        </p>
                        <p>
                          Under the 14 years of leadership of Ms. Altman, Pinnacle Construction has grown to a company
                          that tackles some of the most challenging work including hazardous demolition and specialized
                          construction requirements at NASA. Pinnacle Construction has grown from a small maintenance
                          provider to a full service construction management company, delivering over $10 Million in
                          construction projects annually.
                        </p>
                      </li>
                      <li>
                        <ul className="level-2">
                          <li>
                            <img src={lynlee} alt="lynlee"/>
                          </li>
                          <li>
                            <ul className="level-3">
                              <li>
                                <ul className="level-4">
                                  <li><strong>BONDING CAPACITY:</strong></li>
                                  <li>$15 Million per project</li>
                                  <li>$35 Million aggregate</li>
                                </ul>
                                <ul className="level-4">
                                  <li><strong>FEDERAL ID</strong> 34-1922987</li>
                                  <li><strong>CAGE CODE</strong> 3V7Z3</li>
                                  <li><strong>DUNS</strong> 146755603</li>
                                </ul>
                              </li>
                              <li><strong>NAICS Codes:</strong> 236220, 236115, 236116, 236210, 237110, 237120, 237130,
                                237210, 237310, 237990, 238110, 238160, 238190, 238210, 238220, 238290, 238330, 238350,
                                238910, 238990, 562211
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Testimonials/>
              <div className="leadership-section">
                <div className="leadership-wrapper">
                  <h3>Our Leaders</h3>
                  <ul>
                    <Leader id="leadership-lynlee-altman"
                            name="Lynlee Altman"
                            position="LEED AP-President"
                            link="/leadership/lynlee-altman/"
                            email="mailto:lynlee@pinnacleconstruction.bz"
                            linkedin="https://www.linkedin.com/in/lynleealtman"
                            img={lynleeHeadshot} />
                    <Leader id="leadership-scott-minerd"
                            name="Scott Minerd"
                            position="Vice President - LEED AP"
                            link="/leadership/scott-minerd/"
                            email="mailto:Scott@pinnacleconstruction.bz"
                            linkedin="https://www.linkedin.com/in/scott-minerd-leed-ap-ab00b033"
                            img={scottHeadshot} />
                  </ul>
                </div>
              </div>
              <Clients/>
            </article>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </body>
)

export default AboutPage
