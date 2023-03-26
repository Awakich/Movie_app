import { FilmIcon } from '@heroicons/react/24/outline'
import { Context } from '@/context'
import React, { ChangeEvent, FC, useContext } from 'react'
import { useRouter } from 'next/router'

const Header: FC = ({ }) => {

    const { setUserInput } = useContext(Context)

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value)
    }

    const router = useRouter()

    return (
        <section >
            <nav className='flex items-center justify-between'>
                <FilmIcon className='h-8 animate-pulse cursor-pointer' onClick={() => router.push('/')} />

                <input type="text" className='outline-none px-4 py-2 rounded-lg bg-[#141414] w-1/5' placeholder='Search movie' onChange={inputHandler} />
            </nav>
        </section>
    )
}

export default Header