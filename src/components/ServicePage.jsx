// import React, { useState } from 'react'

// function ModifyCount(props){

//     const handleInput = (event)=>{

//         props.changeCount(event.target.value)

//     }
//     return(
//         <>
//         <h1>Childern Component</h1>

//         <input type="number" onChange={handleInput} />
//          <button onClick={props.increaseCount} className='py-2 px-4 rounded-lg text-white bg-orange-400 '>Increase Count</button>
//         </>
       
//     )
// }

// function ServicePage() {
//    const [count,setCount] =  useState(0)

//    const increaseCount = ()=>{
//     setCount(count + 1)
//    }
//    const changeCount  = (value)=>{
//     setCount(value)
//    }


//   return (
//     <div>
//       <h1 className='font-bold text-5xl text-center'>This is Services Page</h1>

//         <button  onClick={increaseCount} className='py-2 px-4 rounded-lg text-white bg-green-400 ' >INrease from Service</button>

//         <div className='p-5 m-5 rounded-xl bg-indigo-400 text-white text-5xl text-center'>
//             {count}
//         </div> 
//         <ModifyCount changeCount = {changeCount}  increaseCount = {increaseCount} />
//         <ModifyCount changeCount = {changeCount}  increaseCount = {increaseCount} />
//         <ModifyCount changeCount = {changeCount}  increaseCount = {increaseCount} />
//         <ModifyCount changeCount = {changeCount}  increaseCount = {increaseCount} />
//     </div>
//   )
// }

// export default ServicePage
import React from 'react';
import { FaCode, FaMobileAlt, FaDatabase, FaCloud, FaLock } from 'react-icons/fa';

const ServicePage = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-indigo-600" />,
      title: 'Web Development',
      description: 'We build scalable, responsive, and interactive websites tailored to your needs.',
    },
    {
      icon: <FaMobileAlt className="text-4xl text-green-600" />,
      title: 'Mobile App Development',
      description: 'Creating high-performance mobile apps for Android and iOS platforms.',
    },
    {
      icon: <FaDatabase className="text-4xl text-purple-600" />,
      title: 'Data Management',
      description: 'We provide secure and reliable data storage, management, and analysis solutions.',
    },
    {
      icon: <FaCloud className="text-4xl text-blue-600" />,
      title: 'Cloud Solutions',
      description: 'Leverage the power of cloud computing with our robust cloud-based services.',
    },
    {
      icon: <FaLock className="text-4xl text-red-600" />,
      title: 'Cybersecurity',
      description: 'Protect your data with our advanced cybersecurity solutions and practices.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* Header Section */}
      <section className="bg-blue-600 text-white w-full py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl mb-6">We offer a range of technology solutions to meet your business needs.</p>
      </section>

      {/* Services Section */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 text-white w-full py-12 mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Need Our Services?</h2>
        <p className="text-lg mb-6">Let us help you take your business to the next level.</p>
        <button className="bg-white text-indigo-600 py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ServicePage;

