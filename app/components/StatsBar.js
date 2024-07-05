import React from 'react';

export default function StatsBar({ title, value }) {
    return (
        <li className="w-full flex flex-row  items-center space-x-4">
            <h1
                className={`uppercase text-xl font-bold ${
                    value === 'null' && 'mr-7'
                }`}
            >
                {title}
            </h1>
            <div
                style={{
                    width: value === 'null' ? '0%' : parseInt(value) + '%',
                }}
                className={` h-full bg-yellow-600 flex justify-end items-center`}
            >
                <h2 className="mr-2 font-bold">
                    {value == 'null' ? '???' : value}
                </h2>
            </div>
        </li>
    );
}
