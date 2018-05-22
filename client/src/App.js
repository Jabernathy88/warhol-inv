import React, {Component} from 'react'
import axios from 'axios'
import HomePage from './components/HomePage'

class App extends Component {
  state = {
    users: [],
    galleries: [],
    artworks: []
  }

  // call ajax and set state
  componentWillMount() {
    this.getUsers()
    this.getGalleries()
    this.getArtworks()
  }
  getUsers = async () => {
    try {
        const usersResponse = await axios.get(`/api/users`)
        await this.setState({users: usersResponse.data})
    }
    catch (error) {
        console.log(error)
        await this.setState({error: error.message})
    }
  }
  getGalleries = async () => {
    try {
        const galleriesResponse = await axios.get(`/api/galleries`)
        await this.setState({galleries: galleriesResponse.data})
    }
    catch (error) {
        console.log(error)
        await this.setState({error: error.message})
    }
  }
  getArtworks = async () => {
    try {
        const artworksResponse = await axios.get(`/api/artworks`)
        await this.setState({artworks: artworksResponse.data})
        console.log(this.state)
    }
    catch (error) {
        console.log(error)
        await this.setState({error: error.message})
    }
  }

  // crud users
  createUser = async() => {
    const response = await axios.post(`/api/users`)
    const newUser = response.data
    const updatedUsers = [...this.state.users]

    updatedUsers.unshift(newUser)
    this.setState({users: updatedUsers})
  }
  handleUserChange = (user, event) => {
    const updatedUsers = [...this.state.users]

    const userToUpdate = updatedUsers.find((updatedUser) => {
      return updatedUser.id === user.id
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

  // crud galleries
  createGallery = async(user) => {
    const response = await axios.post(`/api/users/${user.id}/galleries`)
    const userWithNewGallery = response.data
    const updatedUsers = [...this.state.users]

    const userToUpdate = updatedUsers.find((newUser) => {
      return newUser.id === user.id
    })
    userToUpdate.galleries = userWithNewGallery.galleries
    
    this.setState({users: updatedUsers})
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
    console.log(updatedGalleries)
    galleryToUpdate[event.target.name] = event.target.value
    userToUpdate.galleries = updatedGalleries
    this.setState({users: updatedUsers})
  }
  updateGallery = async(gallery) => {
    try {
      const response = await axios.patch(`/api/galleries/${gallery.id}`, gallery)
    } catch (error) {
      console.log(error)
    }
  }
  deleteGallery = async(gallery, user) => {
    try {
      const response = await axios.delete(`/api/galleries/${gallery.id}`)
      const userWithFewerGalleries = response.data
      console.log("The user deleting a gallery is: ", userWithFewerGalleries)

      const updatedUsers = [...this.state.users]

      const userToUpdate = updatedUsers.find((newUser) => {
        return newUser.id === user.id
      })
      userToUpdate.galleries = userWithFewerGalleries.galleries

      this.setState({users: updatedUsers})
    } catch (error) {
      console.log(error)
    }
  }

  // crud artworks
  createArtwork = async(gallery, user) => {
    const response = await axios.post(`/api/galleries/${gallery.id}/artworks`)
    const userWithNewArtwork = response.data
    console.log(userWithNewArtwork)

    const updatedUsers = [...this.state.users]

    const userToUpdate = updatedUsers.find((newUser) => {
      return newUser.id === user.id
    })
    userToUpdate.galleries = userWithNewArtwork.galleries
    
    this.setState({users: updatedUsers})
  }
  handleArtworkChange = (artwork, userId, event) => {
    let galleryId = artwork.gallery_id
    let artworkId = artwork.id
    // const updatedUsers = [...this.state.users]

    // let userToUpdate = {}
    // let updatedGalleries = []
    // let updatedArtworks = []
    
    // userToUpdate = updatedUsers.find((newUser) => {
    //   return newUser.id === userId
    // })
    // updatedGalleries = [...userToUpdate.galleries]
    // const galleryToUpdate = updatedGalleries.find((newGallery) => {
    //   return newGallery.id === galleryId
    // })
    // updatedArtworks = [...galleryToUpdate.artworks]
    // const artworkToUpdate = updatedArtworks.find((newArtwork) => {
    //   return newArtwork.id === artworkId
    // })

    // artworkToUpdate[event.target.name] = event.target.value
    // galleryToUpdate.artworks = updatedArtworks
    // userToUpdate.galleries = updatedGalleries
    // this.setState({users: updatedUsers})
  }
  updateArtwork = async(artwork) => {
    try {
      const response = await axios.patch(`/api/artworks/${artwork.id}`, artwork)
    } catch (error) {
      console.log(error)
    }
  }
  deleteArtwork = async(artwork, user) => {
    try {
      const response = await axios.delete(`/api/artworks/${artwork.id}`)
      const userWithFewerArtworks = response.data
      console.log("The user deleting a gallery is: ", userWithFewerArtworks)

      const updatedUsers = [...this.state.users]

      const userToUpdate = updatedUsers.find((newUser) => {
        return newUser.id === user.id
      })
      userToUpdate.galleries = userWithFewerArtworks.galleries

      this.setState({users: updatedUsers})
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
      <HomePage
        users={this.state.users}
        galleries={this.state.galleries}
        artworks={this.state.artworks}
        createUser={this.createUser}
        deleteUser={this.deleteUser}
        handleUserChange={this.handleUserChange}
        updateUser={this.updateUser}
        createGallery={this.createGallery}
        deleteGallery={this.deleteGallery}
        handleGalleryChange={this.handleGalleryChange}
        updateGallery={this.updateGallery}
        createArtwork={this.createArtwork}
        deleteArtwork={this.deleteArtwork}
        handleArtworkChange={this.handleArtworkChange}
        updateArtwork={this.updateArtwork}
      />
      </div>
    )
  }
}

export default App