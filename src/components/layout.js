import React from 'react'
import "../styles/global.css"

import Header from "./header"
import Footer from "./footer"

export default ({ children }) =>
  <main>
    <Header/>
    {children}
    <Footer/>
  </main>
