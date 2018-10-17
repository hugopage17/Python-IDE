import React, { Component } from 'react';

class WorkPanel extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div id='workPanel'>
        <textarea style={{color:'white', backgroundColor:'#2d2d2d', fontSize:18, padding:20}} rows={30} cols={80}/>
      </div>
    )
  }
}

export default WorkPanel
