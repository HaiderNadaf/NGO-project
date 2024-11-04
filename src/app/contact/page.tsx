import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
      <section className="relative bg-cover bg-center h-[450px] md:h-[600px] bg-[url('/contact.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col px-8 md:px-16">
          <h1 className="text-5xl md:text-8xl font-bold text-white mt-40 lg:mt-64">Contact</h1>
          <p className="text-gray-200 text-lg md:text-2xl mt-4">
            Connect with us for more information about our Non-profit Organisation and <br className="hidden md:block"/>how you can contribute to our worthy causes.
          </p>
        </div>
      </section>

      <div className="bg-[#f5f8f4] px-8 md:px-20 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md h-60">
            <h3 className="text-lg md:text-xl text-gray-500">PHONE</h3>
            <p className="mt-6 text-xl font-bold">Tel: (555) 123-2222</p>
            <p className="mt-2 text-xl font-bold">Fax: (555) 123-2225</p>
          </div>

          <div className="bg-white p-6 shadow-md h-60">
            <h3 className="text-lg md:text-xl text-gray-500">DONATION CENTER</h3>
            <p className="mt-6 text-xl font-bold">PO Box 1234 Demotown,</p>
            <p className="mt-2 text-xl font-bold">MD12345-5026</p>
          </div>

          <div className="bg-white p-6 shadow-md h-60">
            <h3 className="text-lg md:text-xl text-gray-500">NEED ASSISTANCE?</h3>
            <p className="mt-6 text-xl font-bold">Check out our Help Center.</p>
          </div>
        </div>
      </div>

      <section className="bg-[#f4f4eb] py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-8 md:px-12">
          <div className="space-y-8">
            <h1 className="text-gray-600 text-lg">GET IN TOUCH</h1>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold">How can we help you?</h2>
              <p className="text-lg md:text-xl mt-4">
                Our Non-profit Organisation is dedicated to helping those in need. Contact us to see how we can help you or someone you know.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Headquarter</h3>
              <p className="mt-3 text-lg md:text-xl">2715 Demo St. San Jose, South Dakota 83475</p>
              <p className="text-lg md:text-xl mt-1">(205) 555-0100</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Illinois Office</h3>
              <p className="mt-3 text-lg md:text-xl">2972 Example Rd. Santa Ana, Illinois 85486</p>
              <p className="text-lg md:text-xl mt-1">(603) 555-0123</p>
            </div>
            <div>
              <h1 className="font-bold text-xl md:text-2xl">Follow us on</h1>
              <div className="flex space-x-4 mt-6">
                <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-900"><FaFacebook size={24} /></a>
                <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-900"><FaTwitter size={24} /></a>
                <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-900"><FaInstagram size={24} /></a>
                <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-gray-900"><FaYoutube size={24} /></a>
              </div>
            </div>
          </div>

          <div className="p-6">
            <form className="space-y-6">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold text-lg md:text-xl mb-2" htmlFor="fullName">Full Name <span className="text-red-500">*</span></label>
                <input type="text" id="fullName" name="fullName" placeholder="John" className="w-full h-14 md:h-16 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold text-lg md:text-xl mb-2" htmlFor="email">Email <span className="text-red-500">*</span></label>
                <input type="email" id="email" name="email" placeholder="example@mail.com" className="w-full h-14 md:h-16 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold text-lg md:text-xl mb-2" htmlFor="subject">Subject <span className="text-red-500">*</span></label>
                <input type="text" id="subject" name="subject" placeholder="Subject" className="w-full h-14 md:h-16 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold text-lg md:text-xl mb-2" htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Enter your message" className="w-full h-32 md:h-40 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"></textarea>
              </div>
              <button type="submit" className="w-full md:w-44 py-3 bg-lime-700 text-white font-bold text-lg md:text-xl rounded-md hover:bg-lime-900">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <div className="px-8 md:px-12 py-12">
        <div className="text-center md:text-left">
          <h1 className="text-lg">WHERE WE WORK</h1>
          <div className="mt-4 text-3xl md:text-5xl font-serif text-lime-900 leading-tight">
            <p>More than 70,000 staff in 120 countries,</p>
            <p>serving those in need. 99% of them are</p>
            <p>locals. All with your support.</p>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-12 w-full h-[400px] md:h-[800px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.90176876483!2d77.5669545735891!3d12.978134314738032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae161b5bb8ab2b%3A0xd9ce8443dbf706ee!2sKSR%20Bengaluru%20City%20Junction%20(Bangalore)!5e0!3m2!1sen!2sin!4v1730539084176!5m2!1sen!2sin"
          width="100%" height="100%" loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact
