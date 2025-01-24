import React, { useEffect, useRef } from 'react';
import tick from '../../assets/brands/tick.svg';
import strategy from '../../assets/brands/strategy.webp';
import { useLocation } from 'react-router-dom';

const Strategy = () => {
    const strategyRef = useRef(null);
    const location = useLocation();

    useEffect(()=>{
        if(location.hash === '#strategy'){
            strategyRef.current?.scrollIntoView({behavior:"smooth"});
        }
    },[location.hash]);

  return (
    <div className='bg-[#F2F0EB] w-full flex flex-col sm:flex-row px-6 sm:px-10 rounded-xl py-10 mx-auto sm:py-14 gap-6'>
        <div className='w-full sm:w-[50%] mt-4 sm:mt-10 order-2 sm:order-1'>
            <button className='bg-[#DDE041] py-2 px-3 rounded-full' id='#strategy' ref={strategyRef}>Strategy</button>
            <h1 className='text-3xl sm:text-5xl font-custom py-7'>In-house strategic experts on every campaign</h1>
            <p className='font-customLight pb-4'>You’ll have a team of data-backed experts proactively working with you on every element of your campaign strategy.</p>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2'>
                    <img src={tick} alt='Tick' />
                    <p>Dedicated strategists for every campaign</p>
                </div>
                <div className='flex gap-2'>
                    <img src={tick} alt='Tick' />
                    <p>Strategy backed by research and normative data</p>
                </div>
                <div className='flex gap-2'>
                    <img src={tick} alt='Tick' />
                    <p>Targeting, creative, flight timing, and roster review</p>
                </div>
            </div>
        </div>
        <div className='w-full sm:w-[50%] order-1 sm:order-2'>
            <img src={strategy} alt='Strategy' />
        </div>
    </div>
  )
}

export default Strategy