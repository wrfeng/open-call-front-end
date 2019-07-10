import React from 'react'

class CallApplicationForm extends React.Component{
  state = {
    portfolio: '',
    artist_id: '',
    call_id: this.props.callId
  }

  render(){
    return(
      <div>
        Porfolio Component Goes Here
        <form>
          <input placeholder="image url" ></input><br></br>
          <input placeholder="image url" ></input><br></br>
          <input placeholder="image url" ></input><br></br>
          <input placeholder="image url" ></input><br></br>
          <input placeholder="image url" ></input><br></br>
          <input type="submit" value="Submit"></input>
          <input type="button" value="Cancel" onClick={this.props.handleCancel}></input>
        </form>
      </div>
    )
  }
}

export default CallApplicationForm