import React from "react";
import Flex from "./Flex";
import Heading from "./Heading";
import Container from "./Container";
import Button from "./Button";
import Image from "./Image";
import Women from "../assets/Women.png";
import Special from "../assets/Special Offer.png";
import social from "../assets/Download App_.png";

const Banner = () => {
  return (
    <div className="bg-bannerImg bg-no-repeat bg-center bg-cover relative">
      <Container>
        <Flex className="flex-col lg:flex-row items-center lg:items-start pt-[50px] lg:pt-[100px]">
          {/* Left Content */}
          <div className="relative py-[50px] lg:py-[100px] text-center lg:text-left w-full lg:w-[660px]">
            <Heading
              as="h4"
              text="Welcome to Fresh Harvest"
              className="font-rub font-medium text-[18px] lg:text-[20px] text-bgtColor"
            />
            <Heading
              as="h1"
              text="Fresh Fruits and Vegetables"
              className="font-rub font-medium text-[40px] lg:text-[78px] text-bgHColor leading-tight"
            />
            <Heading
              as="p"
              text="At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables"
              className="font-qus font-regular text-[14px] lg:text-[16px] text-bgPColor pr-0 lg:pr-[180px]"
            />
            <Button
              btnText={"Shop Now"}
              className={
                "font-rub text-[16px] lg:text-[18px] font-semibold bg-bgBColor rounded-lg py-2 px-4 mt-4"
              }
            />

            {/* Special Offer */}
            <div className="absolute hidden lg:block">
              <Image ImgSrc={Special} className="pt-8 pl-[350px]" />
            </div>
            {/* Social Icons */}
            <div className="absolute hidden lg:block">
              <Image ImgSrc={social} className="pt-48 pl-[100px]" />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[695px] flex justify-center lg:pl-[100px]">
            <Image ImgSrc={Women} className="pt-[50px] lg:pt-[300px] w-[80%] lg:w-full" />
          </div>
        </Flex>

        {/* Mobile View Special Offer & Social Icons */}
        <div className="lg:hidden flex flex-col items-center gap-4 mt-8">
          <Image ImgSrc={Special} className="w-[80%]" />
          <Image ImgSrc={social} className="w-[60%]" />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
