import React from 'react'
import styled from 'styled-components'

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
        {/* | (id# {props.user.id}) */}
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
            onClick={() => {props.deleteUser(props.user)}}
            >
            Delete user
          </button> 
        </span>
      </p>

      <p>
        <button className="add-detail-button"
          onClick={() => {
            console.log(props.user)
            props.createGallery(props.user)
            }}>
          Add new gallery
        </button> 
      </p>

      <details>
        <summary>Galleries: ({props.user.galleries.length})</summary>

        {props.galleries.map((gallery) => {
            return (

              <ul className="gallery-details" key={gallery.id}>

                <p><strong>Gallery: {gallery.name}</strong> | id: {gallery.id} </p>

                <p>
                  Edit name: <input type="text" 
                    name="name" 
                    value={gallery.name}
                    onChange={(event) => props.handleGalleryChange(props.user, gallery, event)}
                    onBlur={() => {
                      props.updateGallery(gallery)}}
                    /> 


                  <span> 
                    <button className="update-user-button"
                      onClick={() => {
                        props.deleteGallery(gallery, props.user)
                      }}>
                      Delete gallery
                    </button> 
                  </span>
                  
                </p>

                <p>
                  <button className="update-user-button"
                    onClick={() => {
                      props.createArtwork(gallery, props.user)
                      }}>
                    Add new artwork
                  </button> 
                </p>

                <details>
                  <summary>Artworks: ({gallery.artworks.length})</summary>

                  {gallery.artworks.map((artwork) => {
                      return (

                        <ul className="artwork-list" key={artwork.id}>

                          <p><strong>Artwork: {artwork.name}</strong> | id: {artwork.id} </p>

                          <details> 
                            <summary>Preview:</summary>
                            <ul>
                              <p>Edit title: 
                              <input type="text" 
                                name="name" 
                                value={artwork.name}
                                onChange={(event) => props.handleArtworkChange(artwork, props.user.id, event)}
                                onBlur={() => {
                                  props.updateArtwork(artwork)}}
                                />
                                
                                <span> 
                                  <button className="update-user-button"
                                  onClick={() => { 
                                    props.deleteArtwork(artwork, props.user) 
                                  }}>
                                  Delete artwork
                                  </button> 
                                </span>
                              </p>
                              <p>Edit artist: 
                              <input className="artist-input"
                                type="text" 
                                name="name" 
                                value={artwork.artist}
                                onChange={(event) => props.handleChange(props.user, event)}
                                // onBlur={() => {props.updateArtwork(props.user)}}
                                />
                              </p>

                              <p>Edit image: </p>
                              <ul>
                                <img height="200px" alt="work of art, small" src={artwork.img_url}/>
                              </ul>
                            </ul>
                          </details>

                        </ul>

                      )
                    })
                  }
                </details>
              </ul>
            )
          })
        }
      </details>
    </UserCardWrapper>
  )
}

export default UserCard