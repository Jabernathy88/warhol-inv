import React from 'react'
import GalleryCard from './GalleryCard';

const UserCard = (props) => {
  return (
    <div className="card">
      <p>
        <strong>User: {props.user.name}</strong> | id: {props.user.id}
      </p>

      <p>
        Edit name: 
        <input type="text" 
          name="name" 
          value={props.user.name}
          onChange={(event) => props.handleUserChange(props.user, event)}
          onBlur={() => {props.updateUser(props.user)}
          }
          /> 

        <span> 
          <button className="update-user-button"
            onClick={() => {props.deleteUser(props.user)}}>
            Delete user
          </button> 
        </span>
      </p>

      <p>
        <button className="add-detail-button"
          onClick={() => {
            console.log(props.user)
            props.createGallery(props.user)}}>
          Add new gallery
        </button> 
      </p>

      <details>
        <summary>Galleries: ({props.user.galleries.length})</summary>

        {props.user.galleries.map((gallery) => {
            return (
              <GalleryCard 
                gallery={gallery}
                key={gallery.id}
                createGallery={props.createGallery}
                deleteGallery={props.deleteGallery}
                handleGalleryChange={props.handleGalleryChange}
                updateGallery={props.updateGallery}
                createArtwork={props.createArtwork}
                deleteArtwork={props.deleteArtwork}
                handleArtworkChange={props.handleArtworkChange}
                updateArtwork={props.handleArtworkChange}
              />
            )
          })
        }
      </details>
    </div>
  )
}

export default UserCard