
import alenaph from '../../assets/agencies/alenaph.webp'
import dog from '../../assets/agencies/dog.avif'
import glases from '../../assets/agencies/glases.avif'
import joey from '../../assets/agencies/joey.webp'
import odity from '../../assets/agencies/odity.webp'
import men from '../../assets/agencies/men.webp'
import leeya from '../../assets/agencies/leeya.webp'
import tocla from '../../assets/agencies/tocla.webp'
import chinese from '../../assets/agencies/chinese.webp'
import siera from '../../assets/agencies/siera.webp'
import women from '../../assets/agencies/women.avif'
import wendy from '../../assets/agencies/wendy.avif'
import timu from '../../assets/agencies/timu.avif'
// import '../../components/agencies/ImageSlider.css'

export default function ImageSlider() {
    const imagesslider = [
        {
            img: alenaph,
            name: 'alenaph',
            class: 'h-full w-full rounded-tl-[30px] rounded-br-[20px]',
        },
        {
            img: dog,
            name: 'dog',
            class: 'h-full w-full rounded-tr-[40px] rounded-bl-[30px]',
        },
        {
            img: glases,
            name: 'glases',
            class: 'h-full w-full rounded-tl-[50px] rounded-bl-[40px]',
        },
        {
            img: joey,
            name: 'joey',
            class: 'h-full w-full rounded-tr-[20px] rounded-br-[10px]',
        },
        {
            img: timu,
            name: 'timu',
            class: 'h-full w-full rounded-bl-[60px] rounded-tr-[50px]',
        },
        {
            img: women,
            name: 'women',
            class: 'h-full w-full rounded-tl-[35px] rounded-tr-[25px]',
        },
        {
            img: wendy,
            name: 'wendy',
            class: 'h-full w-full rounded-br-[45px] rounded-bl-[35px]',
        },
        {
            img: siera,
            name: 'siera',
            class: 'h-full w-full rounded-tl-[25px] rounded-br-[15px]',
        },
        {
            img: men,
            name: 'men',
            class: 'h-full w-full rounded-tr-[50px] rounded-tl-[40px]',
        },
        {
            img: tocla,
            name: 'tocla',
            class: 'h-full w-full rounded-bl-[30px] rounded-tr-[20px]',
        },
        {
            img: leeya,
            name: 'leeya',
            class: 'h-full w-full rounded-br-[40px] rounded-bl-[30px]',
        },
        {
            img: chinese,
            name: 'chinese',
            class: 'h-full w-full rounded-tl-[30px] rounded-tr-[10px]',
        },
        {
            img: odity,
            name: 'odity',
            class: 'h-full w-full rounded-br-[20px] rounded-tl-[10px]',
        },

    ]
    return (
        <div className=" w-full overflow-hidden sm:pb-10">
            <div className="flex gap-10 animate-marquee">
                {imagesslider.map((image, index) => (
                    <div
                        key={index}
                        className=" w-[200px] h-[200px] h md:h-[300px] md:w-[300px]  relative cursor-pointer flex-shrink-0"
                    >
                        <img
                            src={image.img}
                            className={`h-full w-full object-cover ${image.class}`}
                            alt=""
                        />
                        <span className="absolute w-[70px] sm:w-[100px] top-20 right-14 text-xs sm:text-xl opacity-0 text-center z-20 text-black p-2 bg-white rounded-[50px] hover:opacity-100">
                            @{image.name}
                        </span>
                    </div>
                ))}
                {/* Duplicate the images for a smooth loop */}
                {imagesslider.map((image, index) => (
                    <div
                        key={`duplicate-${index}`}
                        className="h-[300px] w-[300px] bg-cyan-200 relative cursor-pointer flex-shrink-0"
                    >
                        <img
                            src={image.img}
                            className={`h-full w-full object-cover ${image.class}`}
                            alt=""
                        />
                        <span className="absolute top-20 right-14 text-xl opacity-0 text-center z-20 text-black p-2 bg-white rounded-[50px] hover:opacity-100">
                            @{image.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>


    )
}
