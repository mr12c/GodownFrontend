import React from 'react'
import Godown from '../Components/godown'
import api from '../utils/errorResponse.js'
import { useEffect } from 'react'
import { useState } from 'react'

import useFetchData from '../cu/index.js'
import { NavLink } from 'react-router-dom'
function  Sidebar({toggle,settoggle}) {
  const array = ["1","2","3","4","5","6","7","8","9","10"]
  const {data,loading,error} = useFetchData('/godown/allgodown')
   
  console.log(data)
  const [godownData,setGodownData] = useState()
  useEffect(()=>{
    if(data){
      setGodownData(data.godownData)
      console.log(godownData)
    }
  },[data])
  
  

  return (
    <div className={`lg:w-[23%]   ${toggle? "left-[-120%] ":""}   bg-white absolute lg:static  text-black overflow-scroll h-[100vh]`}>
         <div className='flex justify-end md:hidden '>
         <i  onClick={()=>settoggle(prev=>!prev)} class= " text-[2rem]  mr-3 ri-menu-2-line"></i>
         </div>
         <div className='mt-2'><h1 className='text-violet-800 text-[2.2rem] font-bold mx-4'>PureSpace. <span className='text-black'>Net</span></h1></div>
         <div className='mt-10 mb-3'>
             <div  className='flex w-full justify-between px-4'>
               
               <NavLink to="/search" className='px-3 w-full text-center  py-2 bg-violet-800 rounded-full text-white'>Search</NavLink>
             </div>
         </div>
         <div className='mt-[20%]  mx-auto gap-1 flex flex-col'>
          {godownData?.map((item,index)=>
          <Godown depth={0} godownData={item} />)}
         </div>
    </div>
  )
}

export default Sidebar








































