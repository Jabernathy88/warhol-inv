import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return ( 
      <nav>
        <div className="nav-wrapper">
        <a href="#!" className="brand-logo"><i className="material-icons">stars</i></a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="./">Home</a></li>
          <li><a href="https://github.com/Jabernathy88/warhol-inv/blob/master/README.md">About</a></li>
        </ul>

        <ul className="sidenav" id="mobile-demo">
          <li><a href="./">Home</a></li>
          <li><a href="https://github.com/Jabernathy88/warhol-inv/blob/master/README.md">About</a></li>
        </ul>

        </div>
      </nav>
    )
  }
}

export default Nav 