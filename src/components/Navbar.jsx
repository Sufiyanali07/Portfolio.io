import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    setShowForm(false);
  };

  const ContactForm = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white/10 backdrop-blur-lg border border-purple-400/20 p-6 rounded-2xl w-full max-w-md mx-4 shadow-xl">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6 text-white">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-purple-400/30 p-3 rounded-xl bg-white/10 text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-purple-400/30 p-3 rounded-xl bg-white/10 text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-purple-400/30 p-3 rounded-xl bg-white/10 text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 h-32"
            required
          />
          <div className="flex justify-center space-x-4 mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-950 to-purple-400 py-2 px-6 rounded-md text-white font-medium hover:opacity-90 transition-all duration-300"
            >
              Send
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="py-2 px-6 rounded-md border border-purple-400 text-purple-400 hover:bg-purple-400/10 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <nav className="sticky top-0 z-40 py-3 backdrop-blur-lg border-b border-purple-400/20 bg-black/50">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img className="h-10 w-10 rounded-full" src={logo} alt="Logo" />
            <span className="text-xl font-medium text-white">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {["About", "Education", "Skills", "Projects", "What I Offer"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="text-white/80 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li>
                <button
                  onClick={() => setShowForm(true)}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
            <div className="flex space-x-4 ml-4">
              <a
                href="https://github.com/Sufiyanali07"
                className="py-2 px-4 rounded-md border border-purple-400 text-purple-400 hover:bg-purple-400/10 transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sayyed-sufiyan-ali-7483192a8/"
                className="bg-gradient-to-r from-purple-950 to-purple-400 py-2 px-4 rounded-md text-white hover:opacity-90 transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleNavbar}
            className="lg:hidden text-white p-2 hover:bg-purple-400/10 rounded-md transition-colors duration-300"
          >
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileDrawerOpen && (
          <div className="lg:hidden fixed inset-0 z-30 bg-black/90 backdrop-blur-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
              <ul className="flex flex-col items-center space-y-6">
                {[
                  "About",
                  "Education",
                  "Skills",
                  "Projects",
                  "What I Offer",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="text-white/80 hover:text-white text-xl transition-colors duration-300"
                      onClick={() => setMobileDrawerOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => {
                      setShowForm(true);
                      setMobileDrawerOpen(false);
                    }}
                    className="text-white/80 hover:text-white text-xl transition-colors duration-300"
                  >
                    Contact
                  </button>
                </li>
              </ul>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Sufiyanali07"
                  className="py-2 px-4 rounded-md border border-purple-400 text-purple-400 hover:bg-purple-400/10 transition-all duration-300"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sayyed-sufiyan-ali-7483192a8/"
                  className="bg-gradient-to-r from-purple-950 to-purple-400 py-2 px-4 rounded-md text-white hover:opacity-90 transition-all duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      {showForm && <ContactForm />}
    </nav>
  );
};

export default Navbar;
