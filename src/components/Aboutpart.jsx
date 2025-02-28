import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import men from "/src/assets/Image.png";
import Heading from "./Heading";
import Button from "./Button";

const Aboutpart = () => {
  return (
    <div className="bg-white py-16 lg:py-24">
      <Container>
        <Flex className="flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-8">
          <div className="w-full lg:w-[55%] h-auto lg:h-[657px] flex justify-center">
            <Image ImgSrc={men} className="max-w-full h-auto" />
          </div>
          <div className="w-full lg:w-[42%] h-auto lg:h-[334px] text-center lg:text-left">
            <Heading
              as={"p"}
              text={"About Us"}
              className="text-[#749B3F] text-[20px] px-4 py-1 bg-slate-200 inline-block rounded-lg"
            />
            <Heading
              as={"h3"}
              text={"About Fresh Harvest"}
              className="text-[#212337] text-[32px] lg:text-[48px] font-bold pt-2"
            />
            <Heading
              as={"p"}
              text={
                "Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience."
              }
              className="text-[#4A4A52] text-[14px] font-regular px-4 lg:px-0 pt-4"
            />
            <Button
              btnText={"Read More"}
              className={
                "text-[#FF6A1A] text-[18px] py-1 px-5 rounded-lg mt-6 border border-orange-500"
              }
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Aboutpart;
