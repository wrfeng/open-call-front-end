import React from 'react'
import CallApplicationForm from '../components/CallApplicationForm'


class OpenCallShow extends React.Component{
  
  state = {
    apply: false
  }

  handleApply = () => {
    this.setState({
      apply: true
    }) 
  }

  handleCancel = () => {
    this.setState({
      apply: false
    })
  }
  render(){
    return (
      <div>
        {console.log(this.props.match, this.props.calls)}
        <h1>{this.props.calls[this.props.match.params.callsId].attributes.name}</h1>
        <ul>
          <li>{this.props.calls[this.props.match.params.callsId].attributes.description}</li>
          <li>{this.props.calls[this.props.match.params.callsId].attributes.medium}</li>
          <li>Deadline: {this.props.calls[this.props.match.params.callsId].attributes.deadline }</li>
        </ul>
        {this.state.apply ? <CallApplicationForm currentArtist={this.props.currentArtist} callId={this.props.match.params.callsId} handleCancel={this.handleCancel}/> : null}
        {this.state.apply ? null  : <button onClick={this.handleApply}>Apply</button>}
       
       
        {/* {this.state.apply ? null : <button>Organization Info</button>} */}

        
        

      </div>
    )
  }
}

export default OpenCallShow