import { useState } from 'react';
import analytics from '../../assets/trusted/analytics.webp'
import { FaMinus, FaPlus } from "react-icons/fa";

export default function CreatorWork() {
    const [activeIndex, setActiveIndex] = useState(null);

    const authenticator = [
        { id: 1, plus: <FaPlus />, title: 'Competitive benchmarking', text: 'Know how your campaign performs against industry norms, and other brands targeting the same audience.' },
        { id: 2, plus: <FaPlus />, title: 'Live campaign reporting ', text: 'Campaign data is refreshed every 24 hours so you always have a pulse on your campaign performance.' },
        { id: 3, plus: <FaPlus />, title: 'Understand what is working and why', text: 'Robust brand studies that measure performance and glean insight from consumption behaviours, comment sentiment, message pull through, and the assessment of creative attributes that drive performance.' },
        { id: 4, plus: <FaPlus />, title: 'Campaign wrap up', text: 'Your dedicated team of strategists meet with you to walk through campaign results, insights, and strategy for future growth.' },
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div className=" w-full  bg-black  p-10 rounded-[50px]">
                <div className=" w-[90%] mx-auto flex flex-col sm:flex-row md:flex-row gap-20 justify-around">
                <div className='w-full sm:w-[50%] max-h-full order-2 sm:order-1 '>
                        <div className=" w-[200px] sm:w-[300px]  p-3 rounded-[30px] flex justify-center items-center bg-[#dde041]">
                            <span>Analytics & reporting</span>
                        </div>


                        {/* text creator */}

                        <div className=" md:text-xl text-xl md:flex gap-1 ">
                            <div className="text-2xl sm:text-5xl md:text-6xl font-bold font-custom-[Mona Sans Extended, sans-serif] text-white">
                            Learn insights about your audience
                            </div>

                        </div>

                        {/* authenticator creator */}

                        <div className="w-[100%] mt-3">
                            {authenticator.map((item, index) => (
                                <div key={item.id} className="mb-3">
                                    {/* Header with toggle */}
                                    <div
                                        className="text-2xl w-full cursor-pointer flex justify-start items-center gap-6 p-3 text-white"
                                        onClick={() => handleToggle(index)}
                                    >
                                        <div
                                            className={`text-xs sm:text-xs transition-transform duration-300 ease-in-out ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                                                }`}
                                        >
                                            {activeIndex === index ? <FaMinus /> : item.plus}
                                        </div>
                                        <span className='text-white text-base text-nowrap sm:text-2xl'>{item.title}</span>
                                    </div>
                                    {/* Content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="w-[80%] sm:w-[80%] mx-14">
                                            <p className="py-2 text-white">{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full sm:w-[50%] h-full order-1 sm:order-2">
                        <img src={analytics} alt="" className=' w-full h-full' />
                    </div>
                    
                </div>



            </div>
        </div>
    )
}
