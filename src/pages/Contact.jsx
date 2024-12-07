import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_khfa2rr', 'template_qzouvpk', form.current, {
        publicKey: 'cTCIWvGDawXk9YeT2', 
      })
      .then(
        () => {
          toast.success('Email sent successfully!', {
            position: toast.POSITION.TOP_RIGHT,
          });
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send email. Please try again.', {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
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
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;