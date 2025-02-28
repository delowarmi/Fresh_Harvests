import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import pay from "../assets/Frame 8.png";
import Logo from "../assets/Logo.png";
import social from "../assets/Download App_.png";
import Heading from "./Heading";
import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-200 py-8 lg:py-10">
      <Container>
        {/* Responsive Flexbox */}
        <Flex className="flex-wrap gap-8 lg:gap-0 justify-between border-b border-gray-400 pb-8">
          <div className="w-full sm:w-1/2 lg:w-[297px]">
            <Image ImgSrc={Logo} />
            <Image ImgSrc={social} className="pt-6 lg:pt-24" />
          </div>

          {/* Quick Links */}
          <div className="w-1/2 sm:w-[102px]">
            <ul>
              <li className="text-bgHColor font-rub font-medium text-[17px]">Quick links 1</li>
              {["Home", "Shop", "About us", "Blog", "Detail Blog"].map((item, index) => (
                <li key={index} className="text-bgPColor text-[14px] font-rub pt-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-1/2 sm:w-[105px]">
            <ul>
              <li className="text-bgHColor font-rub font-medium text-[17px]">Quick links 2</li>
              {["Favorites", "Cart", "Sign in", "Register"].map((item, index) => (
                <li key={index} className="text-bgPColor text-[14px] font-rub pt-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-[270px]">
            <ul>
              <li className="text-bgHColor font-rub font-medium text-[17px]">Contact us</li>
              <Flex>
                <IoCallOutline className="text-bgtColor pt-2 text-[23px]" />
                <li className="text-bgPColor text-[14px] font-rub pt-2">1234 5678 90</li>
              </Flex>
              <Flex>
                <IoMailOutline className="text-bgtColor pt-2 text-[23px]" />
                <li className="text-bgPColor text-[14px] font-rub pt-2">Freshharvests@gmail.com</li>
              </Flex>
              <Flex>
                <IoLocationOutline className="text-bgtColor pt-2 text-[23px]" />
                <li className="text-bgPColor text-[14px] font-rub pt-2">Tanjung Sari Street, Pontianak, Indonesia</li>
              </Flex>
            </ul>
            <Heading as="h4" text="Accepted Payment Methods:" className="font-rub font-medium text-[12px] pt-5 pl-2" />
            <Image ImgSrc={pay} className="pt-4 pb-4" />
          </div>
        </Flex>

        {/* Bottom Section */}
        <Flex className="flex-wrap justify-between items-center mt-6 text-center sm:text-left">
          <Heading as="h4" text={`© Copyright ${currentYear}, All Rights Reserved by Banana Studio`} className="font-rub font-medium text-[12px]" />
          <Flex className="gap-x-4 mt-4 sm:mt-0">
            <FaTwitter className="text-[32px] p-2 text-white bg-black rounded-full cursor-pointer hover:bg-gray-700" />
            <FaFacebookF className="text-[32px] p-2 text-white bg-black rounded-full cursor-pointer hover:bg-gray-700" />
            <FaInstagram className="text-[32px] p-2 text-white bg-black rounded-full cursor-pointer hover:bg-gray-700" />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
