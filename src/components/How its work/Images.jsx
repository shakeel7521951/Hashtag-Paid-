import cpd from '../../assets/Trusted/cpd.jpg'
import phila from '../../assets/Trusted/phila.jpg'
import prod from '../../assets/Trusted/prod.jpg'
export default function Images() {

    return (
        <div>
            <div className="w-full sm:w-11/12 lg:w-4/5 mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Image One */}
                    <div className="h-[25rem] sm:h-[30rem] lg:h-[35rem] w-full">
                        <img
                            src={phila}
                            alt="Image 1"
                            className="h-full w-full object-cover rounded-2xl"
                        />
                    </div>

                    {/* Combined Images */}
                    <div className="flex flex-col h-full gap-4">
                        <img
                            src={cpd}
                            alt="Image 2"
                            className="w-full h-[12rem] sm:h-[15rem] lg:h-[18rem] object-cover rounded-2xl"
                        />
                        <img
                            src={prod}
                            alt="Image 3"
                            className="w-full h-[12rem] sm:h-[15rem] lg:h-[18rem] object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
