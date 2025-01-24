import { useState } from 'react';
import creator from '../../assets/trusted/creator.webp'
import { FaMinus, FaPlus } from "react-icons/fa";

export default function CreatorWork() {
    const [activeIndex, setActiveIndex] = useState(null);

    const authenticator = [
        { id: 1, plus: <FaPlus />, title: 'Authenticated Creators', text: 'All social accounts are authenticated before joining the network—because brand safety is a priority. Trust the creators you partner with.' },
        { id: 2, plus: <FaPlus />, title: 'Creators raise their hand', text: 'Every creator sends you a brief pitch of why they’re a fit for your campaign, along with a brief creative concept. We’ll highlight creators that fit best with your campaign.' },
        { id: 3, plus: <FaPlus />, title: '150+ creator categories', text: 'Find ideal creators to reach your consumer profile. Whether it’s finance, travel, health, or home improvement—connect with them on the marketplace.' },
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div className=" w-full mt-10  ">
                <div className=" w-[90%] mx-auto flex flex-col sm:flex-row gap-5 justify-around    ">
                    <div className='w-full sm:w-[50%] max-h-full order-2 sm:order-1 '>
                        <div className=" w-40  md:w-40  p-3 rounded-[30px] flex justify-center items-center bg-[#dde041]">
                            <span>Creator Network</span>
                        </div>


                        {/* text creator */}

                        <div className=" md:text-xl text-xl md:flex gap-1 ">
                            <div className="text-3xl sm:text-4xl md:text-6xl font-bold font-custom-[Mona Sans Extended, sans-serif]">
                                Match with the right creators
                            </div>

                        </div>

                        {/* authenticator creator */}

                        <div className="w-[100%] mt-3">
                            {authenticator.map((item, index) => (
                                <div key={item.id} className="mb-3">
                                    {/* Header with toggle */}
                                    <div
                                        className="text-2xl w-full cursor-pointer flex justify-start items-center gap-6 p-3"
                                        onClick={() => handleToggle(index)}
                                    >
                                        <div
                                            className={`text-xs sm:text-xs transition-transform duration-300 ease-in-out ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                                                }`}
                                        >
                                            {activeIndex === index ? <FaMinus /> : item.plus}
                                        </div>
                                        <span className=' text-xl sm:text-2xl'>{item.title}</span>
                                    </div>
                                    {/* Content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="w-[60%] mx-14">
                                            <p className="py-2">{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full sm:w-[50%] h-full order-1 sm:order-2">
                        <img src={creator} alt="" className=' w-full h-full' />
                    </div>
                </div>



            </div>
        </div>
    )
}
