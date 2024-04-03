import React from 'react'
import Swal from 'sweetalert2'
function Profile() {
  const updateUser =()=>{
    Swal.fire({
      title: 'Success!',
      text: 'User Details Updated',
      icon: 'success',
      confirmButtonText: 'Back'
    })
  }
  return (
    <div>
      <div className='text-center'>
        <h3 className='text-center mt-4 ' style={{color:'white'}}>My Profile</h3>
        <label >
          <input style={{display:'none'}} type="file" />
          <img width={'200px'} src="https://cdn1.iconfinder.com/data/icons/style-2-folders/807/Downloads_S2.png" alt="" />
        </label>
        <div className='mx-5 px-5'>
        <input type="text" placeholder='Name' className='form-control mb-2' />
        <input type="text" placeholder='Github' className='form-control mb-2' />
        <input type="text" placeholder='Live Link' className='form-control mb-2' />
        <button className='btn btn-dark m-4' onClick={updateUser}>Update</button>
        </div>

      </div>
    </div>
  )
}

export default Profile