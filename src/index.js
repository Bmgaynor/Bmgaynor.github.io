import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const App = () => {
  return (
    <div className='App'>
      <div className='info'>
        <img className='portrait' src='/zach_wilard_profile.jpeg'></img> 
      </div>  
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));