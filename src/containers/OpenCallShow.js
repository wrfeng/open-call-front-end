import React from 'react'

const OpenCallShow = ({match, calls}) => {
  console.log(calls)
  return (
    <div>
      <h1>{calls[match.params.callsId].attributes.name}</h1>
      <ul>
        <li>{calls[match.params.callsId].attributes.description}</li>
        <li>{calls[match.params.callsId].attributes.medium}</li>
        <li>{ calls[match.params.callsId].attributes.deadline }</li>
      </ul>

      <button>Apply</button>
      <button>Organization Info</button>
    </div>
  )
}

export default OpenCallShow