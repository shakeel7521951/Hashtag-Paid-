import iphone from '../../assets/Trusted/iphone.webp'
import Images from './Images'
import MoreCustomer from './MoreCustomer'
import Numbers from './Numbers'
import Vetted from './Vetted'
export default function Paid() {
    return (
        <div>
            <div className=" flex w-full justify-center items-center flex-col md:flex-row order-2 sm:order-1">

                {/* content way */}
                <div className=" w-full sm:w-[40%] order-1 px-3">
                    <span className=" text-xs  sm:text-2xl font-bold  text-[#4e4eff]">#paid x Otterbox</span>
                    <div className=" w-[100%] md:w-[20%] sm:w-[80%] text-xl  sm:text-5xl font-bold font-custom">
                        Otterbox Symmetrys creator-approved phone protection
                    </div>
                </div>

                {/* image div */}
                <div className='  h-[30rem] sm:h-[40rem] w-[100%] sm:w-[80%] md:w-[50%]  order-1 sm:order-2'>
                    <img src={iphone} alt="" className=' h-full w-full rounded-[50px]' />
                </div>
            </div>



            {/* remaining all component here */}



            {/* Numbers component */}
            <Numbers/>

            {/* images component */}
            <Images/>


            {/* more customer */}
            <MoreCustomer/>

            {/* Thousand vetted */}
            <Vetted/>
        </div>
    )
}
