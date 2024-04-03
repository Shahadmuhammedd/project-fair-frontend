import React from 'react'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'
function Dashboard() {
  return (
    <div>
      <div className="row">
        <h2 className='text-center m-3'>Welcome <span className='text-white'>User</span></h2>
        <div className="col-lg-6">
          <MyProjects/>
        </div>
        <div className="col-lg-6">
          <Profile/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard