import React, { useState } from 'react';
import Modal from '../components/Modal'; 

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id='about' className='py-20 bg-gray-100'>
      <div className='container mx-auto text-center'> 
        <h2 className='text-3xl font-bold mb-4'>About Me</h2> 
        <p className='text-lg mb-6 pl-8 pr-8'>
          I am a developer, a digital marketer, and a graphic designer with a passion <br></br> for creating beautiful responsive websites. 
          My goal is to help businesses grow their online <br /> presence through effective digital strategies.
        </p>
        <button 
          onClick={openModal} 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          View Personal Details
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
}

export default About;