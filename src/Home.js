import React from 'react';
import { Link } from 'react-router-dom'

 class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.artist.name ? `Hello ${this.props.artist.name}!
        YOU ARE SIGNED IN` : <Link to='/login'>Login</Link>}</h1>
        
      </div>
    )
  }
}

 export default HomePage;
