import React, { useState } from 'react'
import Product from './Product'

function ProductPage() {

const [products,setProducts] = useState([])



  return (
    <div>
      This is Product Page


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

        <Product/>
        <Product/>
        <Product/>
        <Product/>

        

      </div>



    </div>
  )
}

export default ProductPage
