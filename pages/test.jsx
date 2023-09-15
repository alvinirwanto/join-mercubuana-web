import { useState, useEffect } from 'react';

export default function Test() {
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);


    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://gabung-api.mercubuana.ac.id/items/Article?fields=*,user_created.first_name, user_created.last_name, user_created.avatar, Category.Category');
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }

            const json = await res.json();
            setData(json);
        }

        async function fetchData2() {
            const res = await axios.get('https://gabung-api.mercubuana.ac.id/items/Article?fields=*,user_created.first_name, user_created.last_name, user_created.avatar, Category.Category');
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }

            const json = await res.json();
            setData2(json);
        }


        fetchData();
        fetchData2
    }, []);

    console.log('data : ', data)
    console.log('data2 : ', data2)

    // Use the fetched data in your component
    return <main>{data ? 'Joss' : 'Loading...'}</main>;
}
