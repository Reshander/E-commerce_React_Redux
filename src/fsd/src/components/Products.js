import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export const Products = () => {

  let [products, setProducts] = useState([])

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='d-flex justify-content-between flex-wrap mt-5'>
      {
        products.map((prod) => {
          return (
            <ProductCard
            type={false}
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
