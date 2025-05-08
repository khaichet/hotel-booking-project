import React from 'react'

const Hero = () => {
    return (
        <div className=' w-full flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/slider2.png")]  bg-no-repeat bg-cover bg-center h-screen'>
            <p className='bg-[#49b9ff]/50 px-3,5 py-1 rounded-full mt-20'>The Ultimate Hotel Experience</p>
            <h1 className=' font-playfair text-2xl md:text-5xl md:tex-[56px] ,md:leading-[56px] font-bold md:font-extrabold max-w-xl'>Discover Your Perfect Gateway Destination </h1>
            <p className='max-w-130 mt-2 text-sm md:text-base'>Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.</p>
        </div>
    )
}

export default Hero