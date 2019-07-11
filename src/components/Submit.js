import React, { Component } from 'react'

export class Submit extends Component {

handleClick = (e) => {
    console.log('e: ', e.target.src);
    this.props.addToPortfolio(e.target.src)

}

    render() {
        return (
            <div className="card">
               <h3>{this.props.art.title}</h3>
               <span>{this.props.art.year} - {this.props.art.medium}</span>
               <img src={this.props.art.image} onClick={this.handleClick} />
               <p>{this.props.art.description}</p>

               
            </div>
        )
    }
}

export default Submit
