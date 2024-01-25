import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { PlayCircle } from 'lucide-react'
import Link from 'next/link'

type Props = {}

const WelcomeDetails = (props: Props) => {
    return (
        <MaxWidthWrapper className='flex flex-col md:flex-row items-start justify-between space-y-6 md:space-y-0'>
            <div className='w-full space-y-3 md:mr-8'>
                <h3 className='text-3xl font-bold'>Welcome to School Name</h3>
                <p className='text-sm text-wrap'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo voluptatibus soluta nesciunt! Sequi possimus sunt voluptate quidem libero minima tempora beatae eligendi! Repellat eligendi expedita unde ducimus veritatis quo!
                    Consectetur quae explicabo dicta totam libero deleniti reiciendis, id rerum iure error repellat ullam eius nesciunt recusandae enim ipsa hic praesentium placeat aut quibusdam est possimus! Voluptatum accusamus eaque at.
                </p>

                <div className='mt-8' />

                <h3 className='text-2xl font-bold'>Vison</h3>
                <p className='text-sm text-wrap'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo voluptatibus soluta nesciunt!
                </p>

                <div className='mt-8' />

                <h3 className='text-2xl font-bold'>Mission</h3>
                <p className='text-sm text-wrap'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo voluptatibus soluta nesciunt!
                </p>
            </div>

            <div className='w-80'>
                <h3 className='text-2xl mb-4'>Featured Links</h3>

                <ul className='space-y-4 list-none cursor-pointer'>
                    <li className='flex items-center space-x-3 border-b border-gray-300 text-red-500 pb-2 animate-pulse'>
                        <PlayCircle className='w-4 h-4' />
                        <Link href="/login" className='text-sm'>Undergraduate Portal</Link>
                    </li>
                    <li className='flex items-center space-x-3 border-b border-gray-300 text-blue-500 pb-2 animate-pulse'>
                        <PlayCircle className='w-4 h-4' />
                        <p className='text-sm'>E- Transcript</p>
                    </li>
                    <li className='flex items-center space-x-3 border-b border-gray-300 hover:text-blue-500 pb-2'>
                        <PlayCircle className='w-4 h-4' />
                        <p className='text-sm'>Result Verification</p>
                    </li>
                    <li className='flex items-center space-x-3 border-b border-gray-300 hover:text-blue-500 pb-2'>
                        <PlayCircle className='w-4 h-4' />
                        <p className='text-sm'>Staff Portal</p>
                    </li>
                </ul>
            </div>

        </MaxWidthWrapper>
    )
}

export default WelcomeDetails