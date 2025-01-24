
import icons from '../../assets/icon.svg'
import CreatorWork from './CreatorWork'
import ImageSlider from './ImageSlider'
import TrustedBy from './TrustedBy'

import CompaignStrategy from '../How its work/CompaignStrategy'
import Analytics from './Analytics'
import Automated from './Automated'
import Ommi from './Ommi'
import Harvest from './Harvest'
import Findout from './Findout'
import JoinMarket from './JoinMarket'
export default function Howits() {
    return (
        <div>
            <div className=' w-[100%] md:w-[100%] lg:w-[100%] sm:w-[70%] p-3 mx-auto pb-16 rounded-bl-[70px] rounded-br-[70px] md:bg-[#F2F0EB]'>
                <h4 className=' text-center  text-xl  font-bold font- text-[#4e4eff] mb-6 font-custom-[Mona Sans Extended, sans-serif]'>How its works</h4>
                <div className=' text-5xl text-center sm:text-7xl font-bold font-custom-[Mona Sans Extended, sans-serif]'>
                    Match with
                </div>
                <div className=' text-5xl text-center sm:text-7xl font-bold font-custom-[Mona Sans Extended, sans-serif]'>
                    creators and
                </div>
                <div className=' text-5xl text-center sm:text-7xl font-bold font-custom-[Mona Sans Extended, sans-serif]'>
                    launch your next
                </div>
                <div className=' text-5xl text-center sm:text-7xl font-bold font-custom-[Mona Sans Extended, sans-serif]'>
                    campaign
                </div>
                <div className=' mt-5 text-center text-xl font-custom-[Mona Sans, sans-serif]'>
                    Create, manage, and measure your creator marketing all in one place—with expert strategy and creative every step of the way.
                </div>

                <button className="px-6 w-[150px]  sm:w-[200px] border-none py-3  mx-auto mt-4 bg-black rounded-full hover:bg-[#514f4c85] hover:border-none transition-all duration-200 cursor-pointer flex justify-center items-center">
                    <span className="text-base sm:text-lg md:text-xl text-white">Book a Demo</span>
                </button>

                <div className=' mt-4'>
                    <div className='flex justify-center items-center'>
                        <p className=' text-[#727375] font-custom-[Mona Sans, sans-serif]'>Are you a creator?</p>
                        <a href="#" className=' font-custom-[Inter, sans-serif] text-[#727375] underline'>Join #paid</a>
                    </div>
                    <div className=' flex justify-center items-center flex-col mt-4'>
                        <div className=''>
                            <img src={icons} alt="" />
                        </div>
                        <div className=' text-[#ff492c]'>
                            “BEST CUSTOMER SUPPORT”
                        </div>
                    </div>
                </div>


            </div>


            {/* Here i just add all the component which we make it in how its work */}


            {/* svg images by brands */}

            <TrustedBy />

            {/* image slider */}
            <ImageSlider />

            {/* Creator */}
            <CreatorWork />

            {/* compaign strategy */}
            <CompaignStrategy />

            {/* analytics */}
            <Analytics />

            {/* Automated */}
            <Automated />

            {/* Ommi */}
            <Ommi />

            {/* Harvest */}
            <Harvest/>

            {/* Findout */}
            <Findout/>

            {/* Join marketplace */}
            <JoinMarket/>
        </div>
    )
}
