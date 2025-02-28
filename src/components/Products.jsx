import React from 'react'
import Flex from './Flex'
import Product from './Product'

const Products = () => {
  return (
    <div>
        <Flex className={'justify-between pt-12 flex-wrap '}>
        <Product addtocart={'Add To Cort'}/>
        <Product addtocart={'Add To Cort'}/>
        <Product addtocart={'Add To Cort'}/>
        <Product addtocart={'Add To Cort'}/>
      </Flex>
    </div>
  )
}

export default Products
