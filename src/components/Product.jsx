
import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import Heading from './Heading'

const Product = ({ addtocart,ImgSrc ,title,price,item,category,id}) => {

  return (
    <>
    <div className="w-[100%]">
    <div className="flex flex-wrap justify-between">
      {/* {products.map((item) => ( */}
        <div  className="w-[100%] text-center bg-gray-200 rounded-lg py-3 mt-4">
          <Link to={`/products/${id}`}><Image ImgSrc={ImgSrc} className="ml-[17px]" /></Link>
          <Heading as="p" text={title} className="font-rub font-medium text-[18px] text-bgHColor" />
          
          <Heading as="p" text={price} className="font-qus font-regular text-[18px] text-bgPColor" />
          <Heading as="p" text={category} className="font-qus font-regular text-[18px] text-bgPColor" />
          <button
            onClick={() => addtocart(item)}
            className="font-rub font-regular text-bgHColor text-[18px] w-[80%] py-1 px-3 border border-bgPColor mx-auto rounded-lg group hover:bg-orange-500 hover:text-white"
          >
            Add to Cart
          </button>
        </div>
      {/* ))} */}
    </div>
    </div>
    </>
  )
}

export default Product

