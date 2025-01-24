import harvest from '../../assets/Trusted/harvest.webp';

export default function Harvest() {
    return (
        <div className="bg-black mx-auto w-full">
            <div className="w-[90%]  flex flex-col md:flex-row mx-auto p-5 md:p-10 gap-5 md:gap-10">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img 
                        src={harvest} 
                        alt="Harvest" 
                        className="w-full h-auto md:h-full rounded-[40px] md:rounded-[80px] object-cover" 
                    />
                </div>
                
                {/* Text Section */}
                <div className="w-full md:w-1/2 text-white flex flex-col justify-center  text-center md:text-left">
                    <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold font-custom-[Mona Sans Extended, sans-serif] leading-relaxed">
                        “I really appreciate how efficient the #Paid online platform is – from browsing creator hand raises, to adjusting the budget and providing feedback, it was a great experience.”
                    </h1>
                    <span className="text-sm sm:text-base md:text-lg mt-4">
                        Victoria Perrotta <br /> 
                        Brand Manager — Wonderbrands
                    </span>
                </div>
            </div>
        </div>
    );
}
