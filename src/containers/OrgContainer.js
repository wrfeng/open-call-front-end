import React, { Component } from 'react'
import Org from '../components/Org.js'

export class OrgContainer extends Component {
state = {
    orgs: []
}
    componentDidMount() {
        fetch('http://localhost:3000/orgs')
        .then(resp => resp.json())
        .then(orgsData => {
          this.setState({ orgs: orgsData.data})
        })  
    }
    render() {
        console.log(this.state);
    let org = this.state.orgs.map(org => {
      return <Org key={org.id} org={org} />
    })



        return (
            <div>
                <h2>ORGS</h2>
                <div>{org}</div>
            </div>
        )
    }
}

export default OrgContainer
