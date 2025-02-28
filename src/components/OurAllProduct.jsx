import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "./Container";
import Heading from "./Heading";
import Flex from "./Flex";
import Product from "./Product";
import Aboutpart from "./Aboutpart";
import OfferSection from "./OfferSection";
import Testmonial from "./Testmonial";
import BlogSection from "./BlogSection";

const OurAllProduct = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Filter products
  useEffect(() => {
    const filtered =
      category === "All"
        ? products
        : products.filter((item) => item.category === category.toLowerCase());
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [category, products]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <>
    <div className="py-[50px] lg:py-[100px] bg-white">
      <Container>
        {/* Header Section */}
        <div className="w-full max-w-[467px] mx-auto text-center mb-8 lg:mb-12">
          <Heading 
            as="h3" 
            text="Our Products" 
            className="font-rubik text-lg lg:text-2xl text-gray-600 mb-2"
          />
          <Heading 
            as="h1" 
            text="Our Fresh Products" 
            className="font-rubik text-2xl lg:text-4xl font-bold text-gray-900 mb-4"
          />
          <p className="font-quicksand text-gray-600 text-sm lg:text-base">
            We pride ourselves on offering a wide variety of fresh and flavorful products.
          </p>

          {/* Category Filter */}
          <Flex className="justify-center gap-2 lg:gap-4 mt-6 lg:mt-8 flex-wrap">
            {["All", "beauty", "furniture", "fragrances", "groceries"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 lg:px-6 py-1 lg:py-2 rounded-full font-medium transition-colors text-sm lg:text-base
                  ${
                    category === cat
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </Flex>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {currentProducts.map((product) => (
            <Product
              id={product.id}
              key={product.id}
              ImgSrc={product.thumbnail}
              category={product.category}
              title={product.title}
              price={product.price}
              className="w-full h-full"
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {filteredProducts.length > productsPerPage && (
          <Flex className="justify-center items-center gap-3 lg:gap-4 mt-8 lg:mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 lg:px-4 py-1 lg:py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 hover:bg-gray-600"
            >
              Previous
            </button>

            <span className="font-medium text-gray-700 text-sm lg:text-base">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 lg:px-4 py-1 lg:py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 hover:bg-gray-600"
            >
              Next
            </button>
          </Flex>
        )}
      </Container>
    </div>
    <Aboutpart/>
    <OfferSection/>
    <Testmonial/>
    <BlogSection/>
    </>
  );
};

export default OurAllProduct;
