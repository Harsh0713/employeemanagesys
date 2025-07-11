import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext)
  


  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
      <div className='bg-red-400 mb-2  py-4 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
      </div>
      <div className=''>
        {authData.employees.map(function(elem, idx){
        return <div key={idx} className='border-2 bg-emerald-400 mb-2  py-4 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
        <h3 className='text-lg font-medium w-1/5 bg-blue-600'>{elem.taskCount.newTask}</h3>
        <h5 className='text-lg font-medium w-1/5 bg-yellow-400'>{elem.taskCount.active}</h5>
        <h5 className='text-lg font-medium w-1/5 bg-green-600'>{elem.taskCount.completed}</h5>
        <h5 className='text-lg font-medium w-1/5 bg-red-600'>{elem.taskCount.failed}</h5>
      </div>
      })}
      </div>
    </div>
  )
}

export default AllTask
