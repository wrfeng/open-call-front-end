import React from 'react'
import OpenCallsContainer from './containers/OpenCallsContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import OpenCallShow from './containers/OpenCallShow'
import OrgContainer from './containers/OrgContainer'
import NavBar from './NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import Signout from './components/Signout'
import Profile from './containers/Profile'


export default class App extends React.Component{
  state = {
    calls: [],
    artistName: '',
    artworks: [],
    currentArtist: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/calls')
      .then(resp => resp.json())
      .then(calls => {
        this.setState({ calls: calls.data})
      })
      fetch('http://localhost:3000/artworks')
      .then(resp => resp.json())
      .then(artworks => {
        this.setState({ artworks: artworks.data})
      }) 

      fetch('http://localhost:3000/artists')
      .then(response => response.json())
      .then(artistsData=> {     
      this.setState({
              artists: artistsData,       
          })
      })
       

      if (localStorage.token) {
        fetch('http://localhost:3000/profile', {
          headers: {
            Authorization: localStorage.token
          }
        })
        .then(res => res.json())
        .then(profileInfo => {
          this.setState({ artistName: profileInfo.name })
          this.getArtist(profileInfo.name)
        })
      }

  }

  getArtist = name => {
    console.log('getting artist state from Login or Signup', name );
    this.setState({ artistName: name })
    fetch('http://localhost:3000/artists')
    .then(response => response.json())
    .then(artists=> {
        let loggedArtist = artists.data.find(artist => artist.attributes.name === name)    
    this.setState({
            currentArtist: loggedArtist,
          
        })
    })
  }

  clearArtist = () => {
    console.log('artist gone');
    this.setState({ artistName: '' })
  }

  render(){
    return(
      <React.Fragment>
        <Router>
        <NavBar />
        <Route path="/login" render={routerProps => <Login {...routerProps} getArtist={this.getArtist} />} />
        <Route path="/signup" render={routerProps => <Signup {...routerProps} getArtist={this.getArtist} />} />
        <Route path="/signout" render={routerProps => <Signout {...routerProps} clearArtist={this.clearArtist} />} />

        <Route path="/profile" render={routerProps => <Profile {...routerProps} artist={this.state.artistName} artWorks={this.state.artworks} />} />
          <div>
            <Route exact path='/' render={routerProps => <OpenCallsContainer {...routerProps} calls={this.state.calls} />}  />
            
            {this.state.calls.length === 0 ? null : <Route path={`/calls/:callsId`} render={routerProps => <OpenCallShow {...routerProps} calls={this.state.calls} currentArtist={this.state.currentArtist}/>} />}
            <Route path='/orgs' render={routerProps => <OrgContainer {...routerProps} />} />
          </div>
        </Router>
      </React.Fragment>
    )
  }
}
