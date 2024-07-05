'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import GridWithSearchCharacters from './components/GridWithSearchCharacters';

export default function Home() {
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await fetch(
                `/api/character?search=${searchValue}`
            );

            if (!response.ok) {
                throw new Error(
                    `Error: ${response.status} ${response.statusText}`
                );
            }

            const data = await response.json();

            setData(data.result.results);
        } catch (error) {
            console.error('Error fetching character data:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <header className="w-full p-4 border-b-[1px] border-[#1f1f1f]">
                <Navbar />
            </header>
            <main className="w-full p-4 flex items-center justify-center flex-col">
                <SearchBar
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    fetchData={fetchData}
                />
                <article className="flex items-center justify-center w-full h-full mt-12">
                    <GridWithSearchCharacters loading={loading} data={data} />
                </article>
            </main>
        </>
    );
}
