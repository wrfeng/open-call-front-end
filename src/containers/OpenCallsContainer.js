import React from 'react'
import { Link } from 'react-router-dom';

const OpenCallsContainer = ({ match, calls, currentArtist }) =>  {


  
  let renderCalls
  renderCalls = Object.keys(calls).map(callId =>
  
    <div className={`card`} key={callId}>
      <Link to={`/calls/${callId}`} >{calls[callId].attributes.name}</Link>
    <div className={`card-date`} key={callId}>{calls[callId].attributes.deadline}</div>
    </div>
  
 
  )
  return(
  <div>
    <h1>Open Call</h1>
    {renderCalls}
  </div>
  )
  }

export default OpenCallsContainer