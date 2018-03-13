import React, {Component} from 'react'
import axios from 'axios'
import HomePage from './components/HomePage'

class App extends Component {
  state = {
    users: [],
  }

  componentWillMount() {
    this.getUsersGalleriesAndArtworks()
  }

  getUsersGalleriesAndArtworks = async () => {
    try {
        const usersResponse = await axios.get(`/api/users`)
        
        await this.setState({
            users: usersResponse.data
        })
        console.log(this.state.users)

    }
    catch (error) {
        console.log(error)
        await this.setState({error: error.message})
    }
  }

  render() {
    return (
      <HomePage
        users={this.state.users}
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