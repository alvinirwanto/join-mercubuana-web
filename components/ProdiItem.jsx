import React from 'react'
import Image from 'next/image'

const ProdiItem = ({ title, content, image, imgPosition }) => {
    return (
        <div className={`grid ${imgPosition === 'right' ? 'grid-cols-1 md:grid-cols-[1.2fr_1fr]' : 'grid-cols-1 md:grid-cols-[1fr_1.2fr]'} gap-6`}>
            <div className={`flex flex-col gap-4 p-4 md:p-8 border-[1px] border-gray-300 rounded-sm ${imgPosition === 'right' ? 'order-1' : 'order-2'}`}>
                <h3 className='text-2xl md:text-3xl font-semibold bg-[#00326f08] border-2 border-[#00326f10] text-primary-blue py-2 px-4 self-start'>{title}</h3>
                <p className='text-justify text-xl'>{content}</p>
            </div>
            <Image
                src={image}
                width={500}
                height={500}
                alt='foto'
                className={`object-cover h-full w-full rounded-sm order-1 ${imgPosition === 'right' ? 'order-2' : 'order-1'}`}
            />
        </div>
    )
}

export default ProdiItem