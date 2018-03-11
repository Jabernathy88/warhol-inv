import React, {Component} from 'react'
import axios from 'axios'
import HomePage from './components/HomePage'

class App extends Component {
  state = {
    users: []
  }

  // componentWillMount

  render() {
    return (
      <HomePage
        // componentWillMount={this.componentWillMount}
        // users={this.state.users}
        // createUser={this.createUser}
        // deleteUser={this.deleteUser}
        // handleUserChange={this.handleUserChange}
        // updateUser={this.updateUser}
        // createGallery={this.createGallery}
        // handleGalleryChange={this.handleGalleryChange}
        // updateGallery={this.updateGallery}
      />
    )
  }
}

export default App