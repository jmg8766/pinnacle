import React from "react"
import LeaderPageLayout from "../../components/LeaderPageLayout"
import { graphql } from "gatsby"

export default ({ data }) =>
  <LeaderPageLayout
    name="Lynlee Altman"
    position="LEED AP-President"
    email="mailto:lynlee@pinnacleconstruction.bz"
    linkedin="https://www.linkedin.com/in/lynleealtman"
    img={data.lynleeHeadshotImg.childImageSharp.fluid}
    testimonial={{
      quote: `"On a personal level, I have enjoyed working with the executive team at Pinnacle Construction. I have found the individuals at Pinnacle, including company President Lynlee Altman, to be of exceptional morale character."`,
      client: `-The Fowler Company`
    }}
  >
    <p>
      Lynlee Altman is the founder and president of Pinnacle Construction Development Group, Inc. While she refers to herself as an “accidental entrepreneur,” her drive, energy, and expertise have served her well.
    </p>
    <p>
      Prior to founding Pinnacle, Altman was an electrical engineer and marketer at leading corporations such as Keithley Instruments and Philips Healthcare. She successfully managed the development of new projects and product lines, and coordinated engineers and customer activity worldwide
    </p>
    <p>
      But small business and entrepreneurship is her passion, and Altman is more than willing to share her know-how. She’s offered tips and strategies for small business engagement, meeting with key executives and politicians, including the President of the United States. “If you’re not at the table, you’re on the menu” serves as her mantra as Altman counsels business owners and pushes them toward success in formal mentorship programs, at lunch-and-learn sessions with emerging entrepreneurs and through various organizations and universities.
    </p>
    <p>
      As a published author, Altman sticks to the subject she knows best. She’s written a white paper on ensuring jobsite security at construction sites. And she bylined “What Happens When Leaders Get Inspired: How One Woman Leads Her Company to Success,” the cover article for a 2013 issue of Construction Business Owners magazine.
    </p>
    <p>
      In addition to her advocacy efforts, Altman sits on the board of directors for the National Association of Small Disadvantaged Businesses. She also holds a board position at Entrepreneurs’ Organization, a global network of 10,000 business owners in 35 countries supporting entrepreneurial growth. It was recently revealed that the organization’s Cleveland member companies alone generate more than a billion dollars in annual revenue.
    </p>
    <p>
      Altman received her bachelor’s degree in Engineering from Johns Hopkins University and earned her MBA from Carnegie Mellon’s Tepper School of Business. Remaining current educationally, she obtained LEED certification from the U.S. Green Building Council in 2009 and is a perpetual student at Case Western Reserve University.
    </p>
    <p>
      2013 was a year of recognition. Altman earned the SBA Region V Women in Business Champion of the Year title, got named an Enterprising Woman of the Year by Enterprising Women Magazine and found herself in select company among Crain’s “40 Under 40.
    </p>
  </LeaderPageLayout>

export const query = graphql`query {
  lynleeHeadshotImg: file(relativePath: { eq: "lynlee-bio.png" }) {
    childImageSharp {
      fluid(maxWidth: 335) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}`
