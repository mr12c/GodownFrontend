import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchDataGet from '../cu/index2'
import { useEffect } from 'react'
import ProductSkeleton from '../Components/ProductSkelton'
import SimmilarItem from './../Components/SimmilarItem';
import i1 from "../assets/i1.jpg"
function Productdetail({settoggle}) {
  const {item_id} = useParams()
  const {data,loading,error} = useFetchDataGet(`/item/${item_id}`)
  const [prodata ,setproData] = useState();
  const [selectedSize, setSelectedSize] = useState("41");
  const [selectedColor, setSelectedColor] = useState("White");

  const sizes = ["40.5", "41", "42", "43", "43.5", "44", "44.5", "45", "46"];
  const colors = ["White", "Gray", "Black"];
  useEffect(()=>{
    console.log(data?.item);
    setproData(data?.item)
  },[data,item_id])
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='w-[100%] lg:w-[77%] min-h-[100vh] overflow-y-scroll'>
       <div className='flex justify-end md:hidden'>
          <div  className='text-[2rem] mr-5'><i  onClick={()=>settoggle(prev=>!prev)} class="ri-menu-2-line"></i></div>
       </div>
       {
        item_id? 
        prodata?  <div className=" mt-5 flex flex-col md:flex-row justify-between items-start p-4 md:p-8">
    
        <div className="flex flex-col items-center md:w-1/2">
          <div className='  max-w-[700px] w-[100%] rounded-md'>
          <img
            src={prodata?.image_url}  
            alt="Product"
            className="w-full h-full   object-top object-cover rounded-xl"
          />
          </div>
          <div className="flex mt-4 space-x-2">
            
            {Array(4)
              .fill("")
              .map((_, index) => (
                <img
                  key={index}
                  src="https://via.placeholder.com/50"  
                  alt="Thumbnail"
                  className="w-12 h-12 border border-gray-300 rounded cursor-pointer"
                />
              ))}
          </div>
        </div>
  
         
        <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2">
          <div className='font-bold '> <span className='w-10 h-10  rounded-full bg-black'></span>{prodata?.brand}</div>
          <h1 className="text-xl md:text-2xl font-semibold">
            {prodata?.name}
          </h1>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-lg">★★★★☆</span>
            <span className="ml-2 text-gray-600">(42 reviews)</span>
          </div>
  
          <div className="text-[3.3rem] font-bold  mt-4">${prodata?.price}</div>
  
         
             <div className='mt-9'>
                 <h1 className='mb-2'>Category</h1>
                <span className='px-4 py-1   bg-violet-700 text-white rounded-full'>{prodata?.category}</span>
             </div>
             <div className='mt-4 flex gap-2 border-2 border-violet-800 w-fit px-4  items-center rounded-full py-1'>
                 <h1 className=''>Quanity: </h1>
                <span className=' '>{prodata?.quantity}</span>
             </div>
          
          <div className="mt-6 ">
            <h2 className="text-lg font-semibold">Size </h2>
            <div className="grid w-[90vw] md:w-[100%] mx-auto  grid-cols-3 gap-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`p-2 border-2 ${
                    selectedSize === size ? "border-black" : "border-gray-300"
                  }  hover:border-black rounded-full`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
  
           
          <div className="mt-6">
            <button disabled={true }  className="w-full  bg-violet-700 text-white py-3 rounded-full hover:bg-violet-500 transition-colors">
              {prodata?.status=="in_stock"? "Add to Cart" : "out of stock"}
            </button>
          </div>
  
           
          <div className="text-sm mt-4 text-gray-500">
            Free delivery on orders over $50.
          </div>
        </div>
      </div> : <ProductSkeleton/> :   <>
      <img  className='w-[50%] mx-auto' src={i1} />
      <h1 className='text-center text-[2rem] font-medium'>Select An Item to See</h1>
      </>
       }
       {
        prodata && 
        <> <h1 className='ml-5 text-[1.4rem] mb-6 capitalize  font-semibold'>simmilar item</h1>
        < SimmilarItem category={prodata?.category}/>
        </>
       }
    
    </div>
  ) 
}

export default Productdetail