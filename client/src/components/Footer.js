import React, { Component } from 'react'
import styled from 'styled-components' 

const FooterWrapper = styled.footer `
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background: rgb(255,100,255);
  font-size: 14px;
`
const FlexWrapper = styled.div `
  padding: 0;
  margin: 0 auto;
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: space-between;
`

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FlexWrapper>
        <a href="./"><span className="nav-option"><strong> | home | </strong></span></a> 
        <a href="https://github.com/Jabernathy88/warhol-inv/blob/master/README.md"><span className="nav-option"><strong> | about | </strong></span></a>        </FlexWrapper>
      </FooterWrapper>
    )
  }
}

export default Footer 