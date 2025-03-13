import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form Submitted:", formData);

    setFormData({ name: "", email: "", message: "" });
    setShowForm(false);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center scroll-smooth">
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-15 w-15 mr-2 rounded-full"
              src={logo}
              alt="Logo"
            />
            <span className="text-xl tracking-tight">Portfolio</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#Education">Education</a>
            </li>
            <li>
              <a href="#Technical Skills">Skills</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#What I Offer">What I Offer</a>
            </li>
            <li>
              <a href="#" onClick={() => setShowForm(true)}>
                Contact
              </a>
            </li>

            {showForm && (
              <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 h-screen">
                <div className=" bg-white/10 backdrop-blur-lg border-b border-neutral-700/80 p-6 rounded-2xl w-150 h-150 shadow-lg">
                  <h2 className="text-center text-3xl font-bold mb-10 mt-12 ">
                    Contact Us
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-5"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border border-gray-300 p-3 rounded-xl bg-white text-black"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border border-gray-300 p-3 rounded-xl bg-white text-black"
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="border border-gray-300 p-3 rounded-xl bg-white text-black"
                      required
                    ></textarea>

                    <div className="flex justify-center items-center space-x-12 mt-5">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-950 to-purple-400 py-3 px-10 mt-7 rounded-md text-white text-xl"
                      >
                        Send
                      </button>

                      <button
                        onClick={() => setShowForm(false)}
                        className="text-xl py-3 px-10 border rounded-md mt-8"
                      >
                        Close
                      </button>
                    </div>
                  </form>

                  {/* Close Button */}
                </div>
              </div>
            )}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="https://github.com/Sufiyanali07"
              className="py-2 px-3 border rounded-md"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sayyed-sufiyan-ali-7483192a8/"
              className="bg-gradient-to-r from-purple-950 to-purple-400 py-2 px-3 rounded-md"
            >
              Linkedin
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="py-4 space-x-2 grid gap-3  ">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#Education">Education</a>
              </li>
              <li>
                <a href="#Technical Skills">Skills</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#What I Offer">What I Offer</a>
              </li>
              <li>
                <a href="#" onClick={() => setShowForm(true)}>
                  Contact
                </a>
              </li>
              {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 pt-100">
                  <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg w-150 h-150 shadow-lg">
                    <h2 className=" text-center text-3xl font-semibold mb-10  ">
                      Contact Us
                    </h2>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col space-y-5"
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-gray-300 p-3 rounded-xl bg-white text-black"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-300 p-3 rounded-xl bg-white text-black"
                        required
                      />
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="border border-gray-300 p-3 rounded-xl bg-white text-black"
                        required
                      ></textarea>

                      <div className="flex justify-center items-center space-x-12 mt-5">
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-purple-950 to-purple-400 py-3 px-10 mt-7 rounded-md text-white text-xl"
                        >
                          Send
                        </button>

                        <button
                          onClick={() => setShowForm(false)}
                          className="text-xl py-3 px-10 border rounded-md mt-8"
                        >
                          Close
                        </button>
                      </div>
                    </form>

                    {/* Close Button */}
                  </div>
                </div>
              )}
            </ul>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Sufiyanali07"
                className="py-2 px-3 border rounded-md"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sayyed-sufiyan-ali-7483192a8/"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-purple-950 to-purple-800"
              >
                Linkedin
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
