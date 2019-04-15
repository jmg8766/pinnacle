import React from "react"
import { Helmet } from "react-helmet"
import Styled from "styled-components"
import Img from "gatsby-image"
import { colors } from "../utils/presets"

import Navbar from "./Navbar"
import Footer from "./Footer"

export const StyledSection = Styled.section`
  padding: 1vh 3vw;
  h1 { 
    display: inline-block;
    position: relative;
    width: 100%;
    color: ${colors.textRed};
    text-transform: uppercase;
    text-align: center;
  }
  h1:before {
      content: "";
      position: absolute;
      width: 10%;
      height: 1px;
      bottom: -5px;
      left: 45%;
      border-bottom: 1px solid black;
    }
  &.whiteBackground {
    background-color: white;
  }
  &.grayBackground {
    background-color: ${colors.gray};
  }
`
export const StyledArticle = Styled.article`
  -webkit-columns: 2 400px;
  -moz-columns: 2 400px;
  columns: 2 400px;
  padding: 3vw;
  max-width: 1200px;
  margin: auto;
  & article {
    margin-top: 20px;
    -webkit-columns: 2 100px;
    -moz-columns: 2 100px;
    columns: 2 100px;
  }
`

export const StyledHeaderImage = Styled(Img)`
  top: -80px;
  margin-bottom: -25vw;
  z-index: -1;
  opacity: 0.7;
`

const DarkBackground = Styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-image: linear-gradient(black, #8c8b8a);
  z-index: -999;
`

const GlobalStyles = Styled.div`
  & a { background-image: none; }
`

export default ({ children }) =>
  <GlobalStyles>
    <Helmet>
        <meta charSet="utf-8"/>
        <title>Pinnacle Construction</title>
    </Helmet>
    <DarkBackground/>
    <Navbar/>
    {children}
    <Footer/>
  </GlobalStyles>
