import './app.scss';

// import depencies like React and ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'

// import components, if rendered in ReactDOM.render
import Popup from './components/Popup.js'

const headerElement = <h1>Hello from React Pop-up-ad</h1>

// call on ReactDOM.render with the correct arguments
ReactDOM.render(
  <Popup />,
  document.getElementById('app')
)