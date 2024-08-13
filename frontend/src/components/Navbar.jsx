import { Link } from "react-router-dom";
import { useState } from "react";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [authUser, setAuthUser] = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Shop", path: "/shop" },
    { link: "About", path: "/about" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-transparent transition-all ease-in duration-300">
      <nav className="py-4 lg:px-24 px-4">
        <div className="flex justify-between items-center text-base gap-8">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            Book Store
          </Link>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* Thêm icon giỏ hàng và các nút Đăng ký, Đăng nhập */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link to="/cart" className="text-black hover:text-blue-700">
              <i className="fa-solid fa-cart-shopping text-lg md:text-xl"></i>
            </Link>
            {authUser ? (
              <Logout />
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm md:text-base text-black cursor-pointer hover:text-blue-700"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-700 text-white py-1 md:py-2 px-3 md:px-4 rounded-full text-sm md:text-base cursor-pointer hover:bg-blue-800"
                >
                  SingUp
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus-outline-none"
            >
              {isMenuOpen ? (
                <i className="fa-solid fa-xmark text-black"></i>
              ) : (
                <i className="fa-solid fa-bars text-black"></i>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
