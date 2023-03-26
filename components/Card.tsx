import { Movie } from '@/models'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'


const Card: FC<Movie> = ({ large_cover_image, title, year, rating, id }) => {
    return (
        <div>
            <Link href={`/${id}`}>
                <Image src={large_cover_image} alt="cover_img" width={400} height={400} className="rounded-xl transition duration-100 hover:scale-90 cursor-pointer hover:opacity-75" />
                <h3 className='text-3xl font-bold'>{title}</h3>
                <div className='flex gap-5'>
                    <p className='text-[#c0c0c0] text-lg'>{year}</p>
                    <span className='font-bold text-emerald-500'>|</span>
                    <p className='text-[#c0c0c0] text-lg'>{rating}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card