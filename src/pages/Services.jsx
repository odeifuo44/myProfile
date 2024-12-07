import React from 'react'

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p className="mb-8">I offer a range of services to help you succeed online.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-4 shadow rounded">
            <h3 className="font-bold">Web Development</h3>
            <p>Building responsive and user-friendly websites.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="font-bold">SEO Optimization</h3>
            <p>Improving your website's visibility on search engines.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="font-bold">Digital Marketing</h3>
            <p>Creating effective marketing strategies to grow your business.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services