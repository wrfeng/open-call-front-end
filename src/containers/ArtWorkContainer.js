import React from 'react'
import Art  from '../components/Art'

class ArtWorkContainer extends React.Component {

    render() {
       
        // debugger
        //  = this.props.artWorks.filter(art => art.artist_id === this.props.currentArtist.id)
        
        let artistArtWork = this.props.artWorks.filter(art => art.artist_id === this.props.currentArtist.id).map(art => {
        return <Art key={art.id} art={art} />
      })
      

    console.log(this.props.artWorks);

        return (
            <div>
               <h1>This hold all the art</h1> 
               {artistArtWork}
            </div>
        )
    }
}

export default ArtWorkContainer
