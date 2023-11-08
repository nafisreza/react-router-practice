import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {username} = useParams()
  return (
    <div className='bg-gray-700 p-5'>
        <p className='text-center text-white font-semibold'>User is: {username}</p>
    </div>
  )
}

export default User