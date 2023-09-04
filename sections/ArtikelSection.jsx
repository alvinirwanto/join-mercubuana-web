import React, { useEffect, useState } from 'react'
import TitleSection from '../components/TitleSection'

import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import ArtikelPreviewItem from '../components/Artikel/ArtikelPreviewItem';
import Link from 'next/link';
import axios from 'axios';

// export async function getServerSideProps() {
//     try {
//         // const strapiData = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?fields=title,publishedAt,content&populate=image,author.profilePicture,category&sort=publishedAt:desc&pagination[page]=1&pagination[pageSize]=3`);
//         const reqArticle = await fetch(process.env.NEXT_PUBLIC_STRAPI_API_URL + '/api/articles?fields=title,publishedAt,content&populate=image,author.profilePicture,category&sort=publishedAt:desc&pagination[page]=1&pagination[pageSize]=3')
//         const article = await reqArticle.json()

//         return {
//             props: {
//                 data: strapiData,
//             },
//         };
//     } catch (error) {
//         console.error('Error fetching Strapi data:', error);
//         return {
//             props: {
//                 data: null, // Handle the error gracefully by passing null
//             },
//         };
//     }
// }

export default function ArtikelSection() {

    // console.log(data)
    const [data, setData] = useState([]);

    // const fetchData = async () => {
    //     const strapiData = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?fields=title&fields=publishedAt&fields=content&populate=image,author.profilePicture,category&sort=publishedAt:desc&pagination[page]=1&pagination[pageSize]=3`)
    //     setData(strapiData?.data?.data);
    // };

    // useEffect(() => {
    //     fetchData();
    // }, [data]);

    return (
        <div name='artikel' className='primary-padding my-[10rem]'>
            <div
            // variants={slideIn('up', 0, 0.5)}
            // initial='hidden'
            // whileInView='show'
            >
                <TitleSection
                    title='Artikel'
                />

                {/* <div className='mt-[5rem]'>
                    <div className='grid grid-cols-3 gap-8 mt-[3rem]'>
                        {
                            data?.map((article, i) => (
                                <ArtikelPreviewItem
                                    key={i}
                                    category={article?.attributes?.category?.data?.attributes?.category}
                                    title={article?.attributes?.title}
                                    content={article?.attributes?.content}
                                    image={process.env.NEXT_PUBLIC_STRAPI_API_URL + article?.attributes?.image?.data?.attributes?.url}
                                    author={article?.attributes?.author?.data?.attributes?.author}
                                    profilePicture={process.env.NEXT_PUBLIC_STRAPI_API_URL + article?.attributes?.author?.data?.attributes?.profilePicture?.data?.attributes?.url}
                                    publishedAt={article?.attributes?.publishedAt}
                                />
                            ))
                        }
                    </div>
                </div> */}

                <div className='w-full flex justify-center items-center mt-[5rem]'>
                    <Link
                        href={'/artikel'}
                        className='bg-primary-blue hover:bg-blue-600 duration-150 rounded-full text-white px-8 py-2'
                    >
                        Lihat Selengkapnya
                    </Link>
                </div>
            </div>
        </div>
    )
}