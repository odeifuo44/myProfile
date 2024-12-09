import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import contactImg from '../assets/contact.jpg';

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_khfa2rr', 'template_qzouvpk', form.current, {
        publicKey: 'cTCIWvGDawXk9YeT2',
      })
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Email sent successfully!',
            text: 'Your message has been sent successfully!',
            confirmButtonText: 'OK',
          });
          setSuccessMessage('Your message has been sent successfully!');
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Failed to send email',
            text: 'Please try again.',
            confirmButtonText: 'OK',
          });
          console.error('FAILED...', error.text);
        },
      );
  };

  // Test alert function
  const testAlert = () => {
    Swal.fire({
      icon: 'info',
      title: 'This is a test alert!',
      confirmButtonText: 'OK',
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-2 text-center md:text-center">Contact Me</h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-left">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left">Message</label>
              <textarea
                name="message"
                required
                className="border border-gray-300 p-2 w-full rounded h-32"
              />
            </div>
            <input
              type="submit"
              value="Send"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            />
          </form>
          {/* <button onClick={testAlert} className="mt-4 bg-gray-300 py-2 px-4 rounded">
            Test Alert
          </button> */}
          {successMessage && (
            <div className="mt-4 text-green-600">
              {successMessage}
            </div>
          )}
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={contactImg} alt="Contact" className="w-full h-auto max-w-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Contact;