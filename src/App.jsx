import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from  './Componenet/Navbar'
export default function App() {
  return (
  <div className='bg-gray-700 text-slate-200 min-h-screen'>
    <Router>
      <Navbar/>
      <switch>
        <Route exact path="/">
          <Home />
        </Route>
          <Route path="/about">
          <About />
          </Route>
      </switch>
    </Router>
  </div>
  )
}
