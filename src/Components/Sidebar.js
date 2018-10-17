import React, { Component } from 'react';
import Widgets from './Widgets.json'

class Sidebar extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  showItems(){
    return Widgets.map((item) => {
      return(
        <div key={item.id}>
          <h2>{item.name}</h2>
          <label>Name </label>
          <input type='text' id='nameInput' size={15} style={{marginRight:5}}/>
          <button>Add</button>
          <hr/>
        </div>
      )
    })
  }

  render(){
    return(
      <div id='sidebar'>
        {this.showItems()}
        <h2>GUI Widgets</h2>
        <select name='guiWidgets'>
          <option value='button'>Button</option>
          <option value='radio'>Radio</option>
          <option value='check'>Checkbox</option>
          <option value='entry'>Entry</option>
          <option value='textarea'>Textarea</option>
          <option value='slider'>Slider</option>
        </select>
        <button>Add</button>
      </div>
    )
  }
}

export default Sidebar
