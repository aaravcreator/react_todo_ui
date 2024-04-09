import React from 'react'

const Todo = () => {
    
   
  return (
    <div className='p-5 flex justify-between text-white'>
       <div className="flex" >
       {/*  use line-through class for strike */}
       <h1  className='text-white text-2xl'>TASK 1</h1>
       </div>
       <div className="flex space-x-2">
       <button  className='bg-yellow-400 text-white p-2 rounded'>Edit Todo</button>
        <button  className='bg-red-400 text-white p-2 rounded'>Delete Todo</button>
       </div>
    </div>
  )
}

export default Todo
