import React from 'react'
import { roomDummyData } from '../assets/assets'
import Card from './Card'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const Featured = () => {
    const navigate = useNavigate()
    return (
        <div className=' flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
            <Title title='Featured Destination' subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences. ' />
            <div>
                <div className='flex flex-wrap items-center justify-between gap-6 mt-20 '>
                    {roomDummyData.slice(0, 4).map((room, index) => (
                        <Card key={room._id} room={room} index={index} />
                    ))}
                </div>
            </div>
            <button onClick={() => { navigate('/rooms'); scrollTo(0, 0) }}
                className=' my-16 px-4 py-2 tex-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer'
            >
                View All Destinations
            </button>
        </div>
    )
}

export default Featured