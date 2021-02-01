import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Highlights from './pages/Highlights'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='App'>
      <Home />
      <Highlights />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));