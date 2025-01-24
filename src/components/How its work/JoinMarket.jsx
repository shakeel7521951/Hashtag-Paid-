

export default function JoinMarket() {
    return (
        <div className=" bg-[#DDE041] p-10 rounded-b-[30px] ">
            <div className=" w-[100%] md:w-[70%] p-2  mx-auto ">
                <h1 className=" text-xl md:text-6xl sm:text-3xl text-center font-bold font-custom-[Inter,sans-serif]">
                    Join the marketplace.Find your next match.
                </h1>
            </div>

            {/* Join now */}
            <div className=' w-full mb-5'>
                <div className='bg-black w-[100px] sm:w-[150px] md:w-[200px] mx-auto mt-3 cursor-pointer rounded-[30px] hover:bg-gray-400 transition-all'>
                    <span className=" text-xs flex justify-center items-center gap-3 text-white md:text-xl p-3 text-center font-bold font-custom-[Inter,sans-serif]">Book a Demo </span>
                </div>
            </div>


            {/* join #paid */}
            <div className='flex justify-center items-center mb-10'>
                <p className='text-base md:text-xl text-[#27282a] font-custom-[Mona Sans, sans-serif]'>Are you a creator?</p>
                <a href="#" className=' text-base md:text-xl font-custom-[Inter, sans-serif] text-[#27282a] underline'>Join #paid</a>
            </div>
        </div>
    )
}
