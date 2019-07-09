import React from 'react'
import { Link } from 'react-router-dom';

const OpenCallsContainer = ({ match, calls }) =>  {

  let renderCalls
  renderCalls = Object.keys(calls).map(callId =>
    <div key={callId}><Link to={`/calls/${callId}`}>{calls[callId].attributes.name}</Link></div>
  )
  return(
  <div>
    <h1>Open Call</h1>
    {renderCalls}
  </div>
  )
  }

export default OpenCallsContainer