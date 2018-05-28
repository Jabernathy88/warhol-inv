import React from 'react'
import GalleryCard from './GalleryCard';

const UserCard = (props) => {
  return (
    <div className="card amber lighten-5">
      <h4>User: {props.user.name} | id: {props.user.id}</h4>

      <p>
        Edit name: 
        <input type="text" 
          name="name" 
          value={props.user.name}
          onChange={(event) => props.handleUserChange(props.user, event)}
          onBlur={() => {props.updateUser(props.user)}
          }
          /> 

          <button className="btn-small pink darken-1"
            onClick={() => {props.deleteUser(props.user)}}>
            Delete user
          </button> 
      </p>

      <p>
        <button className="btn-small cyan"
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