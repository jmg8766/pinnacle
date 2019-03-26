import React from 'react'
import Footer from "../components/footer"
import Header from "../components/header"
import ServiceTile from "../components/serviceTile"
import Testimonials from "../components/Testimonials"
import ContractVehicle from "../components/contractVehicle"

import SeriousMen from "../images/SERVICES header.jpeg"
import Bulldozer from "../images/ThinkstockPhotos-474445071_web.jpg"
import Glen from "../images/glenn_research_center.png"
import Hardhats from "../images/hardhats.jpg"
import Blueprints from "../images/blueprints.jpg"
import USNG from "../images/USNG.png"
import NASA from "../images/NASA.png"
import GCA from "../images/GSA.jpg"

const ServicePage = () => {
  return (
    <body class="archive post-type-archive post-type-archive-service masthead-fixed list-view full-width footer-widgets">
      <div id="page-" className="hfeed site">
        <Header/>
        <div id="main" className="site-main">
          <section id="primary" className="content-area">
            <div id="content" className="site-content" role="main">
              <div className="post-thumbnail">
                <img className="attachment-pinnacle-full-width wp-post-image" src={SeriousMen} alt="pinnacle_construction_header01"/>
                <div className="shadow">
                  <span className="tagline">PINNACLE CONSTRUCTION: WE'RE EXPERTS IN THE UNUSUAL</span>
                </div>
              </div>
              <div class="page-header">
                <h1 class="page-title">Services</h1>
              </div>
              <div className="content-wrapper">
                <ServiceTile id="service-pinnacle-earthwork" img={Bulldozer} link="http://pinnacle.webdvmt.com/service/pinnacle-earthwork/" text="Pinnacle Earthwork"/>
                <ServiceTile id="service-multi-award-contracts" img={Glen} link="http://pinnacle.webdvmt.com/service/multi-award-contracts/" text="Multi-Award Contracts"/>
                <ServiceTile id="service-construction-management" img={Hardhats} link="http://pinnacle.webdvmt.com/service/construction-management/" text="Construction Management"/>
                <ServiceTile id="service-design-build" img={Blueprints} link="http://pinnacle.webdvmt.com/service/design-build/" text="Design / Build"/>
            </div>
            <div className="contract-vehicles">
              <div className="contract-vehicles-wrapper">
                <h3>Contract Vehicles</h3>
                <ul>
                  <ContractVehicle id="contract-vehicle-national-guard" img={USNG} link="http://www.nationalguard.mil/" alt="National Guard"/>
                  <ContractVehicle id="contract-vehicle-national-aeronautics-and-space-administration" img={NASA} link="http://www.nasa.gov/" alt="National Aeronautics and Space Administration"/>
                  <ContractVehicle id="contract-vehicle-u-s-general-services-administration" img={GCA} link="http://www.gsa.gov/" alt="U.S. General Services Administration"/>
                </ul>
              </div>
            </div>

            <div className="company-snapshot">
              <div className="company-snapshot-wrapper">
                <h3>Company Snapshot</h3>
                <ul className="level-1">
                  <li>
                    <ul className="level-2">
                      <li><strong>BONDING CAPACITY</strong></li>
                      <li>$15 Million per project</li>
                      <li>$35 Million aggregate</li>
                    </ul>
                    <ul className="level-2">
                      <li><strong>FEDERAL ID</strong>34-1922987</li>
                      <li><strong>CAGE CODE</strong>3V7Z3</li>
                      <li><strong>DUNS</strong>146755603</li>
                    </ul>
                  </li>
                  <li>
                    <strong>NAICS Codes:</strong> 236220, 236115, 236116, 236210, 237110, 237120, 237130, 237210, 237310, 237990, 238110, 238160, 238190, 238210, 238220, 238290, 238330, 238350, 238910, 238990, 562211
                  </li>
                </ul>
              </div>
            </div>

            <Testimonials/>

            <div className="past-performance-snapshot">
              <h3>
                <a href="/portfolio/">Past Performance Snapshot</a>
              </h3>
            </div>
          </div>
          </section>
        </div>
      </div>
      <Footer/>
    </body>
  )
}

export default ServicePage
