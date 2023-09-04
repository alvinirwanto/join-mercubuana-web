import Image from 'next/image'
import React from 'react'
import formatDate from '../../utils/formatDate'

export default function ArtikelPreviewItem({ category, title, content, image, author, profilePicture, publishedAt }) {
    return (
        <div className='flex flex-col gap-8'>
            <Image
                src={image}
                width={500}
                height={500}
                alt='image'
                className='w-full h-full max-h-[13rem] object-cover rounded-md'
            />
            <div className='flex flex-col justify-between px-4'>
                <div className='flex flex-col gap-3'>
                    <span className='font-medium text-primary-blue text-sm'>{category}</span>
                    <span className='text-xl text-black font-semibold line-clamp-2'>{title}</span>
                    <p className='opacity-70 text-sm line-clamp-2'>{content}</p>
                </div>

                <div className='flex justify-content-start items-center gap-4 mt-6'>
                    <Image
                        src={profilePicture}
                        width={500}
                        height={500}
                        alt='artikel'
                        className='w-[2rem] aspect-square object-cover rounded-full border-[1px]'
                    />
                    <div className='flex flex-col'>
                        <span className='font-medium text-xs'>{author}</span>
                        <span className='text-xs opacity-70'>{formatDate(publishedAt)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
