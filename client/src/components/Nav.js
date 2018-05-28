import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return ( 
      <nav className="nav-extended pink lighten-1">

        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center"><i className="material-icons">stars</i></a>

          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="./"><span className="blue-grey-text text-lighten-4">Home</span></a></li>
            <li><a href="https://github.com/Jabernathy88/warhol-inv/blob/master/README.md">About</a></li>
          </ul>

          <ul className="sidenav" id="mobile-demo">
            <li><a href="./"><span className="blue-grey-text text-lighten-4">Home</span></a></li>
            <li><a href="https://github.com/Jabernathy88/warhol-inv/blob/master/README.md">About</a></li>
          </ul>
        </div>

        <div className="nav-content">
          <a className="btn-floating btn-large halfway-fab waves-effect waves-light cyan darken-1">
            <i className="material-icons">add</i>
          </a>
        </div>

      </nav>
    )
  }
}

export default Nav 