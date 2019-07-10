import React from 'react'
import OpenCallsContainer from './containers/OpenCallsContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import OpenCallShow from './containers/OpenCallShow'
import NavBar from './NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import Signout from './components/Signout'

export default class App extends React.Component{
  state = {
    calls: [],
    artist: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/calls')
      .then(resp => resp.json())
      .then(calls => {
        this.setState({ calls: calls.data})
      })

      if (localStorage.token) {
        fetch('http://localhost:3000/profile', {
          headers: {
            Authorization: localStorage.token
          }
        })
        .then(res => res.json())
        .then(profileInfo => this.setState({ artist: profileInfo }))
      }
  }

  render(){
    return(
      <React.Fragment>
        <Router>
        <NavBar />
        <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/signout" component={Signout} />
          <div>
            <Route exact path='/' render={routerProps => <OpenCallsContainer {...routerProps} calls={this.state.calls}/>} />
            {this.state.calls.length === 0 ? null : <Route path={`/calls/:callsId`} render={routerProps => <OpenCallShow {...routerProps} calls={this.state.calls} />} />}
          </div>
        </Router>
      </React.Fragment>
    )
  }
}
