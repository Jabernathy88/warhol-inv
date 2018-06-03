import React from 'react'

const ArtworkCard = (props) => {
  return (
    <div className="card">
      <ul className="props.artwork-list" key={props.artwork.id}>

        <h6>Artwork: {props.artwork.name} | id: {props.artwork.id} </h6>
        {/* {console.log(props.artwork)} */}

        <details> 
          <summary>Preview:</summary>
          <ul>
            <p>Edit title: 
            <input type="text" 
              name="name" 
              value={props.artwork.name}
              onChange={(event) => props.handleprops.artworkChange(props.artwork, props.user.id, event)}
              onBlur={() => {
                props.updateprops.artwork(props.artwork)}}
              />
              
              <span> 
                <button className="btn-small pink darken-1"
                onClick={() => { 
                  props.deleteprops.artwork(props.artwork, props.user) 
                }}>
                Delete artwork
                </button> 
              </span>
            </p>
            <p>Edit artist: 
            <input className="artist-input"
              type="text" 
              name="name" 
              value={props.artwork.artist}
              onChange={(event) => props.handleChange(props.user, event)}
              // onBlur={() => {props.updateprops.artwork(props.user)}}
              />
            </p>

            <p>Edit image: </p>
            <ul>
              <img height="200px" alt="work of art, small" src={props.artwork.img_url}/>
            </ul>
          </ul>
        </details>

        </ul>
      
    </div>
  )
}

export default ArtworkCard