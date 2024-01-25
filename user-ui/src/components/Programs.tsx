import React from 'react'
import Image from 'next/image'
type Props = {}

const Programs = (props: Props) => {
    return (
       <div className='mt-16 relative'>
    {/* Background Image with Dark Overlay */}
    <Image src="/school_program.jpg" alt="Programs" width={1920} height={100} className="object-cover w-full h-full absolute inset-0 bg-natural-900 opacity-70" />

    {/* Three Cards with Green Background */}
    {/* <div className='flex justify-evenly items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='bg-green-500 w-80 h-50 p-4 text-white shadow-md'>
            <div className='w-full h-20 relative'>
                <Image src="/school_program.jpg" alt="Programs" width={1920} height={100} className="object-cover w-full h-full rounded-md" />
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl'>Card Title 1</h1>
            </div>
            <h3 className='text-center text-md font-semibold mt-2'>Bulleting 1</h3>
        </div>

        <div className='bg-green-500 w-80 h-50 p-4 text-white shadow-md'>
            <div className='w-full h-20 relative'>
                <Image src="/school_program.jpg" alt="Programs" width={1920} height={100} className="object-cover w-full h-full rounded-md" />
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl'>Card Title 2</h1>
            </div>
            <h3 className='text-center text-md font-semibold mt-2'>Bulleting 2</h3>
        </div>

        <div className='bg-green-500 w-80 h-50 p-4 text-white shadow-md'>
            <div className='w-full h-20 relative'>
                <Image src="/school_program.jpg" alt="Programs" width={1920} height={100} className="object-cover w-full h-full rounded-md" />
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl'>Card Title 3</h1>
            </div>
            <h3 className='text-center text-md font-semibold mt-2'>Bulleting 3</h3>
        </div>
    </div> */}
</div>
    )
}

export default Programs