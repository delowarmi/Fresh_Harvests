
import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import Heading from './Heading'
import Flex from './Flex'

const Product = ({ addtocart,ImgSrc ,title,price,item,category,id}) => {

  return (
    <>
    <div className="w-[100%]">
    <div className="flex flex-wrap justify-between">
      {/* {products.map((item) => ( */}
        <div  className="w-[100%] text-center bg-gray-200 border rounded-lg p-4 shadow-md mt-4">
          <Link to={`/products/${id}`}><Image ImgSrc={ImgSrc} className="w-full h-52 object-cover rounded-md" /></Link>
          <Heading as="p" text={title} className=" h-6 font-rub font-medium text-[18px] text-bgHColor" />
          <Flex className={'justify-between '}>
          <Heading as="p" text={category} className="font-qus font-regular text-[18px] text-bgPColor" />
          <Heading as="p" text={price} className=" font-qus text-orange-600 font-bold" />
          </Flex>
          <button
            onClick={() => addtocart(item)}
            className="w-full font-rub font-regular text-bgHColor text-[18px] py-1 px-3 border border-bgPColor mx-auto rounded-lg group hover:bg-orange-500 hover:text-white"
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

