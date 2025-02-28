import React, { useEffect, useState } from 'react';
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const User = () => {
    let [hidden, setHidden] = useState(false);
    let [scrollChange, setScrollChange] = useState(false);
    let [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        let handleScroll = () => {
            setScrollChange(window.scrollY > 1000);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='relative'>
            <Flex className={'items-center'}>
                <div onClick={() => setHidden(!hidden)}>
                    <Heading 
                        as={'h4'} 
                        text={"Sign In"} 
                        className={`text-[14px] rounded-md translate-y-[-50%] ml-2 mt-3 pl-2 pr-2 cursor-pointer border 
                        ${scrollChange ? "lg:text-gray-950 lg:font-semibold lg:border-gray-900" : "text-gray-900 border-gray-900"}`} 
                    />
                </div>

                {hidden && (
                    <div className='bg-white sm:w-[90%] sm:max-w-[90%] mx-auto md:w-[400px] md:max-w-[400px] absolute -mt-[90px] -ml-[140px] md:mt-0 md:ml-0 md:right-[-140px]   md:top-[-350px] lg:right-[380px] lg:top-[90px] rounded-md py-2 px-2 md:py-8 md:px-10 shadow-lg'>
                        <div onClick={() => setHidden(!hidden)} className="absolute top-3 right-3 cursor-pointer">
                            <RxCross2 className='text-[22px] text-gray-900' />
                        </div>

                        {isLogin ? (
                            <>
                                <Heading as={'h4'} text={'Login'} className='font-semibold text-[24px] md:text-[32px] text-center' />
                                <div className='pt-4'>
                                    <label className='text-gray-700 font-semibold'>Email</label>
                                    <input type="text" className='border border-gray-300 mt-2 p-2 bg-white rounded-lg w-full' placeholder="Enter Your Email" required />
                                </div>

                                <div className='pt-4'>
                                    <label className='text-gray-700 font-semibold'>Password</label>
                                    <input type="password" className='border border-gray-300 mt-2 p-2 bg-white rounded-lg w-full' placeholder="Enter Your Password" required />
                                </div>

                                <Flex className={'justify-between pt-3 text-sm'}>
                                    <div>
                                        <input type="checkbox" id="rememberMe" />
                                        <label htmlFor="rememberMe" className='ml-2 text-gray-600'>Remember me</label>
                                    </div>
                                    <a href="#" className='underline text-blue-500'>Forgot Password?</a>
                                </Flex>

                                <button className='w-full rounded-lg border border-orange-600 py-2 mt-5 bg-orange-600 text-white font-semibold text-[18px]'>
                                    Login
                                </button>

                                <div className='text-center pt-3'>
                                    <Heading as={'p'} text={'Or Sign in with'} className={'text-gray-500'} />
                                    <Flex className={'justify-center gap-4 mt-5'}>
                                        <button className='flex items-center gap-2 border border-gray-400 py-2 px-6 rounded-lg'>
                                            <FcGoogle className='text-[22px]' />
                                            <span className='font-semibold'>Google</span>
                                        </button>
                                        <button className='flex items-center gap-2 border border-gray-400 py-2 px-6 rounded-lg'>
                                            <FaFacebookF className='text-[22px] text-blue-600' />
                                            <span className='font-semibold'>Facebook</span>
                                        </button>
                                    </Flex>
                                </div>

                                <div className="text-center mt-4">
                                    <Flex className={'justify-center gap-x-2'}>
                                        <p className='text-gray-600 text-[18px]'>Don’t have an account?</p>
                                        <button onClick={() => setIsLogin(false)} className='text-orange-500 font-bold text-[20px]'>
                                            Sign Up
                                        </button>
                                    </Flex>
                                </div>
                            </>
                        ) : (
                            <>
                                <Heading as={'h4'} text={'Register'} className='font-semibold text-[24px] md:text-[32px] text-center' />
                                <div className='pt-4'>
                                    <label className='text-gray-700 font-semibold'>Full Name</label>
                                    <input type="text" className='border border-gray-300 mt-2 p-2 bg-white rounded-lg w-full' placeholder="Enter Your Name" required />
                                </div>

                                <div className='pt-4'>
                                    <label className='text-gray-700 font-semibold'>Email</label>
                                    <input type="text" className='border border-gray-300 mt-2 p-2 bg-white rounded-lg w-full' placeholder="Enter Your Email" required />
                                </div>

                                <div className='pt-4'>
                                    <label className='text-gray-700 font-semibold'>Password</label>
                                    <input type="password" className='border border-gray-300 mt-2 p-2 bg-white rounded-lg w-full' placeholder="Enter Your Password" required />
                                </div>

                                <button className='w-full rounded-lg border border-orange-600 py-2 mt-5 bg-orange-600 text-white font-semibold text-[18px]'>
                                    Register
                                </button>

                                <div className='text-center pt-3'>
                                    <Heading as={'p'} text={'Or Sign Up with'} className={'text-gray-500'} />
                                    <Flex className={'justify-center gap-4 mt-5'}>
                                        <button className='flex items-center gap-2 border border-gray-400 py-2 px-6 rounded-lg'>
                                            <FcGoogle className='text-[22px]' />
                                            <span className='font-semibold'>Google</span>
                                        </button>
                                        <button className='flex items-center gap-2 border border-gray-400 py-2 px-6 rounded-lg'>
                                            <FaFacebookF className='text-[22px] text-blue-600' />
                                            <span className='font-semibold'>Facebook</span>
                                        </button>
                                    </Flex>
                                </div>

                                <div className="text-center mt-4">
                                    <Flex className={'justify-center gap-x-2'}>
                                        <p className='text-gray-600 text-[18px]'>Already have an account?</p>
                                        <button onClick={() => setIsLogin(true)} className='text-orange-500 font-bold text-[20px]'>
                                            Sign In
                                        </button>
                                    </Flex>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </Flex>
        </div>
    );
}

export default User;
