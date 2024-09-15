// import React, { createContext, useEffect,useState } from 'react'



// export const AboutContext = createContext(null)
// import AboutData from './AboutData'


// function AboutPage() {

 
//   const [about, setAbout] = useState({
//     title: 'About Page',
//     description: 'This is the about page',
//     data:33,
//     members:[
//       {name:'John',age:25},
//       {name:'Jane',age:30}
//       ]
    
//   })

//   useEffect(()=>{
//     document.title = "About Page"
//   },[])
//   return (
//     <AboutContext.Provider value={{ about , setAbout }} >
//       <div>
//         <AboutData/>
//           <h1 className='font-bold text-5xl text-center'>This is About Page</h1>
//       </div>
//     </AboutContext.Provider>
    
//   )
// }

// export default AboutPage

import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white w-full py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl mb-6">
          Discover who we are and what drives us.
        </p>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-8">
        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to innovate and provide top-notch solutions that exceed customer expectations. We are committed to fostering a culture of continuous improvement and customer satisfaction.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Alice Johnson</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Have any questions or want to reach out? Feel free to contact us at:
          </p>
          <address className="text-gray-700">
            <p>Email: <a href="mailto:contact@ourcompany.com" className="text-blue-600 hover:underline">contact@ourcompany.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+123 456 7890</a></p>
          </address>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
