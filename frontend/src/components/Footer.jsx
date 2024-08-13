import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4 lg:px-24">
      <div className="container mx-auto flex flex-wrap justify-around">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-gray-400">
            Welcome to Bookstore, your number one source for all things books.
            We're dedicated to giving you the best of literature, with a focus
            on dependability, customer service, and uniqueness.
          </p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="text-gray-400">
            <li className="mb-2">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/shop" className="hover:text-white">
                Shop
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="text-gray-400">
            <li className="mb-2">
              <Link to="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/shipping" className="hover:text-white">
                Shipping & Returns
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link to="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2024 Bookstore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
