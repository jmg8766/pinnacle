import React from "react"
import LeaderPageLayout from "../../components/LeaderPageLayout"
import { graphql } from "gatsby"

export default ({ data }) =>
  <LeaderPageLayout
    name="Scott Minerd"
    position="Vice President - LEED AP"
    email="mailto:Scott@pinnacleconstruction.bz"
    linkedin="https://www.linkedin.com/in/scott-minerd-leed-ap-ab00b033"
    img={data.scottHeadshotImg.childImageSharp.fluid}
    testimonial={{
      quote: `"Pinnacle's exemplary "can-do" attitude is evident at every level - from upper management all the way down to the team located in the construction job trailer. It is obvious through their actions that Pinnacle is a solid organization built up on sound core values."`,
      client: `-Defense Supply Center Columbus`
    }}
  >
    <p>
      Scott Minerd’s position as a principal at Pinnacle Construction & Development puts him at the apex of a 20-year career that’s taken him from superintendent, project manager, director of operations and vice president for several construction firms, and president of his own. In fact, Minerd has started and grown several small construction industry businesses to their full potential.
    </p>
    <p>
      He also serves on the board of a construction company dedicated to sustainable building practices. Minerd offers his expertise on front-end development and LEED compliance for design/build improvements and consulting projects.
    </p>
    <p>
      Among the countless challenges he’s undertaken over the course of his career are federal judicial chambers, a U.S. Attorneys office with seven levels of security, strip shopping centers, big-box stores for national retailers and a 23-story bank building in the heart of a major city.
    </p>
    <p>
      Every step of the way, Minerd has exhibited his talent for leadership and P/L success, and has shown enthusiasm and passion for the business. He’s also built a longstanding reputation for integrity. When Minerd is involved on a project, customers can be confident that their best interests are always his priority.
    </p>
    <p>
      He makes the same demands of his people. He seeks out and nurtures team members who can meet the highest standards of integrity for every project and in every customer interaction.
    </p>
    <p>
      Minerd holds a bachelor’s degree in Civil Engineering from the Ohio State University, with independent study in structures. He has obtained and maintains his LEED certification for Building Design and Construction and has completed construction specific training, including all facets of OSHA 1926.
    </p>
  </LeaderPageLayout>

export const query = graphql`query {
  scottHeadshotImg: file(relativePath: { eq: "scott-headshot.png" }) {
    childImageSharp {
      fluid(maxWidth: 335) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}`
