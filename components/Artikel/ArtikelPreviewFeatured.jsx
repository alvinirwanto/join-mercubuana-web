import React from 'react'

export default function ArtikelPreviewFeatured() {
    return (
        <div className='grid grid-cols-2 gap-8'>
            <Image
                src={'/fasilitas/fasilitas-1.jpg'}
                width={500}
                height={500}
                className='w-full h-full max-h-[25rem] object-cover rounded-md'
            />
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-4'>
                    <span className='font-medium text-primary-blue'>Category</span>
                    <span className='text-4xl text-black font-semibold'>Cara Menjadi Manusia yang Bermanfaat bagi Dunia</span>
                    <p className='opacity-70 text-base line-clamp-3'>Ternyata, pisang dan semangka adalah dua contoh buah yang termasuk dalam keluarga berry, Ternyata, pisang dan semangka adalah dua contoh buah yang termasuk dalam keluarga berry Ternyata, pisang dan semangka adalah dua contoh buah yang termasuk dalam keluarga berryTernyata, pisang dan semangka adalah dua contoh buah yang termasuk dalam keluarga berry </p>
                </div>
                <div className='flex justify-content-start items-center gap-4'>
                    <Image
                        src={'/fasilitas/fasilitas-1.jpg'}
                        width={500}
                        height={500}
                        alt='fasilitas'
                        className='w-[2.5rem] aspect-square object-cover rounded-full'
                    />
                    <div className='flex flex-col gap-[1px]'>
                        <span className='font-medium text-sm'>Author</span>
                        <span className='text-xs opacity-70'>29 Agustus 2023</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
