import React from 'react';
import tick from '../../assets/agencies/tick.svg';
import support from '../../assets/agencies/support.webp';

const Support = () => {
  return (
    <div className='bg-white w-full flex flex-col sm:flex-row px-6 sm:px-10 rounded-xl py-10 mx-auto sm:py-14 gap-6'>
        <div className='w-full sm:w-[50%] mt-4 sm:mt-10 order-2 sm:order-1'>
            <button className='bg-[#DDE041] py-2 px-3 rounded-full'>Support</button>
            <h1 className='text-3xl sm:text-5xl font-custom py-7'>Dedicated 1:1 expert support</h1>
            <p className='font-customLight pb-4'>Our team is here to make sure you’re matched with the right creators, deliverables are handed off on time, and your campaign strategy and creative are a success.</p>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2'>
                    <img src={tick} alt='Tick' />
                    <p>Don’t miss launch dates. We manage campaign schedules and deliverables for you</p>
                </div>
                <div className='flex gap-2'>
                    <img src={tick} alt='Tick' />
                    <p>Too busy? Let us handle the back and forth with creators</p>
                </div>
                <div className='flex gap-2'>
                    <img src={tick} alt='Tick' />
                    <p>Live campaign reviews—so you always know what’s working and how to improve for the next campaign</p>
                </div>
            </div>
        </div>
        <div className='w-full sm:w-[50%] order-1 sm:order-2'>
            <img src={support} alt='Strategy' />
        </div>
    </div>
  )
}

export default Support;