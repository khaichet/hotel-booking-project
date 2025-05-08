import { StarFilled } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ room, index }) => {
    return (
        <Link to={'/rooms/' + room._id} onClick={() => scrollTo(0, 0)} key={room._id}>
            <img src={room.images[0]} alt="" className='relative max-w-70 w-full' />
            {index % 2 === 0 && <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white font-medium rounded-xl overflow-hiddentext-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]'>Best Seller</p>}
            <div>
                <div className='flex items-center justify-between'>
                    <p className='font-playfair text-xl font-medium text-gray-800'>{room.hote.name}</p>
                    <div className='flex items-center gap-2'>
                        <img src="" alt="star-icon" />
                        <StarFilled />
                    </div>

                </div>
                <div>
                    <div>
                        <img src="" alt="location-icon" />
                        <span>{room.hotel.address}</span>
                    </div>
                    <div>
                    </div>
                    <div>
                        <p><span>${room.pricePerNight}</span>/night</p>
                        <button className='px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all'>Book now</button>
                    </div>
                </div>
            </div>

        </Link >
    )
}

export default Card