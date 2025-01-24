import { useState } from 'react';
import Ommi from '../../assets/trusted/Ommi.webp'
import { FaMinus, FaPlus } from "react-icons/fa";

export default function CreatorWork() {
    const [activeIndex, setActiveIndex] = useState(null);

    const authenticator = [
        { id: 1, plus: <FaPlus />, title: 'Creator handle licensing', text: 'The contract and legal work you need to launch campaigns are integrated with the marketplace.' },
        { id: 2, plus: <FaPlus />, title: 'Content rights', text: 'License creator content to use across all your marketing channels. Whether it’s out-of-home, digital ads, print, or in-flight entertainment, create a truly omni-channel creator marketing experience.' },
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div className=" w-full mt-10 p-10 bg-[#F2F0EB] rounded-[40px]">
                <div className=" w-[90%] mx-auto flex  flex-col  md:flex-row gap-10 justify-around">
                    <div className="w-full sm:w-[50%] h-full order-1 sm:order-2">
                        <img src={Ommi} alt="" className=' w-full h-full' />
                    </div>
                    <div className='w-full sm:w-[50%] max-h-full order-2 sm:order-1 flex justify-center flex-col'>
                        <div className=" w-[200px] sm:w-[150px]  p-3 rounded-[30px] flex justify-center items-center bg-[#dde041]">
                            <span>Omni-channel</span>
                        </div>


                        {/* text creator */}

                        <div className=" md:text-xl text-xl md:flex gap-1 ">
                            <div className="text-2xl sm:text-5xl md:text-6xl font-bold font-custom-[Mona Sans Extended, sans-serif] ">
                            Take creator content beyond your social feed
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
                                        <span className='  text-xl text-nowrap sm:text-2xl'>{item.title}</span>
                                    </div>
                                    {/* Content */}
                                    <div
                                        className={`overflow-hidden  transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="w-[80%] sm:w-[70%]  mx-14">
                                            <p className="py-2">{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>



            </div>
        </div>
    )
}
