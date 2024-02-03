import React from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

export const Favourite = () => {

  const favproducts = useSelector(state =>state.favProductReducer)
  return (
    
      <div className='d-flex justify-content-between flex-wrap mt-5'>
        {
          favproducts.map((prod) => {
            return (
              <ProductCard
              type={true}
              id={prod.id}
                title={prod.title}
                image={prod.image}
                price={prod.price}
                desc={prod.description}
              />
            )
          })
        }
      </div>   
  )
}
