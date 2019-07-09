import React from 'react'
import { Link } from 'react-router-dom';

const OpenCallsList = ({ calls }) =>  {
  let renderCalls
     renderCalls = Object.keys(calls).map(callId => 
       <div key={callId}><Link to={`/calls/${callId}`}>{calls[callId].attributes.name}</Link></div>
      )
  return <div>{renderCalls}</div>
}

export default OpenCallsList