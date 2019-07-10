import React, { Component } from 'react'

class ArtWorkContainer extends Component {

   
        componentDidMount() {  
            fetch('http://localhost:3000/artworks')
            .then(response => response.json())
            .then(artworks => {
              
                let loggedartwork = artworks.data.map(artwork => artwork.attributes.artist.id === this.props.currentArtist.id)
                debugger    
                console.log('loggedartwork: ', loggedartwork);
            })

    }

    render() {
        return (
            <div>
               <h1>This hold all the art</h1> 
            </div>
        )
    }
}

export default ArtWorkContainer
