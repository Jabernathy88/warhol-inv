import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header `
  background: rgb(120,255,255);
`

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <h1>Warhol.inv</h1>
        <span> <strong> artist inventory manager </strong></span>
      </HeaderWrapper>
    )
  }
} 

export default Header 