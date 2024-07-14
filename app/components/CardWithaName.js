import React from 'react';

export default function CardWithaName({ name, setSearchValue }) {
    return (
        <li
            className="shadow-lg px-4 py-2 rounded-lg bg-[#111111] cursor-pointer"
            onClick={() => setSearchValue(name)}
        >
            {name}
        </li>
    );
}
