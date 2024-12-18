'use client'
import React, { useState, SyntheticEvent } from 'react';
import { ContactForm } from '@/types/ContactForm.Model';

export default function Contact() {

  function handleSubmit(event : SyntheticEvent<HTMLFormElement | HTMLTextAreaElement>) {
    event.preventDefault();
    console.log(formData)

  }

  function handleInputChange(event : SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.currentTarget;
    setFormData((previousData) => ({
      ...previousData,
      [name] : value,
    }))
  }

  const [formData, setFormData] = useState<ContactForm>({
    name : "",
    email :"",
    message : ""
  });
  return (
    <section className="bg-background py-12 px-6 md:py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-deepBlue-500 md:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-brown-500 md:text-xl">
          Have questions, opportunities, or just want to say hello? Feel free to drop me a message!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 max-w-xl mx-auto bg-tan-500 p-6 rounded-lg shadow-lg">
        <form id="contact-form" action="/contact-success" method="POST" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-brown-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              required
              className="w-full mt-1 px-4 py-2 bg-white border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-brown-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              required
              className="w-full mt-1 px-4 py-2 bg-white border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold text-brown-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              onChange={handleInputChange}
              required
              className="w-full mt-1 px-4 py-2 bg-white border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-deepBlue-500 text-white font-semibold rounded-md hover:bg-deepBlue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
