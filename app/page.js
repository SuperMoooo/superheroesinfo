'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import GridWithSearchCharacters from './components/GridWithSearchCharacters';
import { getCharacters } from './actions';

export default function Home() {
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);

        try {
            const res = await getCharacters(searchValue);
            console.log(res.results);
            setData(res.results);
        } catch (err) {
            console.error(err);
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
