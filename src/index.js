import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import HauntedApp from './components/HauntedApp'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
      <HauntedApp />
  </Router>
  , document.getElementById('root'))