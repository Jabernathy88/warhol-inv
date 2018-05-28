import React from 'react'
import UserCard from './UserCard'

const UsersListArticle = (props) => {

  return (
    <article>

      <div>
        <strong>recent users</strong>

        <button 
          onClick={props.createUser}
          >
          Add new user
        </button>

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
    </article>
  )
}

export default UsersListArticle