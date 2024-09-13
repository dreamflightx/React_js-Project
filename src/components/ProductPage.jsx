import React from 'react'

function ProductPage() {



  return (
    <div>
      This is Product Page


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

        <div className='w-full bg-green-200 rounded-xl '>
            <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png" className='h-48 w-full object-contain' alt="" />

            <h1 className='mt-2 font-bold text-xl p-2  '>Mascara 24 Hrs line</h1>
            <h2 className='pl-2 line-through text-red-500 font-bold'>Rs 500</h2>
            <h2 className='pl-2 font-bold text-green-500'>Rs 400</h2>

            <div className='mt-2 bg-blue-500 py-2 px-4 w-full cursor-pointer text-white text-center rounded-xl'>View</div>

        </div>

        <div className='w-full h-10 bg-green-200 rounded-xl'>

        </div>

        <div className='w-full h-10 bg-green-200 rounded-xl'>

        </div>

      </div>



    </div>
  )
}

export default ProductPage
