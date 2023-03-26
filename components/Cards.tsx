import { Movie } from '@/models'
import React, { FC } from 'react'
import Card from './Card'

interface Movies {
    movies: Movie[];
    userInput: string;
}

const Cards: FC<Movies> = ({ movies, userInput }) => {

    return (
        <section className='grid grid-cols-4 gap-10 bg-[#222222] px-10 py-8 rounded-t-xl'>
            {movies.filter((item) => { return userInput.toLowerCase() === '' ? item : item.title.toLowerCase().includes(userInput) }).map(({ id, title, year, rating, large_cover_image }) => (
                <div key={id} className="space-y-5">
                    <Card id={id} large_cover_image={large_cover_image} year={year} rating={rating} title={title} />
                </div>
            ))}
        </section>
    )
}

export default Cards