import React from 'react'
import ReactLoading from 'react-loading'
import styled from 'styled-components'
import GalleryCard from './GalleryCard';

const UserCardWrapper = styled.div `
  background: rgb(250,250,250);
  margin: 2px 1px 3px;
  padding: 0 10px 10px;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  text-align: left;

  ul {
    margin-left: 18px; 
    padding-left: 0;
  }

  button {
    margin: 4px;
  }

  summary {
    width: 40%;
  }

  summary:hover {
    background: rgb(255,200,255);
  }
`

const UserCard = (props) => {
  return (
    <UserCardWrapper>
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
    </UserCardWrapper>
  )
}

export default UserCard