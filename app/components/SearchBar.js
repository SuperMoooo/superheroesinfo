'use client';
import React from 'react';
import CardWithaName from './CardWithaName';

export default function SearchBar({ searchValue, setSearchValue, fetchData }) {
    return (
        <div className="relative flex items-center justify-center flex-col">
            <label className="input input-bordered flex items-center gap-2 outline-none bg-transparent ">
                <input
                    type="text"
                    placeholder="Search Character"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            fetchData();
                        }
                    }}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-5 w-5 opacity-70 cursor-pointer"
                    onClick={fetchData}
                >
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                    />
                </svg>
            </label>
            <div className="flex flex-col items-center justify-center space-y-2 mt-6">
                <h2>Most searched:</h2>
                <ul className="flex flex-row items-center justify-center space-x-2">
                    <CardWithaName
                        name={'batman'}
                        setSearchValue={setSearchValue}
                    />
                    <CardWithaName
                        name={'iron man'}
                        setSearchValue={setSearchValue}
                    />
                    <CardWithaName
                        name={'flash'}
                        setSearchValue={setSearchValue}
                    />
                    <CardWithaName
                        name={'hulk'}
                        setSearchValue={setSearchValue}
                    />
                    <CardWithaName
                        name={'captain'}
                        setSearchValue={setSearchValue}
                    />
                </ul>
            </div>
        </div>
    );
}
