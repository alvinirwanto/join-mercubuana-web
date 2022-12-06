import React from 'react'
import Image from 'next/image'

const Heropage = () => {
    return (
        <div className='w-screen h-screen'>
            <Image
                src='/umb-hero-img.png'
                width={2000}
                height={2000}
                alt='Brand logo'
                className='w-screen h-screen object-cover'
            />
        </div>
    )
}

export default Heropage