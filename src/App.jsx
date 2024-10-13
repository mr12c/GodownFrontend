import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='w-[100%] flex relative   mx-auto max-w-[1920px] h-[100vh] '>
         <Outlet/>
      </div>
    
  )
}

export default App
