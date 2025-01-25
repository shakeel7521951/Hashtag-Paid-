import React from 'react';
import sonia from '../../assets/creatorsMarket/sonia.webp'; 
import soniaLogo from '../../assets/creatorsMarket/soniaLogo.png'; 
import danielle from '../../assets/creatorsMarket/Danielle.webp'; 
import danielleLogo from '../../assets/creatorsMarket/danielleLogo.webp'; 
import json from '../../assets/creatorsMarket/json.webp'; 
import jsonLogo from '../../assets/creatorsMarket/jsonLogo.webp'; 
import shelley from '../../assets/creatorsMarket/shelley.webp'; 
import shelleyLogo from '../../assets/creatorsMarket/shelleyLogo.png'; 
import kehlea from '../../assets/creatorsMarket/kehlea.webp'; 
import kehleaLogo from '../../assets/creatorsMarket/kahleaLogo.webp'; 
import bita from '../../assets/creatorsMarket/bita.webp'; 
import bitaLogo from '../../assets/creatorsMarket/bitaLogo.png'; 
import grace from '../../assets/creatorsMarket/grace.webp'; 
import graceLogo from '../../assets/creatorsMarket/graceLogo.png'; 
import whitney from '../../assets/creatorsMarket/whitny.webp'; 
import whitneyLogo from '../../assets/creatorsMarket/whitneyLogo.webp'; 

const Creators = () => {
    const creators = [
        {
            id: 1,
            image: sonia,
            logo: soniaLogo,
            name: "Sonia Carreno",
            role: "President, IAB Canada"
        },
        {
            id: 2,
            image: danielle,
            logo: danielleLogo,
            name: "Danielle Ito",
            role: "Influencer Marketing Manager, Notion"
        },
        {
            id: 3,
            image: json,
            logo: jsonLogo,
            name: "Jason Tartick",
            role: "Creator"
        },
        {
            id: 4,
            image: shelley,
            logo: shelleyLogo,
            name: "Shelley Samel",
            role: "Chief Legal Officer, Ad Standards"
        },
        {
            id: 5,
            image: kehlea,
            logo: kehleaLogo,
            name: "Kahlea Nicole",
            role: "Creator"
        },
        {
            id: 6,
            image: bita,
            logo: bitaLogo,
            name: "Bita Eghbali",
            role: "Creator Partnerships Manager, Snap"
        },
        {
            id: 7,
            image: grace,
            logo: graceLogo,
            name: "Grace Wells",
            role: "Creator"
        },
        {
            id: 8,
            image: whitney,
            logo: whitneyLogo,
            name: "Whitney Bloom",
            role: "Client Partner, Meta"
        },

    ];

    return (
        <div className='bg-[#F2F0EB] mt-7 rounded-[45px] flex flex-col sm:flex-row w-full px-3 mx-auto sm:px-10 py-20' style={{minHeight:'100vh'}}>
            <div className='w-full sm:w-[40%] sm:sticky top-24 mx-auto'>
                <h1 className='font-custom text-3xl sm:text-5xl top-20 sm:sticky'>Speakers</h1>
                <p className='font-customLight my-4 top-36 sm:sticky'>
                    Industry experts that have an in-depth understanding of creator marketing. These are the leaders you want to learn from!
                </p>
            </div>
            <div className='w-full sm:w-[80%] flex flex-row flex-wrap gap-5'>
                {creators.map((creator) => (
                    <div key={creator.id} className='rounded-2xl mx-auto relative bg-white p-4 w-fit h-fit'>
                        <img src={creator.image} className='rounded-[40px] w-[300px]' alt={creator.name} />
                        <img src={creator.logo} className='absolute bottom-36 w-[70px] left-8 bg-white p-2 object-fit rounded-full' alt={`${creator.name} logo`} />
                        <h1 className='font-custom text-3xl'>{creator.name}</h1>
                        <p className='font-customLight'>{creator.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Creators;
