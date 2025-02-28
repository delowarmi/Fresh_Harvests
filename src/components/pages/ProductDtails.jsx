import React, { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  let [product, setProduct] = useState(null);
  let [quantity, setQuantity] = useState(1);
  let [mainImage, setMainImage] = useState("");
  let productId = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId.id}`) 
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.thumbnail);
      });
  }, [productId]);

  let handleIncrement = () => setQuantity((prev) => prev + 1);
  let handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-white pt-24">
      <div className="max-w-[1320px] mx-auto p-4">
        {product && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* Product Image & Thumbnails */}
            <div>
              <div className="flex justify-center">
                <img
                  src={mainImage}
                  alt={product.title}
                  className="rounded-lg shadow-lg w-full max-w-sm"
                />
              </div>
              {/* Thumbnails */}
              <div className="flex gap-2 justify-center mt-4">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className={`w-16 h-16 cursor-pointer border rounded-md ${
                      mainImage === img ? "border-orange-600" : "border-gray-300"
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span className="text-green-600 font-semibold capitalize">
                {product.category}
              </span>
              <h2 className="text-2xl font-bold mt-2">{product.title}</h2>
              <div className="flex items-center text-yellow-500 mt-1">
                {[...Array(Math.floor(product.rating || 5))].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {[...Array(5 - Math.floor(product.rating || 5))].map((_, i) => (
                  <FaRegStar key={i} />
                ))}
                <span className="ml-2 text-gray-600">
                  {product.rating} ({product.stock} reviews)
                </span>
              </div>
              <p className="text-orange-600 text-xl font-bold mt-2">
                ${product.price}/kg
              </p>
              <p className="text-gray-600 mt-2">{product.description}</p>

              {/* Quantity & Buttons */}
              <div className="flex items-center mt-4">
                <label className="mr-2 bg-white">Quantity:</label>
                <div className="flex items-center">
                  <button
                    onClick={handleDecrement}
                    className="border px-2 py-1 rounded-md bg-gray-200"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="w-12 text-center border mx-2"
                    value={quantity}
                    readOnly
                  />
                  <button
                    onClick={handleIncrement}
                    className="border px-2 py-1 rounded-md bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <button className="border px-4 py-2 rounded-md flex items-center gap-2">
                  <FiHeart /> Save as favorite
                </button>
                <button className="bg-orange-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-700">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Related Products */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-[20px] text-[#749B3F] px-3 py-0 bg-gray-300 inline-block rounded-md">
            Our Product
          </h3>
          <h3 className="text-lg font-semibold text-[#212337] md:text-[48px] pt-7">
            Related Products
          </h3>
          <p className="text-[#4A4A52] text-[14px] pt-7 max-w-lg mx-auto">
            We pride ourselves on offering a wide variety of fresh and flavorful
            fruits, vegetables, and salad ingredients.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {[2, 3, 10, 20].map((id) => (
              <RelatedProduct key={id} id={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Related Products Component
const RelatedProduct = ({ id }) => {
  let [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    product && (
      <div className="border rounded-lg p-4 text-center mb-16">
       <Link  to={`/products/${id}`}><img
          src={product.thumbnail}
          alt={product.title}
          className="mx-auto mb-2 w-32 h-32 object-cover"
        /></Link>
        <p className="font-semibold">{product.title}</p>
        <p className="text-orange-600 font-bold">${product.price}/kg</p>
        <button className="mt-2 bg-orange-600 text-white px-4 py-1 rounded-md">
          Add to cart
        </button>
      </div>
    )
  );
};

export default ProductDetails;
