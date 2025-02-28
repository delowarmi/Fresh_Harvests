import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Image from "./Image";
import Flex from "./Flex";
import userImage from "/src/assets/Rectangle 3.png";
import { FaQuoteLeft } from "react-icons/fa";

const Testmonial = () => {
  return (
    <div className="bg-white py-16 text-center">
      <Container>
        <Heading as="p" text="Testimonial" className="text-green-600 text-lg font-semibold bg-green-100 px-4 py-1 inline-block rounded-lg" />
        <Heading as="h2" text="What Our Customers Say" className="text-3xl font-semibold text-gray-900 mt-3" />
        <Heading as="p" text="Don't just take our word for it—hear what one of our customers has to say about their experience with Fresh Harvest." className="text-gray-600 text-sm mt-2 max-w-2xl mx-auto"/>

        <Flex className="justify-center items-center mt-10 flex-wrap">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
            <Image ImgSrc={userImage} className="w-full h-full object-cover"/>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-2/3 ml-6 mt-6 md:mt-0">
            <FaQuoteLeft className="text-green-500 text-2xl mb-3"/>
            <Heading as="p" text="I absolutely love Fresh Harvest! The quality of their produce is outstanding. It’s always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs." className="text-gray-700 text-md"/>
            <Heading as="h4" text="Jane Doe – Professional Chef" className="text-gray-900 font-semibold text-sm mt-4"/>
          </div>
        </Flex>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </Container>
    </div>
  );
};



export default Testmonial
