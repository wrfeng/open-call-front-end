import React, { Component } from 'react'

export class Art extends Component {
    render() {
        return (
            <div className="card">
               <h3>{this.props.art.attributes.title}</h3>
               <span>{this.props.art.attributes.year} - {this.props.art.attributes.medium}</span>
               <img src={this.props.art.attributes.image} />
               <p>{this.props.art.attributes.description}</p>

               
            </div>
        )
    }
}

export default Art
