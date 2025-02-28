import React, { useState, useEffect } from "react";
import Container from "./Container";
import Heading from "./Heading";
import Button from "./Button";
import Image from "./Image";
import fruitBundle from "/src/assets/image1.png";
import Flex from "./Flex";

const OfferSection = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-03-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-Footer bg-no-repeat bg-cover bg-center py-16 relative">
      <Container>
        <Flex className="flex flex-col md:flex-row items-center md:items-start">
          <div className="sm:w-full md:w-1/2  lg:w-[1035px] text-center md:text-left">
            <Heading as="p" text="Special Offer" className="text-green-600 text-lg font-semibold" />
            <Heading as="h2" text="Seasonal Fruit Bundle" className="text-[40px] md:text-[70px] font-medium text-gray-900 mt-2" />
            <Heading as="p" text="Discount up to " className="text-xl text-gray-700 mt-2 inline-block" />
            <span className="text-orange-500 text-xl font-bold">80% OFF</span>
            
            <div className="flex justify-center md:justify-start gap-4 mt-6 text-gray-900 text-xl font-semibold">
              <div className="bg-white shadow-md p-4 rounded-lg text-center">
                <span>{timeLeft.days || "00"}</span>
                <p className="text-sm">Days</p>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg text-center">
                <span>{timeLeft.hours || "00"}</span>
                <p className="text-sm">Hour</p>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg text-center">
                <span>{timeLeft.minutes || "00"}</span>
                <p className="text-sm">Min</p>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg text-center">
                <span>{timeLeft.seconds || "00"}</span>
                <p className="text-sm">Second</p>
              </div>
            </div>

            <Button btnText={"CODE : FRUIT28"} className="bg-green-600 text-white px-6 py-2 mt-6 rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 lg:mt-10">
            <Image ImgSrc={fruitBundle} className="sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto" />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default OfferSection;