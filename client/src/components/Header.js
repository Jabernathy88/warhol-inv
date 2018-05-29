import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="cyan lighten-4">
        {/* logo image here */}
        <h1>Art Banana</h1>
        <h3><span className="blue-grey-text">Inventory manager for art dealers and museum curators</span></h3>
      </header>
    )
  }
} 

export default Header 