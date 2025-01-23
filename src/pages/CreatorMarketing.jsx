import React from 'react'
import Hero from '../components/creatorMarketing/Hero'
import Creators from '../components/creatorMarketing/Creators'
import Agenda from '../components/creatorMarketing/Agenda'
import SoldOut from '../components/creatorMarketing/SoldOut'
import LastSection from '../components/creatorMarketing/LastSection'

const CreatorMarketing = () => {
  return (
    <div className='bg-black'>
        <Hero />
        <Creators />
        <Agenda />
        <SoldOut />
        <LastSection />
    </div>
  );
};

export default CreatorMarketing;
