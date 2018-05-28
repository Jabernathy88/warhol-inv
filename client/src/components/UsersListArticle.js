import React from 'react'
import UserCard from './UserCard'

const UsersListArticle = (props) => {

  return (
    <div className="container">

      {props.users.map((user) => {

        return (
          <UserCard
            user={user}
            key={user.id}
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
          />)
        })
      }
      
    </div>
  )
}

export default UsersListArticle