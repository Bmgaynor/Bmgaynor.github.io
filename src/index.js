import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Links from './Links'

const App = () => {
  return (
    <div className="container">
        <div className="portrait-container">
          <img className="portrait" src="./Me.jpg" alt="Brad Gaynor" />
        </div>
        <h1>Bradley Gaynor</h1>
        <h3>Senior Software Engineer</h3>
        <Links />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));