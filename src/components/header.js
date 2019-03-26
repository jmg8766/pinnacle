import React from "react"
import { Link } from "gatsby"

export default () =>
  <header id="masthead" className="site-header" role="banner">
    <div className="header-main">
      <nav id="primary-navigation" className="site-navigation primary-navigation standard" role="navigation">
        <div className="menu-main-menu-container">
          <ul id="menu-main-menu" className="nav-menu">
            <li id="menu-item-266" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-266">
              <Link to="/">Home</Link>
            </li>
            <li id="menu-item-25" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-8 current_page_item menu-item-25">
              <Link to="/about">About</Link>
            </li>
            <li id="menu-item-151" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-151">
              <Link to="/services">Services</Link>
            </li>
            <li id="menu-item-239" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-239">
          <Link to="/partners">Partners</Link>
          </li>
            <li id="menu-item-157" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-157">
          <Link to="/portfolio">Portfolio</Link>
          </li>
            <li id="menu-item-237" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-237">
          <Link to="/careers">Careers</Link>
          </li>
            <li id="menu-item-32" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-32">
          <Link to="/contact">Contact</Link>
          </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
