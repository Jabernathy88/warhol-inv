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
    }
    catch (error) {
        console.log(error)
        await this.setState({error: error.message})
    }
  }

  createUser = async() => {
    const response = await axios.post(`/api/users`)
    const newUser = response.data
    const updatedUsers = [...this.state.users]

    updatedUsers.unshift(newUser)
    this.setState({users: updatedUsers})
  }

  deleteUser = async(user) => {
    try {
      await axios.delete(`/api/users/${user.id}`)

      const indexToDelete = this.state.users.indexOf(user)
      const updatedUsers = [...this.state.users]
      updatedUsers.splice(indexToDelete, 1)

      this.setState({users: updatedUsers})
    } catch (error) {
      console.log(error)
    }
  }

  handleUserChange = (user, event) => {
    const updatedUsers = [...this.state.users]

    const userToUpdate = updatedUsers.find((updatedUser) => {
      return updatedUser._id === user._id
    })

    userToUpdate[event.target.name] = event.target.value
    this.setState({users: updatedUsers})
  }

  updateUser = async(user) => {
    try {
      await axios.patch(`/api/users/${user.id}`, user)
    } catch (error) {
      console.log(error)
    }
  }


  createGallery = async(user) => {
    const response = await axios.post(`/api/users/${user.id}/galleries`)
    const newGallery = response.data
    console.log(response.data)


  }


    // const userWithNewGallery = response.data
    // console.log("This updatedUser is: ", userWithNewGallery)

    // const updatedUsers = [...this.state.users]

    // const userToUpdate = updatedUsers.find((newUser) => {
    //   return newUser._id === user._id
    // })
    // userToUpdate.galleries = userWithNewGallery.galleries

    // this.setState({users: updatedUsers})
  
  
  // D 
  // U

  render() {
    return (
      <HomePage
        users={this.state.users}
        createUser={this.createUser}
        deleteUser={this.deleteUser}
        handleUserChange={this.handleUserChange}
        updateUser={this.updateUser}
        createGallery={this.createGallery}
        // handleGalleryChange={this.handleGalleryChange}
        // updateGallery={this.updateGallery}
      />
    )
  }
}

export default App