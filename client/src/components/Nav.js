import React, { Component } from 'react'
import styled from 'styled-components'

const NavWrapper = styled.nav `
  background: rgb(255,120,255);
  font-size: 14px;
`

const FlexWrapper = styled.div `
  display: flex;
  justify-content: space-around;
`

class Nav extends Component {
  render() {
    return ( 
      <NavWrapper>
        <FlexWrapper>
        <span> | home | </span> <span> | listview | </span> <span> | fullview | </span>
        </FlexWrapper>
      </NavWrapper>
    )
  }
}

export default Nav 