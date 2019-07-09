import React from 'react';
import './App.css';
import Home from './Home'
import NavBar from './NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import Signout from './components/Signout'

import { BrowserRouter, Switch, Route, } from 'react-router-dom'

class App extends React.Component {
  state = {
    artist: {},
    page: 'home'
  }

  redirect = (page) => {
    this.setState({ page: page })
  }

  componentDidMount() {
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

  render() {
    return (
      <BrowserRouter>
      <NavBar />
    <Switch>
    <Route exact path="/" render={(routerProps) => <Home {...routerProps} artist={this.state.artist}/>} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/signout" component={Signout} />
         </Switch>
    </BrowserRouter>
  )

  }
}

export default App;