import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"

import Logo from "../images/logo.png"

const StyledLink = styled(Link)`
  float: left;
  display: block;
  height: 80px;
  line-height: 80px;
  color: #f2f2f2;
  text-align: center;
  padding: 0 16px;
  text-decoration: none;
  text-shadow: none;
  background-image: none;
  & img {
    margin: 0;
    max-height: 100%;
    width: auto;
  }
  &:hover {
    background-color: #ddd;
    color: black;
  }
  @media (max-width: 760px) { 
    &:not(:first-child) {
      display: none; 
    }
  }
`
const StyledBars = styled(FaBars)`
  color: white;
  height: 40px;
  width: 40px;
  position: absolute;
  right: 16px;
  top: 14px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`

const StyledNav = styled.nav`
  overflow: hidden;
  @media (max-width: 760px) {
    &.responsive {
      margin-bottom: 80px;
    }
    &.responsive ${StyledLink} {
      float: none;
      display: block;
      text-align: center;
    }
  }
`
export default () =>
  <StyledNav id="navbar">
    <StyledLink to="/"><img src={Logo} alt="logo"/></StyledLink>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/services">Services</StyledLink>
    <StyledLink to="/partners">Partners</StyledLink>
    <StyledLink to="/portfolio">Portfolio</StyledLink>
    <StyledLink to="/careers">Careers</StyledLink>
    <StyledLink to="/contact">Contact</StyledLink>
    <StyledBars onClick={ () => {
      let x = document.getElementById(`navbar`)
      x.classList.contains(`responsive`) ? x.classList.remove(`responsive`) : x.classList.add(`responsive`)
    }}/>
  </StyledNav>
