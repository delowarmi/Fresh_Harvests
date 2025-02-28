import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import Logo from "../assets/Logo.png";
import User from "./User";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navBg, setNavBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setNavBg("bg-white shadow-md");
      } else {
        setNavBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${navBg} fixed top-0 left-0 w-full z-50 transition-all duration-300`}>
      <Container>
        <Flex className="justify-between items-center py-3">
          {/* Logo Section */}
          <div className="w-[30%] md:w-[40%] flex items-center">
            <Link to="/">
              <Image ImgSrc={Logo} className="w-[160px] md:w-[130px]" />
            </Link>
          </div>

          {/* Desktop Navigation (lg-xl) */}
          <div className="w-[50%] hidden lg:block">
            <ul className={`font-medium text-lg ${navBg === "bg-white shadow-md" ? "text-gray-900" : "text-gray-900"}`}>
              <Flex className="justify-start gap-x-12">
                <Link to="/" className="hover:text-gray-400">
                  <li>Home</li>
                </Link>
                <Link to="/shop" className="hover:text-gray-400">
                  <li>Shop</li>
                </Link>
                <Link to="/about" className="hover:text-gray-400">
                  <li>About us</li>
                </Link>
                <Link to="/blog" className="hover:text-gray-400">
                  <li>Blog</li>
                </Link>
              </Flex>
            </ul>
          </div>

          {/* Right Section (lg-xl) */}
          <div className="w-[20%] hidden lg:flex justify-end gap-x-6">
            <div className="relative">
              <FaShoppingCart className={`${navBg === "bg-white shadow-md" ? "text-gray-900" : "text-gray-900"} text-xl cursor-pointer`} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                3
              </span>
            </div>
            <User/>
          </div>

          {/* Mobile Menu & Cart (sm-md) */}
          <div className="lg:hidden flex items-center gap-x-4">
            <div className="relative">
              <FaShoppingCart className="text-gray-900 text-xl cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                3
              </span>
            </div>
           
            {menuOpen ? (
              <FaTimes
                className="text-white text-2xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              
              <FaBars
                className="text-gray-900 text-2xl cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
              
            )}
          </div>
        </Flex>

        {/* Mobile Menu (sm-md) */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full text-center h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center transition-all ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="text-gray-100 text-2xl space-y-6">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <li>Home</li>
            </Link>
            <Link to="/shop" onClick={() => setMenuOpen(false)}>
              <li>Shop</li>
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              <li>About us</li>
            </Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>
              <li>Blog</li>
            </Link>
            <User/>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
