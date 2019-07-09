import React from 'react'

const OpenCallShow = ({match, calls}) => {
  return (
    <div>
      <ul>
        <li>{calls[match.params.callsId].attributes.name}</li>
        <li>{calls[match.params.callsId].attributes.description}</li>
        <li>{calls[match.params.callsId].attributes.medium}</li>
        <li>{ calls[match.params.callsId].attributes.deadline }</li>
      </ul>
    </div>
  )
}

export default OpenCallShow