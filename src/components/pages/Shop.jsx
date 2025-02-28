import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product";

const Shop = () => {
  let [products, setProducts] = useState([]);
  let [filteredProducts, setFilteredProducts] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");
  let [priceRange, setPriceRange] = useState(20000);
  let [category, setCategory] = useState("all");
  let [currentPage, setCurrentPage] = useState(1);
  let itemsPerPage = 12; // 

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=0") // 
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price <= priceRange &&
        (category === "all" || product.category === category)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // 
  }, [searchTerm, priceRange, category, products]);

  // Pagination Logic
  let totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  let indexOfLastProduct = currentPage * itemsPerPage;
  let indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  let currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="bg-white pt-24">
      <div className="max-w-[1320px] mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">🛍️ Shop Our Products</h2>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Search Products..."
            className="border p-2 rounded-md w-full md:w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex items-center gap-4">
            <label className="font-semibold">Price: ${priceRange}</label>
            <input
              type="range"
              min="0"
              max="20000"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="cursor-pointer"
            />
          </div>
          <select
            className="border p-2 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="beauty">Beauty</option>
            <option value="groceries">Groceries</option>
            <option value="vehicle">Vehicle</option>
            <option value="furniture">Furniture</option>
            <option value="home-decoration">Home-Decoration</option>
            <option value="kitchen-accessories">Kitchen-Accessories</option>
            <option value="mens-shirts">Men's-Shirts</option>
            <option value="mens-shoes">Mens-Shoes</option>
            <option value="mens-watches">Mens-Watches</option>
            <option value="mobile-accessories">Mobile-Accessories</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="skin-care">Skin-Care</option>
            <option value="sports-accessories">Sports-Accessories</option>
            <option value="sunglasses">Sunglasses</option>
            <option value="tablets">Tablets</option>
            <option value="tops">Tops</option>
            <option value="womens-bags">Womens-Bags</option>
            <option value="womens-dresses">Womens-Dresses</option>
            <option value="womens-jewellery">Womens-Jewellery</option>
            <option value="womens-shoes">Womens-Shoes</option>
            <option value="womens-watches">Womens-Watches</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <Product
              id={product.id}
              key={product.id}
              ImgSrc={product.thumbnail}
              category={product.category}
              title={product.title}
              price={product.price}
              className="w-full h-full"
            />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No products found.</p>
          )}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            className={`px-4 py-2 bg-gray-300 rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-lg font-semibold">{currentPage} / {totalPages}</span>
          <button
            className={`px-4 py-2 bg-gray-300 rounded-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
