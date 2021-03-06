import React from 'react'
import Art  from '../components/Art'

class ArtWorkContainer extends React.Component {

    render() {
       
      
      
        
        // this.props.artWorks.filter(art => art.attributes.artist_id === 1)
        
    //     .map(art => {
    //     return <Art key={art.id} art={art} />
    //   })
        let artistArtWork = this.props.artWorks.map(art => {
                return <Art key={art.id} art={art} />
              })
      
   
      

    // console.log(this.props.artWorks);

        return (
            <div>
               <h1>Check out all your art works: </h1> 
               {artistArtWork}
            </div>
        )
    }
}

export default ArtWorkContainer
