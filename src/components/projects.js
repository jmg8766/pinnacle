import React from 'react'
import { Link } from "gatsby"

import NASAB2 from "../images/NASA-B2.jpeg"
import GSAPotter from "../images/GSA-Potter.jpeg"
import GSACelebrezze from "../images/GSA-Celebrezze.jpeg"
import NAVFAC from "../images/NAVFAC.jpeg"
import SteamRoller from "../images/image001.jpg"
import NASASARF from "../images/NASA-SaRF.jpeg"
import NPSRockside from "../images/NPS-Rockside.jpeg"
import USACE from "../images/USACE.jpeg"
import Crane from "../images/crane.png"
import Bridge from "../images/bridge.png"

let projectList = [
  { "id": "project-nasa-b2-test-facility-accumulator-tank-relocation.js",
    "img": NASAB2,
    "link": "/portfolio/nasa-b2-test-facility-accumulator-tank-relocation",
    "title": "NASA-B2 Test Facility Accumulator Tank Relocation",
    "description": "Location:&nbsp;NASA GRC Plum Brook Station Facility, Sandusky, OH Scope of Work: This project consisted of the re-location of five (5) existing accumulators and installing them on the new foundations near the B-2 Test facility. NASA’s Plum Brook Station’s Spacecraft Propulsion Research Facility (B-2) was designed to test full-scale rocket engines and upper stage launch vehicles…"
  },
  { "id": "project-gsa-potter-stewart-federal-bldg-renovation-of-judicial-rooms",
    "img": GSAPotter,
    "link": "/portfolio/gsa-potter-stewart-federal-bldg-renovation-of-judicial-rooms/",
    "title": "GSA Potter-Stewart Federal Bldg. Renovation of Judicial Rooms",
    "description": "Project Size: 3,500 square feet Project Scope: Interior build-out of 3,500 square feet of office space including Judges’ chambers, lobbies, law libraries and clerk work areas. The remodel and modernization project included abatement, electrical, plumbing, ceiling, painting, flooring and finish carpentry work. Actual Budget: $255,000 Phasing Plan: A phasing plan was required for this project… "
  },
  { "id": "project-gsa-celebrezze-federal-bldg-lobby-renovation",
    "img": GSACelebrezze,
    "link": "/portfolio/gsa-celebrezze-federal-bldg-lobby-renovation/",
    "title": "GSA Celebrezze Federal Bldg. Lobby Renovation",
    "description": "Project Size: 20,000 square feet Project Scope: The AJC Federal building had an aging metal panel ceiling, which had warped over the years. 275 panels were marked and removed from the ceiling, cleaned and straightened. The panels were reinforced with angle-irons to avoid the warping in the future. All panels were reinstalled in the same… "
  },
  { "id": "project-navfac-design-deconstruction-restoration-retention-basin",
    "img": NAVFAC,
    "link": "/portfolio/navfac-design-deconstruction-restoration-retention-basin/",
    "title": "NAVFAC Design Deconstruction, Restoration & Retention Basin",
    "description": "Location: Naval Support Activity, Mechanicsburg, PA Scope of Work: An existing timber frame structure, approximately 120,000 square feet in size was deconstructed. This historic structure was built in 1946. The project included timber reclamation of old growth wood with care taken to salvage the massive timber structures. The existing concrete pad, marking the footprint of… "
  },
  { "id": "project-nasa-main-gate-phases-i-ii",
    "img": SteamRoller,
    "link": "portfolio/nasa-main-gate-phases-i-ii/",
    "title": "NASA Main Gate Phases I & II",
    "description": "Project Size: 2,500 square feet Actual Budget: $7.5 mil Project Scope: Main Gate Phase I: Phase I involved site modification and preparation for a new main gate including demolition of guard houses and utilities. The project included infrastructure improvement, demolition, excavation, grading, compaction, extended storm, sanitary & gas, 2” force main sanitary line installation, site… "
  },
  { "id": "project-nasa-sarf-shipping-receiving-facility",
    "img": NASASARF,
    "link": "/portfolio/nasa-sarf-shipping-receiving-facility/",
    "title": "NASA SaRF (Shipping & Receiving Facility)",
    "description": "Project Size: 12,700 square feet Project Scope: Pinnacle constructed the 12,700 sqft Shipping and Receiving Facility (SaRF) which facilitates the receiving, documenting, screening and distributing of materials and equipment throughout Lewis Field, as well as the inspecting and sorting of incoming mail. As the final of three planned phases to Lewis Fields’ main gate security… "
  },
  { "id": "project-nps-rockside-boarding-area-parking-lot-installation-eco-system-balance",
    "img": NPSRockside,
    "link": "/portfolio/nps-rockside-boarding-area-parking-lot-installation-eco-system-balance/",
    "title": "NPS Rockside Boarding Area- Parking Lot Installation & Eco System Balance",
    "description": "Location: Cuyahoga Valley National Park, Independence, OH Scope of Work: Cuyahoga Valley National Park updated its facility to accommodate the increased utilization but also to meet sustainability goals, with special consideration to the need of the ecosystem and energy requirements. Pinnacle installed two separate parking areas to achieve the access issues while protecting the nearby… "
  },
  { "id": "project-usace-access-control-point-dscc",
    "img": USACE,
    "link": "/portfolio/usace-access-control-point-dscc/",
    "title": "USACE Access Control Point DSCC",
    "description": "USACE ACCESS CONTROL POINT DSCC (Defense Supply Center Columbus) TYPE OF CONSTRUCTION | New Construction, Horizontal Construction, Vertical Construction, Site-work and Utilities. FINAL CONTRACT VALUE | $10.5M At the Defense Supply Center in Columbus, Ohio, Pinnacle transformed 15 acres of grassy fields into a state-of-the-art main gate which serves as the sole entrance for the… "
  },
  { "id": "project-plum-brooks-space-power-facility",
    "img": Crane,
    "link": "/portfolio/plum-brooks-space-power-facility/",
    "title": "NASA Plum Brook Station Space Power Facility Sewage Treatment Plant",
    "description": "At NASA Plum Brook Station Space Power Facility (SPF), Pinnacle was tasked with separating the storm and sanitary connections for the facility by demolishing the 3,200 square foot Sewage Treatment Plant and associated utilities."
  },
  { "id": "project-cuyahoga-valley-national-park-system",
    "img": Bridge,
    "link": "/portfolio/cuyahoga-valley-national-park-system/",
    "title": "Cuyahoga Valley National Park System",
    "description": "Cuyahoga Valley National Park updated its facility to accommodate increased utilization but also to meet sustainability goals, with special consideration to the needs of the ecosystem and energy requirements. Pinnacle installed two separate parking areas to achieve the access issues while protecting the nearby water."
  },
]

const ProjectTile = ({ id, img, link, title, description }) =>
  <li id={id}>
    <img src={img} className="attachment-pinnacle-full-width size-pinnacle-full-width wp-post-image" alt=""/>
    <div className="the-shadow-knows">
      <h4>
        <Link to={link}>{title}</Link>
      </h4>
      <div className="the-excerpt" style={{ fontSize: `14px` }}>
        {description}
        <br/>
        <Link to={link} rel="next" style={{ background: "#80000e", color: "white", width: "auto", maxWidth: "30%", padding: "6px 28px", textAlign: "center", borderRadius: "5px", float: `right`}}>
          View Article
        </Link>
      </div>
    </div>
  </li>

const Projects = () =>
  <div className="projects">
    <div className="projects-wrapper">
      <ul>
        {projectList.map(({ id, img, link, title, description }) =>
          <ProjectTile id={id} img={img} link={link} title={title} description={description}/>
        )}
      </ul>
    </div>
  </div>

export default Projects
