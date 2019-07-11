import React from 'react'
import Submit from './Submit'

class CallApplicationForm extends React.Component{
  state = {
    portfolio: [],
    artist_id: '',
    call_id: parseInt(this.props.callId)+1
  }

  addToPortfolio = (image) => {
    if (!this.state.portfolio.includes(image))
    {this.setState({
      portfolio: [...this.state.portfolio, image],
      artist_id: this.props.currentArtist.id  
    })} 
  }


  apply = (click) => {    
    if (this.state.portfolio.length > 0){
      // console.log('click: ', click.target);
   fetch('http://localhost:3000/submits', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
    },
    body: JSON.stringify(this.state)
})
    .then(res => res.json())
    .then(resp => 
        console.log("Submit", resp)
    )
 }
  }
 

  render(){



    let artistArtWork
  if (this.props.currentArtist.attributes) {
    artistArtWork = this.props.currentArtist.attributes.artworks.map(art => {
      return <Submit key={art.id} art={art} addToPortfolio={this.addToPortfolio} />
    })
 
  }


  

  // console.log('artistArtWork: ', artistArtWork);
    return(
        <div>
        <div className="submit-button"><button onClick={this.apply}>Submit Your Work 🖼</button></div>
        <h3>Select work from your Portfolio:</h3>
        {artistArtWork}
        {/* <form>
          <input placeholder="image url" ></input><br></br>
          <input placeholder="image url" ></input><br></br>
          <input placeholder="image url" ></input><br></br>
          <input placeholder="image url" ></input><br></br>
          <input placeholder="image url" ></input><br></br>
          <input type="submit" value="Submit"></input>
          <input type="button" value="Cancel" onClick={this.props.handleCancel}></input>
        </form> */}
      </div>
    )
  }
}

export default CallApplicationForm