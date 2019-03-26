import React from 'react'
import "../css/layout.css"

import Header from "./header"
import Footer from "./footer"

export default ({ children }) =>
  <main>
    <Header/>
    {children}
    <Footer/>
  </main>
