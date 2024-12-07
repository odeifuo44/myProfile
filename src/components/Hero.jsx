import React from 'react' 
import heroImg from '../assets/webdesign.jpg'
import myImg from '../assets/asset 2.png'

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <img 
        src={heroImg} 
        alt="A beautiful web design showcasing creativity and professionalism" 
        className="object-cover w-full h-full" 
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="flex items-center justify-center space-x-8 text-white p-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi! My Name is Vincent
            </h1>
            {/* <p className="text-lg md:text-xl mb-6">
              I'm a Web Developer, Digital Marketer, and a tech enthusiast
            </p> */}
            <a href="#contact" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Get in Touch
            </a>
          </div>
          <img 
            src={myImg} 
            alt="Vincent" 
            className="w-full h-full md:w-48 md:h-60 bg-blue-700 rounded-2xl border-4 border-white" 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero