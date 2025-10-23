import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestions from './Suggestions'

function App() {
  return (
    <div className ="d-flex vh-100">
        <div className='w-15 '><Sidebar/></div>
        <div className=' w-50 ' ><Feed></Feed></div>
        <div className='w-35'><Suggestions></Suggestions></div>
    </div>
  )
}

export default App