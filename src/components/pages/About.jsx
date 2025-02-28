import React from "react";
const About = () => {
  // Dynamic Images
  const aboutImage = "https://picsum.photos/500/400"; 
  const teamImages = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      role: "Co-Founder & COO",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Brown",
      role: "Marketing Head",
      img: "https://randomuser.me/api/portraits/men/50.jpg",
    },
  ];

  return (
    <div className="bg-white pt-24">
      <div className="max-w-[1320px] mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">About Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Dynamic Image Section */}
          <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="About Us"
              className="rounded-lg shadow-lg w-full md:w-[80%]"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-600">Who We Are</h3>
            <p className="text-gray-600 mt-3">
              Welcome to <strong>Your Brand</strong>! We are committed to providing you with the best
              quality products, handpicked for freshness and taste. Our goal is to make shopping
              for fresh fruits, vegetables, and groceries easy and enjoyable.
            </p>

            <h3 className="text-2xl font-semibold text-orange-600 mt-5">Our Mission</h3>
            <p className="text-gray-600 mt-3">
              We believe that healthy eating starts with fresh, organic, and high-quality products.
              Our mission is to provide our customers with the best shopping experience, ensuring
              that they receive only the freshest and healthiest items.
            </p>

            <h3 className="text-2xl font-semibold text-orange-600 mt-5">Why Choose Us?</h3>
            <ul className="list-disc pl-5 text-gray-600 mt-3">
              <li>🌱 100% Organic & Fresh Products</li>
              <li>🚚 Fast & Reliable Delivery</li>
              <li>💰 Affordable Prices</li>
              <li>📦 Wide Range of Categories</li>
              <li>❤️ Customer Satisfaction Guaranteed</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800">Meet Our Team</h3>
          <p className="text-gray-600 mt-2">
            Our dedicated team is passionate about delivering quality products and exceptional service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {teamImages.map((person, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-md">
                <img
                  src={person.img}
                  alt={person.name}
                  className="mx-auto mb-3 rounded-full w-24 h-24 object-cover"
                />
                <h4 className="font-semibold">{person.name}</h4>
                <p className="text-gray-500">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
