import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import get from '../../assests/get.png';

const Get = () => {
    return (
        <div className="hero min-h-screen bg-base-500 my-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={get} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <div className=' pl-5'>
                        <h1 className="text-5xl font-bold">WHAT YOU GET</h1>
                        <p className="py-6">My streamlined development process and experience allow us to deliver top-of-the-line web development services that tick all the boxes.</p>
                    </div>
                    <div className=' flex justify-evenly'>
                        <div>
                            <div className=' flex items-center text-white'>
                                <FaRegCheckCircle /><span className='pl-2'>Carefully analyzed requirements</span>
                            </div>
                            <div className=' flex items-center text-white'>
                                <FaRegCheckCircle /><span className='pl-2'>Secure and scalable solution that works fast</span>
                            </div>
                            <div className=' flex items-center text-white'>
                                <FaRegCheckCircle /><span className='pl-2'>Custom features</span>
                            </div>
                            <div className=' flex items-center text-white'>
                                <FaRegCheckCircle /><span className='pl-2'>Maintenance and support</span>
                            </div>
                        </div>
                        <div>
                            <div className=' flex items-center text-white'>
                                <FaRegCheckCircle /><span className='pl-2'>Carefully analyzed requirements</span>
                            </div>
                            <div className=' flex items-center text-white'>
                                <FaRegCheckCircle /><span className='pl-2'>Secure and scalable solution that works fast</span>
                            </div>
                            <div className=' flex items-center text-white'>
                                <FaRegCheckCircle /><span className='pl-2'>Custom features</span>
                            </div>
                            <div className=' flex items-center text-white'>
                                <FaRegCheckCircle /><span className='pl-2'>Maintenance and support</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Get;