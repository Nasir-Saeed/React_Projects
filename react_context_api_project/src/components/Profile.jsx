import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext)

  if (!user) return <h1 className='text-2xl xl:text-3xl font-extrabold mt-10'>Please Login</h1>

  return <h1 className='text-2xl xl:text-3xl font-extrabold mt-10'>Welcome <br /> Username: {user.username} <br /> Password: {user.password} </h1>
}

export default Profile