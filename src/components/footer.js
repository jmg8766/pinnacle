import React from "react"

const Footer = () => (
  <footer id="colophon" className="site-footer" role="contentinfo" style={{marginTop: "20px"}}>
    <div className="site-info">
      <p>
        5755 Granger Road, Suite 110, Cleveland, Ohio 44131 ·{` `}
        <a href="tel:440.975.0981">440.975.0981</a>
        Office ·{` `}
        <a>440.975.1015</a>
        Fax
      </p>
      <div id="pinnacle_social_widget-2" className="widget widget_pinnacle_social_widget">
        <ul id="social-links">
          <li><a className="genericon genericon-facebook-alt"
                 href="https://www.facebook.com/Pinnacle-Construction-165785193481629/?fref=nf" target="_blank"/></li>
          <li><a className="genericon genericon-linkedin-alt"
                 href="https://www.linkedin.com/company/2217011?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A2217011%2Cidx%3A2-1-2%2CtarId%3A1464793561814%2Ctas%3APinnacle%20Construction"
                 target="_blank"/></li>
          <li><a className="genericon genericon-twitter-alt" href="https://twitter.com/Pinnaclebuilds" target="_blank"/>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
