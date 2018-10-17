import React, { Component } from 'react';

class Interpreter extends Component{
  constructor(props){
    super(props)
    this.state = {
      //Project Section
      isCreated:false,

      //Create Form Section
      createForm:'block',
      createFormHome: 'block',
      librariesView: 'none',

      fileName: null,
      libraries: [],
      programType:null,
      className:null,

      //Interface Section
      defaultCode: null,
      showGUI: 'none',
      showOS: 'none',
      showSys: 'none',
      showURL: 'none'
    }
  }

  //Create Form Section
  showLibriaries = () => {
    this.setState({librariesView: 'block'})
    this.setState({createFormHome: 'none'})
  }
  showHome = () => {
    this.setState({librariesView: 'none'})
    this.setState({createFormHome: 'block'})
  }
  createProject = () => {
    const fileName = document.getElementById('fileName').value
    if(fileName != ''){
      if(document.getElementById('cli').checked == true){
        this.setState({programType: 'cli'})
      } else if(document.getElementById('gui').checked == true){
        this.setState({programType: 'gui'})
        this.setState({showGUI:'block'})
      }
      if(document.getElementById('tkAdd').checked == true){
        this.state.libraries.push('import tkinter'.toString() + '\n')
      }
      if(document.getElementById('pgAdd').checked == true){
        this.state.libraries.push('import pygame'.toString() + '\n')
      }
      if(document.getElementById('kvAdd').checked == true){
        this.state.libraries.push('import kivy'.toString() + '\n')
      }
      if(document.getElementById('dashAdd').checked == true){
        this.state.libraries.push('import dash'.toString() + '\n')
      }
      if(document.getElementById('panAdd').checked == true){
        this.state.libraries.push('import panda'.toString() + '\n')
      }
      if(document.getElementById('numAdd').checked == true){
        this.state.libraries.push('import numpy'.toString() + '\n')
      }
      if(document.getElementById('plotAdd').checked == true){
        this.state.libraries.push('import plotly'.toString() + '\n')
      }
      if(document.getElementById('osAdd').checked == true){
        this.state.libraries.push('import os'.toString() + '\n')
      }
      if(document.getElementById('sysAdd').checked == true){
        this.state.libraries.push('import sys'.toString() + '\n')
      }
      if(document.getElementById('dateAdd').checked == true){
        this.state.libraries.push('import datetime'.toString() + '\n')
      }
      if(document.getElementById('webbrowserAdd').checked == true){
        this.state.libraries.push('import Webbrowser'.toString() + '\n')
      }
      if(document.getElementById('hasClass').checked == true){
        const className = document.getElementById('className').value
        this.setState({className:className})
        const classCode = '\n' + "class ".toString() + className + "():".toString() + '\n' + "    def __init__(self):".toString()
        const fullCode = ((this.state.libraries).toString() + classCode).toString()
        this.setState({defaultCode:fullCode})
      }
      else {
        this.setState({defaultCode:this.state.libraries})
      }
      if(document.getElementById('hasPathLink').checked == true){
        this.setState({showOS:'block'})
      }
      if(document.getElementById('hasSysLink').checked == true){
        this.setState({showSys:'block'})
      }
      if(document.getElementById('hasUrlLink').checked == true){
        this.setState({showURL:'block'})
      }
      this.setState({isCreated:true})
      this.setState({fileName:fileName})
    }
    else{
      alert('Please give the file a name')
    }
  }

  //Interface Section
  coding = () => {
    var newCode = document.getElementById('textbox').value
    this.setState({defaultCode:newCode})
  }

  //Sidebar Section
  importLibrary = () => {
    var code = document.getElementById('textbox').value
    var library = ''
    var libraryOptions = document.getElementById('libraryMenu')
    var libraryChosen = libraryOptions.options[libraryOptions.selectedIndex].text
    if(libraryChosen == 'Tkinter'){
      library = 'import tkinter'
    }
    else if (libraryChosen == 'Pygame'){
      library = 'import pygame'
    }
    else if (libraryChosen == 'Kivy'){
      library = 'import kivy'
    }
    else if (libraryChosen == 'Dash'){
      library = 'import dash'
    }
    else if (libraryChosen == 'Panda'){
      library = 'import panda'
    }
    else if (libraryChosen == 'Numpy'){
      library = 'import numpy'
    }
    else if (libraryChosen == 'Plotly'){
      library = 'import plotly'
    }
    else if (libraryChosen == 'Os'){
      library = 'import os'
    }
    else if (libraryChosen == 'Sys'){
      library = 'import sys'
    }
    else if (libraryChosen == 'Datetime'){
      library = 'import datetime'
    }
    else if (libraryChosen == 'Webbrowser'){
      library = 'import webbrowser'
    }
    this.setState({defaultCode:(library.toString() + '\n' + code)})
    document.getElementById('textbox').value = this.state.defaultCode
  }
  addClass = () => {
    var code = document.getElementById('textbox').value
    const newClass = document.getElementById('newClass').value.toString()
    const newCode = '\n' + '\n' + "class ".toString() + newClass + "():".toString() + '\n' + "    def __init__(self):".toString()
    code = code.concat(newCode)
    this.setState({defaultCode:code})
    document.getElementById('textbox').value = this.state.defaultCode
    var code = document.getElementById('textbox').value = ''
  }
  addFunction = () => {
    var code = document.getElementById('textbox').value
    const newFunc = document.getElementById('newFunc').value.toString()
    const newCode = '\n' + '\n' + "def ".toString() + newFunc + "(self):".toString()
    code = code.concat(newCode)
    this.setState({defaultCode:code})
    document.getElementById('textbox').value = this.state.defaultCode
    document.getElementById('textbox').value = ''
  }
  addWidget = () => {
    var code = document.getElementById('textbox').value
    var widgetName = document.getElementById('widgetName').value
    var widget = ''
    var widgetOptions = document.getElementById('guiWidgets')
    var widgetChosen = widgetOptions.options[widgetOptions.selectedIndex].text
      if(widgetChosen == 'Label'){
      widget = (widgetName + " = Label(Tk(), text='Label').pack()")
    }
    if(widgetChosen == 'Button'){
      widget = (widgetName + " = Button(Tk(), text='Button').pack()")
    }
    else if(widgetChosen == 'Radio'){
      widget = (widgetName + " = Radiobutton(Tk()).pack()")
    }
    else if(widgetChosen == 'Checkbox'){
      widget = (widgetName + " = Checkbutton(Tk()).pack()")
    }
    else if(widgetChosen == 'Entry'){
      widget = (widgetName + " = Entry(Tk(), width=10).pack()")
    }
    this.setState({defaultCode:(code + '\n' + widget)})
    document.getElementById('textbox').value = this.state.defaultCode
    document.getElementById('widgetName').value = ''
  }
  exportCode = () => {
    var code = document.getElementById("textbox").value
    var code_link = document.createElement("a")
    var python_file = new Blob([code], {type: 'text/plain'});
    code_link.href = URL.createObjectURL(python_file)
    const fileName = this.state.fileName
    code_link.download = fileName + '.py'
    code_link.click()
  }

  render(){
    var isCreated = this.state.isCreated
    if(!isCreated){
      return(
        <div>
          <div id='createSec' style={{display:this.state.createForm}}>
            <h2>Create Project</h2>
            <hr/>
            <div id='createContent' style={{display:this.state.createFormHome}}>
              <label>File Name <input type='text' id='fileName'/></label><br/><br/>
              <hr/>
              <label>Libraries <button class='mainBut' onClick={this.showLibriaries}>View</button></label><br/><br/>
              <label>Program Type</label><br/><br/>
              <input type='radio' name='prgmType' id='cli'/><label style={{marginRight:20}}>CLI</label>
              <input type='radio' name='prgmType' id='gui'/><label style={{marginRight:20}}>GUI</label>
              <input type='radio' name='prgmType' id='game'/><label>Game</label><br/><br/>
              <hr/>
              <input type='checkbox' id='hasClass'/><label> with class </label>
              <input type='text' id='className'/><br/><br/>
              <input type='checkbox' id='hasSysLink' class='smallCheck'/><label id='smallLabel'> Quick Links</label>
              <input type='checkbox' id='hasPathLink' class='smallCheck'/><label id='smallLabel'> Quick Paths</label><br/>
              <input type='checkbox' id='hasUrlLink' class='smallCheck'/><label id='smallLabel'> Quick URL</label>
              <div style={{margin:'auto', width:'20%', marginTop:20}}>
                <button class='mainBut' onClick={this.createProject}>Create</button>
              </div>
            </div>
            <div id='librariesSec' style={{display:this.state.librariesView}}>
              <h2>Libraries</h2>
              <hr/>
              <table id='librariesTable'>
                <th>
                  <tr><label><input type='checkbox' id='tkAdd'/>Tkinter</label></tr><hr/>
                  <tr><label><input type='checkbox' id='pgAdd'/>Pygame</label></tr><hr/>
                  <tr><label><input type='checkbox' id='kvAdd'/>Kivy</label></tr><hr/>
                  <tr><label><input type='checkbox' id='dashAdd'/>Dash</label></tr><hr/>
                  <tr><label><input type='checkbox' id='panAdd'/>Panda</label></tr><hr/>
                  <tr><label><input type='checkbox' id='numAdd'/>Numpy</label></tr><hr/>
                  <tr><label><input type='checkbox' id='plotAdd'/>Plotly</label></tr><hr/>
                  <tr><label><input type='checkbox' id='osAdd'/>OS</label></tr><hr/>
                  <tr><label><input type='checkbox' id='sysAdd'/>Sys</label></tr><hr/>
                  <tr><label><input type='checkbox' id='dateAdd'/>Datetime</label></tr><hr/>
                  <tr><label><input type='checkbox' id='webbrowserAdd'/>Webbrowser</label></tr><hr/>
                </th>
              </table>
              <div style={{margin:'auto', width:'20%'}}>
                <button class='mainBut' style={{marginTop:20, fontSize:32, padding:10}} onClick={this.showHome}>Add</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else{
      return(
        <div id='workPanel'>
          <div id='textSpace'>
            <textarea onChange={this.coding} value={this.state.defaultCode} id='textbox' style={{color:'white', backgroundColor:'#2d2d2d', fontSize:18, padding:20}} rows={30} cols={80}/>
          </div>
          <div id='sidebar'>
            <div class='sideItem'>
              <h2>Import Library</h2>
              <select id='libraryMenu'>
                <option value='tkAdd'>Tkinter</option>
                <option value='pgAdd'>Pygame</option>
                <option value='kvAdd'>Kivy</option>
                <option value='dashAdd'>Dash</option>
                <option value='panAdd'>Panda</option>
                <option value='numAdd'>Numpy</option>
                <option value='osAdd'>Os</option>
                <option value='sysAdd'>Sys</option>
                <option value='dateAdd'>Datetime</option>
                <option value='webAdd'>Webbrowser</option>
              </select>
              <button class='sideBut' onClick={this.importLibrary}>Add</button>
              <hr/>
            </div>
            <div class='sideItem'>
              <h2>New Class</h2>
              <label>Name <input type='text' id='newClass'/></label>
              <button class='sideBut' onClick={this.addClass}>Add</button>
              <hr/>
            </div>
            <div class='sideItem'>
              <h2>New Function</h2>
              <label>Name <input type='text' id='newFunc'/></label>
              <button class='sideBut' onClick={this.addFunction}>Add</button>
              <hr/>
            </div>
            <div class='sideItem' style={{display:this.state.showGUI}}>
              <h2>GUI Widgets</h2>
              <select id='guiWidgets'>
                <option value='label'>Label</option>
                <option value='button'>Button</option>
                <option value='radio'>Radio</option>
                <option value='check'>Checkbox</option>
                <option value='entry'>Entry</option>
                <option value='textarea'>Textarea</option>
                <option value='slider'>Slider</option>
              </select><br/><br/>
              <label>Name <input type='text' id='widgetName'/></label><br/><br/>
              <button class='sideBut' style={{marginLeft:10}} onClick={this.addWidget}>Add</button>
              <hr/>
            </div>
            <div class='sideItem'>
              <button class='sideBut' style={{display:this.state.showOS}}>Os Link</button>
              <button class='sideBut' style={{display:this.state.showSys}}>Sys Link</button>
              <button class='sideBut' style={{display:this.state.showURL}}>URL Link</button>
            </div>
            <hr/>
            <div class='sideItem'>
              <button class='mainBut' style={{fontSize:30}} onClick={this.exportCode}>Export</button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Interpreter
