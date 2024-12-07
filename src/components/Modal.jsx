import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
        <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
        <div className='text-left'>
          <p><strong>Full Name:</strong> Vincent Ahama</p>
          <p><strong>Age:</strong> 30</p>
          <p><strong>Location:</strong> Winneba, Ghana</p>
          <p><strong>Professional Title:</strong> Web Developer, Digital Marketer</p>
          <p><strong>Education:</strong> B.A Education, Certificate in Web Development</p>
          <p><strong>Skills:</strong> HTML, CSS, JavaScript, React, SEO, WordPress, Elementor, Adobe Photoshop, Canva etc.</p>
          <p><strong>Experience:</strong> 4 years in web development</p>
          <p><strong>Interests:</strong> Open-source projects, remote work, photography, traveling</p>
          <p><strong>Contact:</strong> quasiahama@gmail.com</p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal; 