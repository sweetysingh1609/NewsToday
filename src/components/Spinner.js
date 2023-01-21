import React, { Component } from 'react'
// import loading from './loading.gif'
import load from './load.gif'

const  Spinner= ()=>{
    
  
    return (
      <div>
        <img
        className='my-3'
          src={load}
          style={{ width: "200px", margin: "auto", display: "block" }}
          alt="Loading..."
        />
      </div>
      
    );
  }


export default Spinner