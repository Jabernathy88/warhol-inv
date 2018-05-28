import React from 'react'
import Header from './Header'
import Nav from './Nav'
import UsersListArticle from './UsersListArticle'
import Footer from './Footer' 

const HomePage = (props) => {

  return (
    <div id="content">
      <Header />
      <Nav /> 
      <div className="container">
        <h2>Recent Users</h2>
      </div>

      <UsersListArticle
        users={props.users}
        galleries={props.galleries}
        artworks={props.artworks}

        createUser={props.createUser}
        deleteUser={props.deleteUser}
        handleUserChange={props.handleUserChange}
        updateUser={props.updateUser}
        createGallery={props.createGallery}
        deleteGallery={props.deleteGallery}
        handleGalleryChange={props.handleGalleryChange}
        updateGallery={props.updateGallery}
        createArtwork={props.createArtwork}
        deleteArtwork={props.deleteArtwork}
        handleArtworkChange={props.handleArtworkChange}
        updateArtwork={props.handleArtworkChange}
        />

      <div className="container">
        <button className="waves-effect waves-light btn-large cyan darken-2"
          onClick={props.createUser}
          >
          Add New User
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage