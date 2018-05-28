import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="cyan lighten-4">
        <h1>Art Banana</h1>
        <h3><span className="blue-grey-text">Inventory manager for dealers and collectors of great art.</span></h3>
        <div className="bg-header"></div>
      </header>
    )
  }
} 

export default Header 