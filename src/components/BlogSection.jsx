import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Image from "./Image";
import Flex from "./Flex";
import blog1 from "/src/assets/img1.png";
import blog2 from "/src/assets/img2.png";
import blog3 from "/src/assets/img3.png";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      date: "May 23, 2024",
      title: "Exploring Seasonal Delights: A Guide to What’s Fresh Right Now",
      link: "#",
    },
    {
      id: 2,
      image: blog2,
      date: "May 23, 2024",
      title: "Hustling Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
      link: "#",
    },
    {
      id: 3,
      image: blog3,
      date: "May 23, 2024",
      title: "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
      link: "#",
    },
  ];

  return (
    <div className="bg-white py-16 text-center">
      <Container>
        <Heading
          as="p"
          text="Our Blog"
          className="text-green-600 text-lg font-semibold bg-green-100 px-4 py-1 inline-block rounded-lg"
        />
        <Heading
          as="h2"
          text="Fresh Harvest Blog"
          className="text-3xl font-semibold text-gray-900 mt-3"
        />
        <Heading
          as="p"
          text="Welcome to a fresh world! Here’s your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
          className="text-gray-600 text-sm mt-2 max-w-2xl mx-auto"
        />

        <Flex className="justify-center items-center mt-10 flex-wrap gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-[32%]">
              <Image ImgSrc={blog.image} className="w-full h-[200px] object-cover" />
              <div className="p-4 text-left">
                <p className="text-gray-500 text-sm">{blog.date}</p>
                <Heading as="h3" text={blog.title} className="text-lg font-semibold text-gray-900 mt-2" />
                <a href={blog.link} className="text-orange-500 text-sm font-medium mt-3 inline-block">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default BlogSection;


