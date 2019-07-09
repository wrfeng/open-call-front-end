import React from 'react'
import OpenCallsContainer from './containers/OpenCallsContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
      <Router>
        <div>
          <h1>Open Call</h1>
          <Route path='/calls' render={routerProps => <OpenCallsContainer {...routerProps} calls={this.state.calls}/>} />
        </div>
      </Router>
    )
  }
}

// render(){
//   return (
//     <div>
//       <h1>Open Call</h1>
//       <OpenCallsContainer calls={this.state.calls} />
//     </div>
//   )
// }