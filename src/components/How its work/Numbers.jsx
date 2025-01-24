

export default function Numbers() {

    const num = [
        {
            number: "112%", data: "Attainment of Intagram Video VR goal"
        },
        {
            number: "18%", data: "Above ER benchmark for Instagram"
        },
        {
            number: "115%", data: "Attainment of TikTok Total Views"
        },
        {
            number: "47%", data: "Above VR benchmark for TikTok"
        },
    ]


    const goal = [
        {
            goal: "Goal", para: 'Show Americans that Otterboxs Symmetry line offers protection in a sleek, trendy design—while also highlighting the benefits of the case from the lens of a creator.'
        },
        {
            goal: 'The campaign', para: 'A creator program showcased the benefits and design of the Otterbox Symmetry Series cases through lifestyle content shared on stories, video content and in-feed carousels to encourage engagement.'
        }
    ]
    return (
        <div className="  ">

            {/* Numbers section */}
            <div className=" w-[90%] mx-auto">
                <div className=" md:mt-10 mt-4 ">
                    <div className=" grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {
                            num.map((item, index) => (
                                <div
                                    key={index}
                                    className="border flex justify-center items-center flex-col p-2 h-[260px] rounded-xl 
                                           hover:bg-[#dde041] hover:scale-105 hover:shadow-lg 
                                           transition-all duration-300 ease-in-out"
                                >
                                    <h1 className=" text-2xl sm:text-4xl font-bold font-custom-[Mona Sans,sans-serif] ">{item.number}</h1>
                                    <span className=" text-center">{item.data}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* goal section */}

            <div className=" w-[100%]  sm:w-[70%] mx-auto mt-10 p-3">
                {
                    goal.map((item, index) => (
                        <div key={index}>
                            <h1 className=" text-2xl font-bold sm:text:4xl md:text-4xl font-custom-[Mona Sans,sans-serif] ">{item.goal}</h1>
                            <p className="italic mb-10 font-custom-[Mona Sans,sans-serif] ">{item.para}</p>
                        </div>
                    ))
                }
            </div>



        </div>
    )
}
