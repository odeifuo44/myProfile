import React from 'react'

const header = () => {
  return (
    
        <header className='bg-gray-800 text-white p-4 fixed w-full z-10'>
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold"><span className='text-blue-700'>V.</span>AHAMA</h1> 
                <nav>
                  <ul className='flex space-x-4'> 
                    <li>
                      <a href="#about" className='hover:text-gray-400'>About</a>
                    </li>
                    <li>
                      <a href="#skills" className='hover:text-gray-400'>Skills</a>
                    </li>
                    <li>
                      <a href="#portfolio" className='hover:text-gray-400'>Portfolio</a>
                    </li>
                    <li>
                      <a href="#services" className='hover:text-gray-400'>Services</a>
                    </li>
                    <li>
                      <a href="#contact" className='hover:text-gray-400'>Contact</a>
                    </li>

                  </ul>
                </nav>
            </div>
        </header>
    
  )
}

export default header