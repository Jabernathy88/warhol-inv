import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header `
  background: rgb(120,255,255);
`

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <h1>Art Banana</h1>
        <h3 className="text-gray" >Inventory manager for dealers and collectors of great art.</h3>
      </HeaderWrapper>
    )
  }
} 

export default Header 