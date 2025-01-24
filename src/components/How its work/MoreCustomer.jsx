import { FaArrowRight } from 'react-icons/fa'
import fruit from '../../assets/Trusted/fruits.webp'
import study from '../../assets/Trusted/study.webp'

export default function MoreCustomer() {
    const Outer = [
        {
            name: "Dr.Oetker", title: "How Dr.Oetker drove 5x the industry benchmark for Story Views", img: fruit, readmore: 'Read', icon: <FaArrowRight />
        },
        {
            name: "National retail chain", title: "National retail chain drives in-store traffic with local creators", img: study, readmore: 'Read', icon: <FaArrowRight />
        },
    ]
    return (
        <div className=" mt-10">
            <div className=" w-[100%] md:w-[50%]  mx-auto ">
                <h1 className=" text-2xl md:text-4xl text-center font-bold font-custom-[Inter,sans-serif]">More customer stories</h1>
            </div>

            {/* otterbox & PUIG */}
            <div className=' flex justify-center flex-col sm:flex-row cursor-pointer' onClick={() => window.location.href = "/otterbox-symmetrys-creator-approved-phone-protection"}>
                {
                    Outer.map((item, index) => (
                        <div key={index} className=" w-full mt-10 flex justify-center items-center">
                            <div className=" w-[70%] mx-auto bg-[#F2F0EB] p-3 rounded-lg">
                                <h1 className=" text-xs md:text-xs text-[#727375] font-bold font-custom-[Inter,sans-serif]">{item.name}</h1>
                                <p className=" text-xs md:text-xl font-bold font-custom-[Inter,sans-serif]">{item.title}</p>
                                <div className=" mt-5 h-[300px] w-[100%]">
                                    <img src={item.img} alt="" className=' h-full w-full' />
                                </div>
                                <div className=" mt-5 flex items-center gap-2">
                                    <p className="  text-xl font-custom-[Inter,sans-serif]">{item.readmore}</p>
                                    <span className=" text-xl  font-custom-[Inter,sans-serif]">{item.icon}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


            {/* explore more */}
            <div className=' w-full mb-10'>
                <div className=' bg-black w-[150px] md:w-[150px] mx-auto mt-3 cursor-pointer rounded-[30px] hover:bg-gray-400 transition-all ' >
                    <span className=" text-xs flex justify-center items-center gap-3 text-white md:text-xl p-3 text-center font-bold font-custom-[Inter,sans-serif] ">Explore  <FaArrowRight /></span>
                </div>
            </div>


        </div>
    )
}
