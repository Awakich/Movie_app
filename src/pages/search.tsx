import { FilmIcon } from '@heroicons/react/24/outline'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const MovieInfo: NextPage<Props> = ({ }) => {

    const router = useRouter()

    return (
        <section>
            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className='flex items-center justify-between'>
                <FilmIcon className='h-8 animate-pulse cursor-pointer' onClick={() => router.push('/')} />

                <button className='bg-white border text-black transition duration-150 rounded-md px-6 py-2 hover:bg-black hover:text-white font-light hover:border'>Log in</button>
            </nav>
        </section>
    )
}

export default MovieInfo