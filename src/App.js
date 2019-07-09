import React from 'react'
import OpenCallsContainer from './containers/OpenCallsContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import OpenCallShow from './containers/OpenCallShow'

export default class App extends React.Component{
  state = {
    calls: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/calls')
      .then(resp => resp.json())
      .then(calls => {
        this.setState({ calls: calls.data})
      })
  }

  render(){
    return(
      <React.Fragment>
        <Router>
          <div>
            <Route exact path='/' render={routerProps => <OpenCallsContainer {...routerProps} calls={this.state.calls}/>} />
            {this.state.calls.length === 0 ? null : <Route path={`/calls/:callsId`} render={routerProps => <OpenCallShow {...routerProps} calls={this.state.calls} />} />}
          </div>
        </Router>
      </React.Fragment>
    )
  }
}
