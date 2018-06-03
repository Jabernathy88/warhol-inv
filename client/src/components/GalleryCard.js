import React from 'react';
import ArtworkCard from './ArtworkCard'

const GalleryCard = (props) => {
  return (
    <div className="card">
      
      <ul className="gallery-details" key={props.gallery.id}>

        <h5>Gallery: {props.gallery.name} | id: {props.gallery.id} </h5>

        <p>
          Edit name: <input type="text" 
            name="name" 
            value={props.gallery.name}
            onChange={(event) => props.handleGalleryChange(props.user, props.gallery, event)}
            onBlur={() => {
              props.updateGallery(props.gallery)}}
            /> 


            <button className="btn-small pink darken-1"
              onClick={() => {
                props.deleteGallery(props.gallery, props.user)
              }}>
              Delete gallery
            </button> 
        </p>

        <p>
          <button className="btn-small cyan"
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