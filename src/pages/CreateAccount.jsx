import icon from '../assets/icon.svg';
import account from '../assets/Trusted/account.webp';

export default function CreateAccount() {
    const brand = [
        {
            brand: "Brand or Agency",
            para: "Match with creators",
            arrow: "→"
        }
    ];

    const create = [
        {
            name: "Creator",
            para: "Match with brands",
            arrow: "→"
        },
        {
            name: "Talent Agency",
            para: "Matches for your rosters",
            arrow: "→"
        }
    ];

    return (
        <div className="w-full h-[100vh] bg-gray-50 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                {/* Join paid section */}
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-3xl md:text-5xl font-custom mb-4 text-center">
                        Join #paid
                    </h1>
                    <img src={icon} alt="Icon" className="mb-4" />
                    <div className="text-[#ff492c] text-xl font-semibold mb-6">
                        “BEST CUSTOMER SUPPORT”
                    </div>

                    {/* Input sections */}
                    <div className="w-full max-w-lg grid grid-cols-1   md:grid-cols-1 lg:grid-cols-2 md:gap-5 ">
                        {/* Single column for "Brand or Agency" */}
                        <div className="flex  justify-between items-end bg-white shadow-md p-4 rounded-lg hover:bg-[#c0c0c5] transition-all duration-300 cursor-pointer mb-4 ">
                            <div className=''>
                                <h2 className="text-xl font-bold">{brand[0].brand}</h2>
                                <p className="text-gray-600">{brand[0].para}</p>
                            </div>
                            <div className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
                                {brand[0].arrow}
                            </div>
                        </div>

                        {/* Flex column for other items */}
                        <div className="flex flex-col gap-4 py-5">
                            {create.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex  justify-between items-center bg-white shadow-md p-4 rounded-lg hover:bg-[#c0c0c5] transition-all duration-300 cursor-pointer h-[20vh]"
                                >
                                    <div className=''>
                                        <h2 className="text-xl font-bold">{item.name}</h2>
                                        <p className="text-gray-600">{item.para}</p>
                                    </div>
                                    <div className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
                                        {item.arrow}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image section */}
                <div className="hidden  md:flex justify-center items-center">
                    <img
                        src={account}
                        alt="Account"
                        className="rounded-lg shadow-lg object-cover h-[90vh] w-[100vh]"
                    />
                </div>
            </div>
        </div >
    );
}
