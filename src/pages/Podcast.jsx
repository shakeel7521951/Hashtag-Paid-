import spotify from '../assets/Trusted/spotify.svg';
export default function Podcast() {

    return (
        <div>
            <div className=' w-[100%] h-[100vh] flex justify-center items-center bg-black'>
                <div className=' w-[80%] mx-auto flex justify-center items-center flex-col p-10'>
                    <img src={spotify} alt="" className=' mb-10'/>
                    <h1 className="text-white text-xl sm:text-3xl text-center mb-6 font-bold">Sorry, that’s not currently available in your region.</h1>
                    <span className=' text-[#A7A7A7] text-center mb-3 sm:text-xl sm:mb-6'>Luckily, lots of other stuff is.</span>
                    <div className=' w-full mb-10'>
                        <div className=' bg-white w-[150px] md:w-[150px] mx-auto mt-3 cursor-pointer rounded-[30px] hover:bg-gray-400 transition-all ' >
                            <span className=" text-xs flex justify-center items-center gap-3 text-black md:text-xl p-3 text-center font-bold ">Discover me</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
