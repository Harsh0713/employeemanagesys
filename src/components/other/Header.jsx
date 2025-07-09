import React, { useState, useEffect } from 'react'

const Header = (props) => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (!props.data) {
      setUsername('Admin')
    } else {
      setUsername(props.data.firstName)
    }
  }, [props.data])

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // Optional: window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-small'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
