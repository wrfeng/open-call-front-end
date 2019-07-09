import React from 'react'
import { Route } from 'react-router-dom'
import OpenCallsList from '../components/OpenCallsList'
import OpenCallShow from './OpenCallShow'

const OpenCallsContainer = ({ match, calls }) =>  {
  let openCallRoute
  if (calls.length > 0){
    openCallRoute = <Route path={`${match.url}/:callsId`} render={routerProps => <OpenCallShow {...routerProps} calls={calls} />} />
  }
  return(<div>
    <OpenCallsList calls={calls} />
    {openCallRoute}
  </div>
  )
  }

export default OpenCallsContainer