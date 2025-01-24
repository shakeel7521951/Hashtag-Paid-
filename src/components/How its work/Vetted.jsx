import TrustedBy from "./TrustedBy";




export default function Vetted() {
    return (
        <div className=" bg-[#DDE041] p-10 rounded-b-[30px] ">
            <div className=" w-[100%] md:w-[70%] p-2  mx-auto ">
                <h1 className=" text-xl md:text-4xl sm:text-3xl text-center font-bold font-custom-[Inter,sans-serif]">
                    Thousands of vetted creators and brands ready to collaborate
                </h1>
            </div>

            {/* Join now */}
            <div className=' w-full mb-5'>
                <div className='bg-black w-[110px] sm:w-[140px] md:w-[150px] mx-auto mt-3 cursor-pointer rounded-[30px] hover:bg-gray-400 transition-all'>
                    <span className=" text-xs flex justify-center items-center gap-3 text-white sm:text-xl p-3 text-center font-bold font-custom-[Inter,sans-serif]">Get Started </span>
                </div>
            </div>


            {/* join #paid */}
            <div className='flex justify-center items-center mb-10'>
                <p className='text-base md:text-xl text-[#27282a] font-custom-[Mona Sans, sans-serif]'>Are you a creator?</p>
                <a href="#" className=' text-base md:text-xl font-custom-[Inter, sans-serif] text-[#27282a] underline'>Join #paid</a>
            </div>


            {/* image slider */}
            <TrustedBy/>
        </div>
    )
}
