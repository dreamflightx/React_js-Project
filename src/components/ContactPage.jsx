// import React,{useContext,createContext, useState} from 'react'
// import ContactDetails from './ContactDetails'
// export const contactContext =  createContext(null)

// function ContactPage() {

//   const [contactData,setContactData] =useState({
//     name:'Sanjeevvv',
//     email:'basnetsanjeev22@gmail.com',
//     phone:['+9779868250580','+9779866718115'],
//     address:'Nepal'
//   })

//   return (
//     <contactContext.Provider value={{ contactData  }}>
//       <h1>This is Contact Page</h1>

//       <ContactDetails />

//     </contactContext.Provider>
//   )
// }

// export default ContactPage

import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      
      {/* Header Section */}
      <section className="bg-blue-600 text-white w-full py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl mb-6">We'd love to hear from you! Get in touch with us.</p>
      </section>

      {/* Main Contact Section */}
      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-8">
        
        {/* Contact Information */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Contact Details</h2>
          <p className="text-gray-700">
            Reach out to us using the following contact information, or use the form below to send us a message.
          </p>
          <address className="mt-4">
            <p className="text-gray-800">
              Email: <a href="mailto:info@ourcompany.com" className="text-blue-600 hover:underline">info@ourcompany.com</a>
            </p>
            <p className="text-gray-800">
              Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+123 456 7890</a>
            </p>
            <p className="text-gray-800">Address: 123 Main Street, Anytown, USA</p>
          </address>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </div>

          </form>
        </section>
      </div>

      {/* Google Maps Section */}
      <section className="w-full max-w-4xl mx-auto mt-8 mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">Find Us on the Map</h2>
        <div className="w-full h-72">
          <iframe
            className="w-full h-full border-0 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4175981534367!2d144.9630283!3d-37.8142178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d9d1b7d3%3A0xf577dd3eb245e171!2s123%20Main%20Street%2C%20Anytown%2C%20USA!5e0!3m2!1sen!2s!4v1619691737042!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
