import React, { Component } from 'react'

export class Org extends Component {
    render() {

        let orgCall = this.props.org.attributes.calls.map(call => {
            return <div key={call.id} call={call}>{call.name}</div>
          })
      


        return (
            <div className="card">
              <h3>{this.props.org.attributes.name}</h3>
              <p>{this.props.org.attributes.mission}</p>
              <p>{this.props.org.attributes.url}</p>
              Location:
              <p>{this.props.org.attributes.street}<br />
                 {this.props.org.attributes.city}<br />
                 {this.props.org.attributes.zip}<br />
                 {this.props.org.attributes.country}</p>
              <h2>Current Calls</h2>
                {orgCall}
            </div>
        )
    }
}

export default Org
