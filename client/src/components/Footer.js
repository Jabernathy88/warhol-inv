import React, { Component } from 'react'
import styled from 'styled-components' 

const FooterWrapper = styled.footer `
  background: rgb(255,100,255);
  font-size: 14px;
`
const FlexWrapper = styled.div `
  padding: 0 14px;
  display: flex;
  justify-content: space-between;
`

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FlexWrapper>
          <span> | home | </span> <span> | about | </span>
        </FlexWrapper>
      </FooterWrapper>
    )
  }
}

export default Footer 