import React, { Component } from 'react'

export class Org extends Component {
    render() {
        return (
            <div className="org-card">
              <p>{this.props.org.attributes.name}</p>
              <p>{this.props.org.attributes.mission}</p>
              <p>{this.props.org.attributes.url}</p>
              Location
              <p>{this.props.org.attributes.street}</p>
              <p>{this.props.org.attributes.city}</p>
              <p>{this.props.org.attributes.zip}</p>
              <p>{this.props.org.attributes.country}</p>
            </div>
        )
    }
}

export default Org
