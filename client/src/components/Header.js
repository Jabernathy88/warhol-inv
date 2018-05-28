import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="cyan lighten-4">
        <h1>Art Banana</h1>
        <h3 className="text-gray" >Inventory manager for dealers and collectors of great art.</h3>
        <div className="bg-header"></div>
      </header>
    )
  }
} 

export default Header 