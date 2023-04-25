import Sidebar from '../../sidebar/Sidebar'
import SinglePost from '../../singlepost/Singlepost'
import React from './single.css'

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default Single
