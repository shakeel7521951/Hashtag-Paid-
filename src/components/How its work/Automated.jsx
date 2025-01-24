import { useEffect, useRef, useState } from 'react';
import automated from '../../assets/trusted/automated.webp'
import { FaMinus, FaPlus } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

export default function CreatorWork() {
    const [activeIndex, setActiveIndex] = useState(null);
    const automateRef = useRef(null);
    const location = useLocation();
  
    useEffect(() => {
      if (location.hash === "#automate") {
        automateRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, [location.hash]);

    const authenticator = [
        { id: 1, plus: <FaPlus />, title: 'No need to haggle or negotiate', text: 'You have access to standardized pricing for content creation and usage rights so you’ll never have to negotiate with creators.' },
        { id: 2, plus: <FaPlus />, title: 'Creator data and demographics', text: 'You’ll have access to creator data and audience demographics before going live with every campaign.' },
        { id: 3, plus: <FaPlus />, title: 'Automated creator payments', text: 'Never manage creator payments again. Creators are paid automatically once the campaign is completed.' },
        { id: 4, plus: <FaPlus />, title: 'Contracting and legal covered', text: 'The contract and legal work you need to launch campaigns are integrated with the marketplace.' },
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <div className=" w-full mt-10 p-10">
                <div className=" w-[90%] mx-auto flex  flex-col  md:flex-row gap-20 justify-around">
                    <div className="w-full sm:w-[50%] h-full order-1 sm:order-1">
                        <img src={automated} alt="" className=' w-full h-full' />
                    </div>
                    <div className='w-full sm:w-[50%] max-h-full order-2 sm:order-2 '>
                        <div id='#automate' ref={automateRef} className=" w-[200px] sm:w-[200px]  p-3 rounded-[30px] flex justify-center items-center bg-[#dde041]">
                            <span>Automated workflows</span>
                        </div>


                        {/* text creator */}

                        <div className=" md:text-xl text-xl md:flex gap-1 ">
                            <div className="text-3xl sm:text-5xl md:text-6xl font-bold font-custom-[Mona Sans Extended, sans-serif] ">
                                Never stress about legal and admin tasks  </div>

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
                                        <span className=' text-base text-nowrap sm:text-2xl'>{item.title}</span>
                                    </div>
                                    {/* Content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="w-[80%] sm:w-[80%] mx-14">
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
