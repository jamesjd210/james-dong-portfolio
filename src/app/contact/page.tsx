import React, { useState, SyntheticEvent, useEffect } from 'react';

export default function Contact() {

  function handleSubmit(event : SyntheticEvent<HTMLFormElement | HTMLTextAreaElement>) {

  }
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

      {/* Social Links */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-deepBlue-500">Or Connect With Me</h2>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <svg className="w-8 h-8 fill-current text-brown-500 hover:text-deepBlue-500" viewBox="0 0 32 32">
              {/* GitHub Icon Path */}
              <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <svg className="w-8 h-8 fill-current text-brown-500 hover:text-deepBlue-500" viewBox="0 0 32 32">
              {/* LinkedIn Icon Path */}
                <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
              </svg>
          </a>
          {/* Add other social icons here */}
        </div>
      </div>
    </section>
  );
}
