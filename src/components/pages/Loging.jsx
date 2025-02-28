import React from 'react'
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import { useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler';

const Loging = () => {

const [hidden, setHidden] = useState(false);
  return (
    <div className='w-full relative'>
        <OutsideClickHandler onOutsideClick ={() => { setHidden(false); }} >
                <Flex className={'items-center'}>
                <Heading as={'h3'} text={'Sine In'} className='cursor-pointer' onClick={() => setHidden(!hidden)} />
                <div onClick={() => setHidden(!hidden)}>
                <Heading as={'h3'} text={'Shop by Category'} className='font-dms text-[16px] pl-2 text-navHColor file:cursor-pointer relative'/>
                </div>
                {hidden && (
                  <div className='bg-white p-4 w-[230px] absolute left-[0px] top-[30px] rounded-md'>
                      
                       
                           <Heading as={'p'} text={'Category 1'}className='border-b pb-5 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Category 2'}className='border-b py-5 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Category 3'}className='border-b py-5 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Category 4'}className='border-b py-5 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Category 5'}className='border-b py-5 bottom-BorderInfoColor font-dm text-navColor'/>
                        
                        
                  </div>
                 )}
                </Flex>
        </OutsideClickHandler>
    </div>
  )
}

export default Loging
