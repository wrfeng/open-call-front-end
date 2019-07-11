import React from 'react'
import Art  from '../components/Art'

class ArtWorkContainer extends React.Component {
    

    render() {
       
        
        let artistArtWork = this.props.artWorks.map(art => {
        return <Art key={art.id} art={art}  />
      })
      console.log(artistArtWork);

        return (
            <div>
               <h1>This hold all the art</h1> 
               {artistArtWork}
            </div>
        )
    }
}

export default ArtWorkContainer
