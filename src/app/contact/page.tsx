'use client'
import React, { useState, SyntheticEvent } from 'react';
import { ContactForm } from '@/types/ContactForm.Model';
import dotenv from 'dotenv';

export default function Contact() {
  dotenv.config();
  async function handleSubmit(event : SyntheticEvent<HTMLFormElement | HTMLTextAreaElement>) {
    event.preventDefault();
    console.log(formData)
    console.log(process.env.ACCESS_KEY)
    // try {
    //   const response = await fetch("https://api.web3forms.com/submit", {
    //     method : "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //   },
    //     body : JSON.stringify(formData)
    //   })
    //   const data = await response.json();
    //   if (data.success) {
    //     setFormSubmitted(true);
    //   }
    // }
    // catch (err) {
    //   console.error(err)
    // }
  }

  function handleInputChange(event : SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.currentTarget;
    setFormData((previousData) => ({
      ...previousData,
      [name] : value,
    }))
    setFormSubmitted(false);
  }

  const [formData, setFormData] = useState<ContactForm>({
    name : "",
    email :"",
    message : "",
    access_key : process.env.ACCESS_KEY ? process.env.ACCESS_KEY : "",
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)
  return (
    <section className="bg-background py-12 px-6 md:py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-deepBlue-500 md:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-brown-500 md:text-xl">
          Have something on your mind? Feel free to drop me a message!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 max-w-xl mx-auto bg-tan-500 p-6 rounded-lg shadow-lg">
        <form id="contact-form" method="POST" onSubmit={handleSubmit}>
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
        <>
          {
            formSubmitted && (
              <div className="text-center w-full mt-4">
                <p className="font-bold">
                  Thank you for reaching out! I&apos;ll get back to you soon!
                </p>

              </div>
            )
          }
        </>
      </div>
    </section>
  );
}
