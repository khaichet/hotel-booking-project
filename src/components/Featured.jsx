import React from 'react'
import { roomDummyData } from '../assets/assets'
import Card from './Card'

const Featured = () => {
    return (
        <div>
            <div>
                <div className='flex flex-wrap items-center justify-between ga-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
                    {roomDummyData.slice(0, 4).map((room, index) => (
                        <Card key={room._id} room={room} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Featured