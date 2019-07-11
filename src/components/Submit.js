import React, { Component } from 'react'

export class Submit extends Component {
    state = {
        clicked: false
   }


changeColor = () => {
  this.setState({clicked: !this.state.clicked})
}

handleClick = (e) => {
    // console.log('e: ', e.target.src);
    this.changeColor()
    if (this.state.clicked)
    {this.props.addToPortfolio(e.target.src)}

}

    render() {

        let div_class = this.state.clicked ? "clicked" : "notclicked";

        return (
            <div className="card">
               <h3>{this.props.art.title}</h3>
               <span>{this.props.art.year} - {this.props.art.medium}</span>
               <img className={div_class} src={this.props.art.image} onClick={this.handleClick} />
               <p>{this.props.art.description}</p>

               
            </div>
        )
    }
}

export default Submit
