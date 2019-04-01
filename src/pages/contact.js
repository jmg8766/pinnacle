import React from 'react'
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"

import MapContainer from "../components/mapContainer"

const ContactForm = () => {
  const inputStyle = {
    width: "100%",
    padding: "12px 10px",
    margin: "8px 0",
    display: "block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box"
  }
  return (
      <form action="https://formspree.io/justin.gottshall@gmail.com" method="POST">
        <label>First Name</label>
        <input type="text" name="first_name" placeholder="Your first name.." style={inputStyle}/>
        <label>Last Name</label>
        <input type="text" name="last_name" placeholder="Your last name.." style={inputStyle}/>
        <label>Company Name</label>
        <input type="text" name="company_name" placeholder="Your company's name.." style={inputStyle}/>
        <label>Email</label>
        <input type="email" name="_replyto" placeholder="Your Email.." style={inputStyle}/>
        <label>Phone Number</label>
        <input type="text" name="phone_number" placeholder="123-456-7890" style={inputStyle}/>
        <label>Message</label>
        <textarea name="message" style={inputStyle} placeholder="Your message.."/>
        <input type="submit" value="submit"/>
      </form>
  )
}

export default ({ data }) =>
  <div id="contact-us" className="page-template page-template-_page-templates page-template-Contact page-template-_page-templatesContact-php page page-id-22 masthead-fixed full-width footer-widgets singular">
    <div id="page-contact-us" className="hfeed site">
      <Header/>
      <div id="main" className="site-main">
        <div id="main-content" className="main-content">
          <div id="primary" className="content-area">
            <div id="content" className="site-content" role="main">
              <article id="post-22" className="post-22 page type-page status-publish has-post-thumbnail hentry">
                <div className="post-thumbnail">
                  <Img fluid={data.banner.childImageSharp.fluid} alt="pinnacle_construction_header01" style={{ position: `relative`, top: `-6vw` }}/>
                  <div className="shadow"/>
                </div>
                <section style={{ width: "90%" }}>
                  <div style={{ float: "left", width: "40%", minWidth: "400px", padding: "0", margin: "0"}}>
                    <h1 className="entry-title">Contact Us</h1>
                    <div style={{ borderRadius: "15px", padding: "20px", margin: "20px", backgroundColor: "#ffffff" }}>
                      <ContactForm/>
                    </div>
                  </div>
                  <div style={{float: "left", marginTop: "36px" }}>
                    <MapContainer/>
                  </div>
                </section>
                <div style={{clear:"both"}}/>
                <div className="entry-secondary-content">
                  <div className="section-wrapper">
                    <div id="content-section-2" className="entry-content">
                      <ul>
                        <li><strong>Headquarters</strong>
                          <ul>
                            <li>5755 Granger Rd.</li>
                            <li>Cleveland, Ohio 44131</li>
                            <li>
                              Phone: <a href="tel:440.975.0981">440.975.0981</a>
                            </li>
                            <li>fax: 440.975.1015</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Satellite Locations</strong>
                          <ul>
                            <li>OHIO Cleveland | Columbus | Dayton</li>
                            <li>NASA Washington, D.C.</li>
                            <li>ALASKA Anchorage</li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li>
                              <strong>DUNS Number:</strong> 146755603
                            </li>
                            <li>
                              <strong>CAGE Code:</strong> 3V7Z3
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>NAICS Codes:</strong>
                          <ul>
                            <li>236220</li>
                            <li>237210</li>
                            <li>238290</li>
                            <li>236210</li>
                            <li>238110</li>
                            <li>238330</li>
                            <li>236115</li>
                            <li>238160</li>
                            <li>238350</li>
                            <li>236116</li>
                            <li>238190</li>
                            <li>238910</li>
                            <li>237110</li>
                            <li>238310</li>
                            <li>238990</li>
                            <li>237120</li>
                            <li>238220</li>
                            <li>562211</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
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

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "contactbanner.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
