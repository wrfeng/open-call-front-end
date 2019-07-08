import React, { PureComponent } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';

export class App extends PureComponent {
render() {
    return (
      <Router>  
        <React.Fragment>
      <NavBar />
      {/* <Route exact path="/" render={Calls} />
      <Route path="/calls" render={Calls} />
      <Route path="/orgs" render={Orgs} />  */}
        </React.Fragment>
       
      </Router>
    )
  }

}
export default App;