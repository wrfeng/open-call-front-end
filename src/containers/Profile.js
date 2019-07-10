import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>This is  profile page for {this.props.artist}</h1>
            </div>
        )
    }
}

export default Profile


