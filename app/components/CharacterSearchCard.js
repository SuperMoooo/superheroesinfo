import Link from 'next/link';
import React from 'react';
import { setCharacters } from '../store/characterSlice';
import { useDispatch } from 'react-redux';

export default function CharacterSearchCard({
    name,
    img,
    fullName,
    publisher,
    data,
}) {
    const dispach = useDispatch();
    const handleAddData = () => {
        dispach(setCharacters(data));
    };
    return (
        <Link href={`/pages/character/`} onClick={handleAddData}>
            <div className="flex flex-col items-center justify-between  border-[1px] border-[#1f1f1f] rounded-lg shadow-lg  h-full hover:scale-105 transition-all ">
                <img
                    src={img}
                    alt={fullName}
                    className="rounded-t-lg  aspect-square h-full object-cover"
                    loading="lazy"
                />
                <div className="flex flex-col items-start justify-center space-y-2 p-4 w-full flex-1">
                    <p className="text-2xl font-bold">{name}</p>
                    <hr className="w-full h-[0.2px] bg-[#1f1f1f] border-none" />
                    <div className="flex flex-row justify-between w-full">
                        <p className=" font-thin">
                            {fullName ? fullName : '???'}
                        </p>
                        <p className="italic font-thin">{publisher}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
