import React, { Component } from 'react'
import styled from 'styled-components'

const NavWrapper = styled.nav `
  background: rgb(255,120,255);
  font-size: 14px;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const FlexWrapper = styled.div `
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

class Nav extends Component {
  render() {
    return ( 
      <NavWrapper>
        <FlexWrapper>
        <a href="./"><span className="nav-option"><strong> | home | </strong></span></a> 
        <a href="https://github.com/Jabernathy88/warhol-inv/blob/master/README.md" target="_blank"><span className="nav-option"><strong> | about | </strong></span></a>
        </FlexWrapper>
      </NavWrapper>
    )
  }
}

export default Nav 