import Layout from '../components/Layout'
import axios from 'axios';

import { RiSearchLine } from 'react-icons/ri'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProgressBar } from 'react-loader-spinner';

import Image from 'next/image';

import React from 'react'

// export async function getServerSideProps({ query }) {

//     const selectedCategory = query.category || 'All';
//     const searchQuery = query.search || '';

//     const reqAllArticle = await axios.get(process.env.NEXT_PUBLIC_API + '/items/Article?fields=*,user_created.first_name, user_created.last_name, user_created.avatar,Category.Category&sort=-date_created')
//     const allArticles = await reqAllArticle.data

//     const reqCategory = await axios.get(process.env.NEXT_PUBLIC_API + '/items/Category?fields=Category')
//     const categories = await reqCategory.data

//     const reqArticleCategory = await axios.get(process.env.NEXT_PUBLIC_API + `/items/Article?filter[Category][Category][_eq]=${selectedCategory}&fields=*,user_created.first_name, user_created.last_name, user_created.avatar,Category.Category`);
//     const reqArticleSearch = await axios.get(process.env.NEXT_PUBLIC_API + `/items/Article?filter[Title][_icontains]=${searchQuery}&fields=*,user_created.first_name, user_created.last_name, user_created.avatar,Category.Category`);

//     return {
//         props: {
//             allArticles,
//             categories,
//             selectedCategory,
//             searchQuery,
//         }
//     }
// }

export default function test() {

    const [allArticles, setAllArticles] = useState();
    const [categories, setCategories] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [searchQuery, setSearchQuery] = useState();

    const fetchAllArticles = async () => {
        try {
            const data = await axios.get(process.env.NEXT_PUBLIC_API + '/items/Article?fields=*,user_created.first_name, user_created.last_name, user_created.avatar,Category.Category&sort=-date_created');
            setAllArticles(data?.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchAllArticles();
    }, []);

    console.log(allArticles)

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const [searchKeyword, setSearchKeyword] = useState()

    return (
        <>

            <div className='
                grid mt-[3rem]
                grid-cols-1 gap-x-4 gap-y-8 
                md:grid-cols-2 
                xl:grid-cols-3 xl:gap-x-6 xl:gap-y-[5rem] 
                '
            >
                <Image
                    src='https://gabung-api.mercubuana.ac.id/assets/2879adf9-0513-4100-8d1e-a908df28729e'
                    width={500}
                    height={500}
                    className='w-full h-full'
                />
            </div>
        </>
    )
}
