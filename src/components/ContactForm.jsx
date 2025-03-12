import React from "react";

const ContactForm = () => {
  return (
    <div>
      <div class="container px-4 mx-auto">
        <div class="mx-auto">
          <div class="max-w-md mx-auto px-8 py-6 bg-neutral-900 rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold text-neutral-500 mb-4 flex justifiy-center">
              Contact Us
            </h2>
            <form>
              <div class="mb-4">
                <label class="block text-neutral-500 mb-1" for="name">
                  Your Name
                </label>
                <input
                  class="w-full px-4 py-2 bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>
              <div class="mb-4">
                <label class="block text-neutral-500 mb-1" for="email">
                  Your Email
                </label>
                <input
                  class="w-full px-4 py-2 bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  type="email"
                />
              </div>
              <div class="mb-4">
                <label class="block text-neutral-500 mb-1" for="message">
                  Your Message
                </label>
                <textarea
                  class="w-full px-4 py-2 bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300"
                  rows="4"
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button
                class="w-full  text-white
                 py-2 px-4 rounded-lg hover:bg-purple-500 border border-purple-900  transition duration-200"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
