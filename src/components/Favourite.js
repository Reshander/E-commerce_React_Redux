import React from 'react'
// import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import Card from './Card'

export const Favourite = () => {

  const favproducts = useSelector(state =>state.favProductReducer)
  return (
    
      <div className='fav d-flex justify-content-between flex-wrap mt-5'>
        {
          favproducts.map((prod) => {
            return (
              <Card
              key={prod.id}  
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
