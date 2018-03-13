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
  
  deleteGallery = async(gallery) => {
    try {
      await axios.delete(`/api/galleries/${gallery.id}`)

      // const indexToDelete = this.state.users.indexOf(user)
      // const updatedUsers = [...this.state.users]
      // updatedUsers.splice(indexToDelete, 1)

      // this.setState({users: updatedUsers})
    } catch (error) {
      console.log(error)
    }
  }

  handleGalleryChange = (user, gallery, event) => {
    const updatedUsers = [...this.state.users]
    const userToUpdate = updatedUsers.find((newUser) => {
      return newUser.id === user.id
    })
    const updatedGalleries = [...userToUpdate.galleries]
    const galleryToUpdate = updatedGalleries.find((newGallery) => {
      return newGallery.id === gallery.id
    })
    galleryToUpdate[event.target.name] = event.target.value
    userToUpdate.galleries = updatedGalleries
    this.setState({users: updatedUsers})
  }

  updateGallery = async(gallery) => {
    console.log("Gallery being sent:", gallery)
    try {
      const response = await axios.patch(`/api/galleries/${gallery.id}`, gallery)
      console.log("This response.data was: ", response.data)

    } catch (error) {
      console.log(error)
    }
  }



  render() {
    return (
      <HomePage
        users={this.state.users}
        createUser={this.createUser}
        deleteUser={this.deleteUser}
        handleUserChange={this.handleUserChange}
        updateUser={this.updateUser}
        createGallery={this.createGallery}
        deleteGallery={this.deleteGallery}
        handleGalleryChange={this.handleGalleryChange}
        updateGallery={this.updateGallery}
      />
    )
  }
}

export default App