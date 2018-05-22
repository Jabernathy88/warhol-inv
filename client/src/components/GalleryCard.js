import React from 'react';
import ArtworkCard from './ArtworkCard'

const GalleryCard = (props) => {
  return (
    <div>
      
      <ul className="gallery-details" key={props.gallery.id}>

        <p><strong>Gallery: {props.gallery.name}</strong> | id: {props.gallery.id} </p>

        <p>
          Edit name: <input type="text" 
            name="name" 
            value={props.gallery.name}
            onChange={(event) => props.handleGalleryChange(props.user, props.gallery, event)}
            onBlur={() => {
              props.updateGallery(props.gallery)}}
            /> 


          <span> 
            <button className="update-user-button"
              onClick={() => {
                props.deleteGallery(props.gallery, props.user)
              }}>
              Delete gallery
            </button> 
          </span>
          
        </p>

        <p>
          <button className="update-user-button"
            onClick={() => {
              props.createArtwork(props.gallery, props.user)
              }}>
            Add new artwork
          </button> 
        </p>

        <details>
          <summary>Artworks: ({props.gallery.artworks.length})</summary>

          {props.gallery.artworks.map((artwork) => {
              return (
                <ArtworkCard 
                  artwork={artwork}
                  key={artwork.id}
                  createArtwork={props.createArtwork}
                  deleteArtwork={props.deleteArtwork}
                  handleArtworkChange={props.handleArtworkChange}
                  updateArtwork={props.handleArtworkChange}
                />

      )
    })
  }
</details>
</ul>
    </div>
  );
};

export default GalleryCard