import React from 'react'


function Page ({ children, ...props }) {
  return (
    <div className="Page" {...props}>
      <div className="Page-main">
        {children}
      </ div>
    </div>
  )
}

export default Page