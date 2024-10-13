import React from 'react'
import useFetchDataGet from '../cu/index2'
import { useState ,useEffect} from 'react'
import ProductCard from './ProductCard'
function SimmilarItem({category}) {
    const {data, loading, error} = useFetchDataGet(`/item/getItemByCategory/${category}`)
  console.log(data)
  const [items,setItems] = useState()
  
  useEffect(()=>{
    setItems(data?.items)
  },[data])
  return (
    <div className='flex  flex-wrap w-[99%] mx-auto   gap-2'>
        {items?.map(item => <ProductCard item={item}/>)}
    </div>
  )
}

export default SimmilarItem