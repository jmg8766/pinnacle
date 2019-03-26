import React from "react"
import ProjectPage from "../../components/ProjectPage"

import IMG from "../../images/crane.png"

export default () =>
  <ProjectPage
    img={IMG}
    title="NASA Plum Brook Station Space Power Facility Sewage Treatment Plant"
    prev={{
      link: "/portfolio/usace-access-control-point-dscc/",
      title: "USACE Access Control Point DSCC"
    }}
    next={{
      link: "/portfolio/cuyahoga-valley-national-park-system/",
      title: "Cuyahoga Valley National Park System"
    }}
  >
    <p>
      TYPE OF CONSTRUCTION | Horizontal Construction<br/>
      FINAL CONTRACT VALUE | $1 M
    </p>
    <p>
      At NASA Plum Brook Station Space Power Facility (SPF), Pinnacle was tasked with separating the storm and sanitary connections for the facility by demolishing the 3,200 square foot Sewage Treatment Plant and associated utilities.  A new grinder pump station, 5,900 linear feet of PVC underground piping, manholes and sanitary sewer force main were installed. While excavating to a depth of 21 feet, the discovery of rock required Pinnacle to jackhammer through 10 feet of rock and shale in order to install new storm basins and pumps to clean the storm drains. Bulkhead was installed at the storm inlets to separate the storm and sanitary systems and restoration was completed with new asphalt and lawn seeding.
    </p>
  </ProjectPage>
