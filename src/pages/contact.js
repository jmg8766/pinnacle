import React from "react"
import Img from "gatsby-image"
import Styled from "styled-components"
import Layout, { StyledHeaderImage, StyledSection } from "../components/Layout"

const StyledForm = Styled.form`
  borderRadius: 15px;
  padding: 20px;
  margin: auto;
  backgroundColor: white;
  .fancy {
    width: 100%;
    padding: 12px 10px;
    margin: 8px 0;
    display: block;
    border: 1px solid #ccc;
    borderRadius: 4px;
    boxSizing: border-box;
  }
  .submit {
    text-transform: uppercase;
  }
`

const ContactForm = () =>
  <StyledForm action="https://formspree.io/cvacca@pinnacleconstruction.bz" method="POST">
    <label>First Name</label>
    <input type="text" name="first_name" placeholder="Your first name.." className="fancy"/>
    <label>Last Name</label>
    <input type="text" name="last_name" placeholder="Your last name.." className="fancy"/>
    <label>Company Name</label>
    <input type="text" name="company_name" placeholder="Your company's name.." className="fancy"/>
    <label>Email</label>
    <input type="email" name="_replyto" placeholder="Your Email.." className="fancy"/>
    <label>Phone Number</label>
    <input type="text" name="phone_number" placeholder="123-456-7890" className="fancy"/>
    <label>Message</label>
    <textarea name="message" placeholder="Your message.." className="fancy"/>
    <input type="submit" value="submit" className="submit"/>
  </StyledForm>

const Container = Styled.div`
  .left, .right {
    float: left;
    padding: 10px;
  }
  .left {
    width: 40%;
    minWidth: 400px;
    padding: 0;
    margin: 0;
    @media(max-width: 1000px) {
      width: 90%;
    }
  }
  .right {
    width: 60%;
    margin: auto;
    @media(max-width: 1000px) {
      width: 100%;
    }
    div { padding: 20px; }
    .left { width: 50%; }
    .right { width: 50% }
  }
  :after {
    content: "";
    display: table;
    clear: both;
  }
`

export default ({ data }) =>
  <Layout>
      <StyledHeaderImage fluid={data.headerImg.childImageSharp.fluid}/>
      <StyledSection className="whiteBackground">
        <Container>
          <div className="left">
            <h1>Contact Us</h1>
            <ContactForm/>
          </div>
          <div className="right">
            <a href="https://www.google.com/maps/place/Pinnacle+Construction+%26+Development+Group,+Inc./@41.4157359,-81.7200747,12z/data=!4m5!3m4!1s0x8830e597f3bc10e3:0x79e25246d6fc5c3a!8m2!3d41.4157249!4d-81.6500309">
              <Img fluid={data.maps.childImageSharp.fluid} alt="map location of pinnacle"/>
            </a>
            <div className="left">
              <p>
                <strong>Headquarters</strong><br/>
                5755 Granger Rd.<br/>
                Cleveland, Ohio 44131<br/>
                Phone: 440.975.0981<br/>
                fax: 440.975.1015<br/>
              </p>
              <p>
                <strong>Satellite Locations</strong><br/>
                OHIO: Cleveland, Columbus, Dayton<br/>
                NASA: Washington, D.C.<br/>
                ALASKA: Anchorage<br/>
              </p>
            </div>
            <div className="right">
              <p>
                <strong>NAICS Codes:</strong><br/>
                236220, 236115, 236116, 236210, 237110, 237120, 237130, 237210, 237310, 237990, 238110, 238160, 238190, 238210, 238220, 238290, 238330, 238350, 238910, 238990, 562211
              </p>
            </div>
          </div>
        </Container>
      </StyledSection>
  </Layout>

export const query = graphql`query {
    headerImg: file(relativePath: { eq: "contactbanner.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1366) { ...GatsbyImageSharpFluid_withWebp }
        }
    },
    maps: file(relativePath: { eq: "googleMapsScreenshot.png" }) {
        childImageSharp {
            fluid(maxWidth: 800) { ...GatsbyImageSharpFluid_withWebp }
        }
    }
}`
