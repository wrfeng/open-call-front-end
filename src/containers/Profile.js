import React from 'react'
import ArtWorkContainer from './ArtWorkContainer'

class Profile extends React.Component {
state = { 
    artistWorks: [],  
    currentArtist: {},
    singleArtWork: {
        artist_id: '',
        title: '',
        year: '',
        image: '',
        description: '',
        medium: ''
    }
}

componentDidMount() {  
    fetch('http://localhost:3000/artists')
    .then(response => response.json())
    .then(artists=> {
        let loggedArtist = artists.data.find(artist => artist.attributes.name === this.props.artist)    
        console.log('loggedArtist: ', loggedArtist);
    this.setState({
            artistWorks: loggedArtist.attributes.artworks,  
            currentArtist: loggedArtist,
            singleArtWork: {
                ...this.state.singleArtWork,
                artist_id: loggedArtist.id
            }
        })
    })

    

}

handleChange = (e) => {
    // console.log('e: ', e.target.value);
   this.setState({ 
        singleArtWork: {
            ...this.state.singleArtWork,
            [e.target.name]: e.target.value
        }
       
    })
  }

handleSubmit = (e) => {
e.preventDefault()
fetch('http://localhost:3000/artworks', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
    },
    body: JSON.stringify(this.state.singleArtWork)
})
    .then(res => res.json())
    .then(resp => {
        this.setState({ artistWorks: [resp, ...this.state.artistWorks]})
        console.log("Newart", resp)
    })
}

    render() {
       
        return (
            <div>
                <h1>Profile page for {this.props.artist}</h1>
                <h3>Add an artwork:</h3>
                <form onSubmit={this.handleSubmit}>
                <label>title</label>
                <input type="text" onChange={this.handleChange} name="title" /><br />
                <label>Year</label>
                <input type="number" min="1400" max="2099" step="1"  onChange={this.handleChange} name="year" /><br />
                <label>Image URL</label>
                <input type="text" onChange={this.handleChange} name="image" /><br />
                <label>description</label>
                <input type="text" onChange={this.handleChange} name="description" /><br />
                <label>medium</label>
                <input type="text" onChange={this.handleChange} name="medium" /><br />
                <input type="submit" value="Add Artwork" />
                </form>
                {this.state.currentArtist.attributes ? <ArtWorkContainer artWorks={this.state.artistWorks} currentArtist={this.state.currentArtist} /> : null}
            </div>
        )
    }
}

export default Profile


