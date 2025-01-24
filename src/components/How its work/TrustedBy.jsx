import one from '../../assets/Trusted/one.svg';
import toyota from '../../assets/Trusted/toyota.svg';
import biore from '../../assets/Trusted/biore.svg';
import coke from '../../assets/Trusted/coke.png';
import everote from '../../assets/Trusted/everote.png';
import visa from '../../assets/Trusted/visa.png';
import infinite from '../../assets/Trusted/infinite.webp';

export default function TrustedBy() {
    return (
        <div className="py-8 bg-gray-100 rounded-[20px] p-2">
            <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
                {/* Title */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                        Trusted by
                    </h2>
                </div>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-12 items-center">
                    <div className="h-[100px] flex justify-center items-center">
                        <img src={one} alt="One" className="h-full object-contain" />
                    </div>
                    <div className="h-[100px] flex justify-center items-center">
                        <img src={toyota} alt="Toyota" className="h-full object-contain" />
                    </div>
                    <div className="h-[100px] flex justify-center items-center">
                        <img src={coke} alt="Coca-Cola" className="h-full object-contain" />
                    </div>
                    <div className="h-[100px] flex justify-center items-center">
                        <img src={everote} alt="Evernote" className="h-full object-contain" />
                    </div>
                    <div className="h-[100px] flex justify-center items-center">
                        <img src={visa} alt="Visa" className="h-full object-contain" />
                    </div>
                    <div className="h-[100px] flex justify-center items-center">
                        <img src={biore} alt="Biore" className="h-full object-contain" />
                    </div>
                    <div className="h-[100px] flex justify-center items-center">
                        <img src={infinite} alt="Infinite" className="h-full object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
}
