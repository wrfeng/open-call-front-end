import React, { Component } from 'react'

export class Signout extends Component {

    componentDidMount() {
        localStorage.clear();
        this.props.history.push('/')


    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Signout
