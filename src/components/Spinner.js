import React, { Component } from 'react'
// import loading from './loading.gif'
import load from './load.gif'

export class Spinner extends Component {
    
  render() {
    return (
      <div>
        <img
          src={load}
          style={{ width: "200px", margin: "auto", display: "block" }}
          alt="Loading..."
        />
      </div>
      
    );
  }
}

export default Spinner